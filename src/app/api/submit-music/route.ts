import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const artistName = formData.get('artistName') as string
    const projectTitle = formData.get('projectTitle') as string
    const genre = formData.get('genre') as string
    const description = formData.get('description') as string
    const instagram = formData.get('instagram') as string
    const twitter = formData.get('twitter') as string
    const spotify = formData.get('spotify') as string
    const explicit = formData.get('explicit') === 'true'
    const juApproval = formData.get('juApproval') === 'true'
    const priorityReview = formData.get('priorityReview') === 'true'
    
    const coverFile = formData.get('cover') as File
    const audioFiles = formData.getAll('audio') as File[]

    const slug = projectTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

    let coverUrl = null
    if (coverFile) {
      const coverPath = `covers/${Date.now()}-${coverFile.name}`
      const { data: coverData, error: coverError } = await supabase.storage
        .from('music-uploads')
        .upload(coverPath, coverFile)
      
      if (coverError) {
        console.error('Cover upload error:', coverError)
      } else {
        const { data: { publicUrl } } = supabase.storage
          .from('music-uploads')
          .getPublicUrl(coverPath)
        coverUrl = publicUrl
      }
    }

    const { data: project, error: projectError } = await supabase
      .from('projects')
      .insert({
        slug,
        title: projectTitle,
        artist_name: artistName,
        cover_url: coverUrl,
        description,
        genre,
        status: juApproval ? 'under_review' : 'received'
      })
      .select()
      .single()

    if (projectError) {
      console.error('Project creation error:', projectError)
      return NextResponse.json({ error: 'Failed to create project' }, { status: 500 })
    }

    const tracks = []
    for (let i = 0; i < audioFiles.length; i++) {
      const audioFile = audioFiles[i]
      const audioPath = `audio/${Date.now()}-${audioFile.name}`
      
      const { data: audioData, error: audioError } = await supabase.storage
        .from('music-uploads')
        .upload(audioPath, audioFile)
      
      if (!audioError) {
        const { data: { publicUrl } } = supabase.storage
          .from('music-uploads')
          .getPublicUrl(audioPath)
        
        const { data: track } = await supabase
          .from('tracks')
          .insert({
            project_id: project.id,
            title: audioFile.name.replace(/\.[^/.]+$/, ""), // Remove file extension
            file_url: publicUrl,
            track_no: i + 1
          })
          .select()
          .single()
        
        if (track) tracks.push(track as any)
      }
    }

    if (priorityReview) {
      const { data: order } = await supabase
        .from('orders')
        .insert({
          amount: 29,
          currency: 'USD',
          status: 'created',
          source: 'priority'
        })
        .select()
        .single()

      if (order) {
        await supabase
          .from('promo_orders')
          .insert({
            order_id: order.id,
            package: 'priority_review',
            artist_name: artistName,
            links: JSON.stringify({ instagram, twitter, spotify })
          })
      }
    }


    return NextResponse.json({
      success: true,
      project: project,
      tracks: tracks,
      message: 'Music submitted successfully!'
    })

  } catch (error) {
    console.error('Submission error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

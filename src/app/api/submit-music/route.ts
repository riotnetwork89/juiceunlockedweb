import { NextRequest, NextResponse } from 'next/server'

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
    const juApproval = formData.get('juApproval') === 'true'
    const priorityReview = formData.get('priorityReview') === 'true'
    
    const coverFile = formData.get('cover') as File
    const audioFiles = formData.getAll('audio') as File[]

    const slug = projectTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

    const mockProject = {
      id: `project_${Date.now()}`,
      slug,
      title: projectTitle,
      artist_name: artistName,
      cover_url: coverFile ? `https://placeholder.com/covers/${coverFile.name}` : null,
      description,
      genre,
      status: juApproval ? 'under_review' : 'received'
    }

    const mockTracks = audioFiles.map((audioFile, i) => ({
      id: `track_${Date.now()}_${i}`,
      project_id: mockProject.id,
      title: audioFile.name.replace(/\.[^/.]+$/, ""),
      file_url: `https://placeholder.com/audio/${audioFile.name}`,
      track_no: i + 1
    }))

    if (priorityReview) {
      console.log('Mock priority review order created:', {
        amount: 29,
        currency: 'USD',
        status: 'created',
        source: 'priority',
        artist_name: artistName,
        links: { instagram, twitter, spotify }
      })
    }

    return NextResponse.json({
      success: true,
      project: mockProject,
      tracks: mockTracks,
      message: 'Music submitted successfully! (Demo mode - no files actually uploaded)'
    })

  } catch (error) {
    console.error('Submission error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

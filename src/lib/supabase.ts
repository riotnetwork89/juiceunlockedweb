import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Profile {
  id: string
  display_name?: string
  role: 'user' | 'editor' | 'admin'
  instagram?: string
  tiktok?: string
  x?: string
}

export interface Post {
  id: string
  title: string
  slug: string
  type: 'news' | 'premiere' | 'video' | 'interview' | 'review' | 'playlist' | 'sponsored'
  tags?: string[]
  cover_url?: string
  body_richtext?: any
  author: string
  status: 'draft' | 'published'
  featured: boolean
  published_at?: string
}

export interface Project {
  id: string
  slug: string
  title: string
  artist_name: string
  cover_url?: string
  description?: string
  genre?: string
  status: 'received' | 'under_review' | 'approved' | 'published'
  featured: boolean
  streams: number
  likes: number
  created_by: string
  created_at: string
}

export interface Track {
  id: string
  project_id: string
  title: string
  file_url: string
  duration?: number
  track_no: number
}

export interface Order {
  id: string
  user_id: string
  amount: number
  currency: string
  status: 'created' | 'paid' | 'failed' | 'refunded'
  source: 'promo' | 'priority' | 'merch'
  paypal_txn_id?: string
  created_at: string
}

export interface PromoOrder {
  id: string
  order_id: string
  package: 'ig_post' | 'ig_story' | 'podcast' | 'album_rollout' | 'priority_review'
  premiere_date?: string
  artist_name: string
  links?: string
  notes?: string
  deliverables: any[]
}

export interface Product {
  id: string
  name: string
  price: number
  sku: string
  images: string[]
  sizes: string[]
  stock: number
  active: boolean
  featured: boolean
}

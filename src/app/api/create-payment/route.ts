import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = 'USD', source, packageType, artistName, links } = await request.json()

    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        amount,
        currency,
        status: 'created',
        source
      })
      .select()
      .single()

    if (orderError) {
      console.error('Order creation error:', orderError)
      return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
    }

    if (source === 'promo' && packageType) {
      const { error: promoError } = await supabase
        .from('promo_orders')
        .insert({
          order_id: order.id,
          package: packageType,
          artist_name: artistName,
          links: JSON.stringify(links || {})
        })

      if (promoError) {
        console.error('Promo order creation error:', promoError)
      }
    }

    
    return NextResponse.json({
      success: true,
      orderId: order.id,
    })

  } catch (error) {
    console.error('Payment creation error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

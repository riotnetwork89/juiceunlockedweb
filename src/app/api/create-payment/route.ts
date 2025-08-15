import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = 'USD', source, packageType, artistName, links } = await request.json()

    const mockOrder = {
      id: `order_${Date.now()}`,
      amount,
      currency,
      status: 'created',
      source
    }

    if (source === 'promo' && packageType) {
      console.log('Mock promo order created:', {
        order_id: mockOrder.id,
        package: packageType,
        artist_name: artistName,
        links: JSON.stringify(links || {})
      })
    }

    return NextResponse.json({
      success: true,
      orderId: mockOrder.id,
    })

  } catch (error) {
    console.error('Payment creation error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

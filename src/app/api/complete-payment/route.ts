import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { orderId, paypalTransactionId } = await request.json()

    console.log('Mock payment completed:', {
      orderId,
      paypalTransactionId,
      status: 'paid'
    })

    return NextResponse.json({
      success: true,
      message: 'Payment completed successfully! (Demo mode)'
    })

  } catch (error) {
    console.error('Payment completion error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

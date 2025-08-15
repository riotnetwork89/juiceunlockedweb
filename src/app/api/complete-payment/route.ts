import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { orderId, paypalTransactionId } = await request.json()

    const { data: order, error: orderError } = await supabase
      .from('orders')
      .update({
        status: 'paid',
        paypal_txn_id: paypalTransactionId
      })
      .eq('id', orderId)
      .select()
      .single()

    if (orderError) {
      console.error('Order update error:', orderError)
      return NextResponse.json({ error: 'Failed to update order' }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: 'Payment completed successfully!'
    })

  } catch (error) {
    console.error('Payment completion error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

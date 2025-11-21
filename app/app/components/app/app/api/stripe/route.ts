import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-06-20' })

export async function POST(req: Request) {
  const { priceId } = await req.json()
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `https://your-deploy-url.vercel.app/dashboard`,
    cancel_url: `https://your-deploy-url.vercel.app`,
  })
  return Response.json({ url: session.url })
}

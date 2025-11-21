'use client'
import { loadStripe } from '@stripe/stripe-js'
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function PricingTable({ userId }: { userId: string }) {
  const plans = [
    { name: "Any 8 Features", price: "$19.99/mo", save: "Save 75%", priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_EIGHT || "price_test1", popular: true },
    { name: "All 25 Features", price: "$39.99/mo", save: "Save 84% – Best value", priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ALL || "price_test2", popular: false },
  ]

  const checkout = async (priceId: string) => {
    const res = await fetch('/api/stripe', { method: 'POST', body: JSON.stringify({ priceId, userId }), headers: {'Content-Type': 'application/json'} })
    const { url } = await res.json()
    window.location.href = url
  }

  return (
    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto my-20">
      {plans.map(p => (
        <div key={p.name} className={`rounded-3xl p-10 border-2 ${p.popular ? 'border-primary scale-105 shadow-2xl shadow-primary/30' : 'border-white/30'}`}>
          {p.popular && <div className="bg-primary text-black font-bold py-2 px-6 rounded-full inline-block mb-6">BEST VALUE</div>}
          <h3 className="text-3xl font-bold">{p.name}</h3>
          <p className="text-5xl font-bold my-6">{p.price}</p>
          <p className="opacity-80 mb-10">{p.save}</p>
          <button onClick={() => checkout(p.priceId)} className="w-full bg-primary text-black font-bold text-xl py-5 rounded-2xl hover:scale-105 transition">
            Start 14-Day Free Trial
          </button>
        </div>
      ))}
    </div>
  )
}

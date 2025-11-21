import PricingTable from '@/components/PricingTable'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-black text-white">
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-8">
          Freelance Hustle <span className="text-primary">Cashflow</span>
        </h1>
        <p className="text-2xl opacity-90 mb-16">
          The all-in-one business OS · 15 features live · 10 more coming · <strong>60% off forever</strong> for early users
        </p>
        <PricingTable userId="temp" />
        <p className="mt-20 text-lg opacity-70">
          Self-host free · No card required to start
        </p>
      </div>
    </div>
  )
}

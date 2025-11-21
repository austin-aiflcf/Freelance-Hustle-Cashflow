export default function Dashboard() {
  return (
    <div className="min-h-screen bg-dark p-10">
      <h1 className="text-5xl font-bold mb-6">Your Dashboard</h1>
      <p className="text-xl opacity-90 mb-12">Welcome to Freelance Hustle Cashflow — your all-in-one business OS</p>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
        <div className="bg-white/10 backdrop-blur rounded-2xl p-8">CRM (live soon)</div>
        <div className="bg-white/10 backdrop-blur rounded-2xl p-8">Invoicing (live soon)</div>
        <div className="bg-white/10 backdrop-blur rounded-2xl p-8">AI Marketing (live soon)</div>
        <div className="bg-white/10 backdrop-blur rounded-2xl p-8">Projects & Kanban (live soon)</div>
        <div className="bg-white/10 backdrop-blur rounded-2xl p-8">Calendar (live soon)</div>
        <div className="bg-white/10 backdrop-blur rounded-2xl p-8">White-label (live soon)</div>
      </div>

      <p className="mt-20 text-center text-lg opacity-70">
        15 features launching over the next 60 days · All free updates forever
      </p>
    </div>
  )
}

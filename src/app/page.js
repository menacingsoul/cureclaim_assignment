'use client'
import { ComplexNavbar } from '@/components/Navbar'
import { CreateClaim } from '@/components/CreateClaim'
import { PatientDetails } from '@/components/PatientDetails'
import { ClaimAmount } from '@/components/ClaimAmount'
export default function Home() {
  return (
    <main >
      <section className=' w-screen pt-4 bg-blue-gray-400 h-24  align-middle'><ComplexNavbar/></section>
      <section className=' align-middle '><CreateClaim/></section>
      
    </main>
  )
}

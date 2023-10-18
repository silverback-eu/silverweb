import Navbar from '@/components/silverweb/ui/Navbar'
import { BringToFront, Tags } from 'lucide-react'
import React from 'react'

export default async function SilverWebHomePage() {
    const quickApps = [{icon: <BringToFront size={23}/>, gradient: 'from-blue-500 to-blue-700', link: '/sw/'}, {icon: <Tags size={23}/>, gradient: 'from-violet-400 to-violet-700', link: '/sw/'}]
  return (
    <Navbar openApp={1} quickApps={quickApps}/>
  )
}

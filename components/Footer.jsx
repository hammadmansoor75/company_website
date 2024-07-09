import { Facebook, Github, Instagram, Twitter } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='mt-10'>
        <div className='flex items-center justify-center gap-5'>
            <Link href=''><Instagram/></Link>
            <Link href=''><Facebook/></Link>
            <Link href=''><Twitter/></Link>
            <Link href=''><Github/></Link>
        </div>
        <p className='mt-3 text-center text-sm'>© 2024 Your Company Name. All rights reserved.</p>
    </footer>
  )
}

export default Footer

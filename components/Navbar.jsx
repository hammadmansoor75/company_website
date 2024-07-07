"use client";
import Link from 'next/link'
import React,{useState} from 'react'
import {Menu, X} from 'lucide-react'


const navLinks = [
    {
        name : 'Home',
        link : '/'
    },
    {
        name : 'About',
        link : '/about'
    },
    {
        name : 'Projects',
        link : '/projects'
    },
    {
        name : 'Services',
        link : '/services'
    },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }
  return (
    <header className='container mx-auto p-8'>
        <nav className='flex items-center justify-between mx-10'>
            <h1 className='green-text font-bold'>Our Company</h1>
            <div className='hidden w-1/3.5 md:flex items-center gap-5'>
                {navLinks.map((link) => {
                    return <Link className="navLink" href={link.link} key={link.name}>{link.name}</Link>
                })}
                <button className='primary-btn'>Book a Call</button>
            </div>
            {isOpen && (
                <div className='flex flex-col items-center gap-3'>
                    {navLinks.map((link) => {
                    return <Link className="navLink" href={link.link} key={link.name}>{link.name}</Link>
                    })}
                </div>
            )}
            <div className='md:hidden'>
                <button onClick={toggleNavbar}>{isOpen ? <X/> : <Menu/>}</button>
            </div>
            
        </nav>
    </header>
  )
}

export default Navbar

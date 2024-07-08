'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from './ThemeToggle'

export default function NavBar() {
  return (
    <nav className="p-4 border-b-1">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
            <Image
                src="https://cuevana.biz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcuevana3.01e819b6.png&w=640&q=75"
                alt='logo'
                width={240}
                height={60}
                objectFit="contain"
            />
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  )
}
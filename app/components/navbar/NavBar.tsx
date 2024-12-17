'use client'
import { cn } from '@/app/lib/util'
import React, { useState } from 'react'
import { HoveredLink, Menu, MenuItem, ProductItem } from '../components/ui/navbar-menu'
import Image from 'next/image'

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  return (
    <div className={cn('z-50 mx-auto mt-10 max-w-[460px] sm:max-w-[580px]', className)}>
      <Menu setActive={setActive}>
        <Image
          className="top-10 dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={28}
          priority
        />
        <MenuItem setActive={setActive} active={active} item="About">
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div> */}
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          {/* <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div> */}
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div> */}
        </MenuItem>
      </Menu>
    </div>
  )
}

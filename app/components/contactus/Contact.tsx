'use client'
import React from 'react'
import { Label } from '../components/ui/label'
import { Input } from '../components/ui/input'
import { cn } from '@/app/lib/util'
import { Typography } from '../common/Typography'

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted')
  }
  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-bg-black p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <Typography variant="title" className="mb-4">
        Let&apos;s Connect
      </Typography>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="firstname">Name</Label>
          <Input id="firstname" placeholder="Tyler" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Message</Label>
          <Input id="twitterpassword" placeholder="Hello" type="text" />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-zinc-900 dark:from-zinc-900 dark:to-zinc-800 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send
          <BottomGradient />
        </button>

      </form>
    </div>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn('flex w-full flex-col space-y-2', className)}>{children}</div>
}

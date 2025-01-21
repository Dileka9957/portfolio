'use client'
import React from 'react'
import { Label } from '../components/ui/label'
import { Input } from '../components/ui/input'
import { cn } from '@/app/lib/util'
import { Typography } from '../common/Typography'
import { GlobeDemo } from './Globe'
import toast from 'react-hot-toast'
import { useForm } from "react-hook-form";
import Link from 'next/link'
import { IconBrandGithub,  IconBrandLinkedin,  IconBrandX } from '@tabler/icons-react'
interface FormData {
  name: string;
  email: string;
  message: string;
}

export function Contact() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderEmail: data.email,
          message: `Message from ${data.name}: ${data.message}`,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      toast.success("Message sent successfully!");
      reset(); // Clear form after successful submission
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to send message"
      );
    }
  };

  return (
    <>
      <div className='w-full flex flex-col lg:flex-row'>
        <div className="w-full lg:w-1/2 shadow-input rounded-none bg-bg-black p-4 md:rounded-2xl md:p-8 dark:bg-black">
          <Typography variant="title" className="mb-4">
            Let&apos;s Connect
          </Typography>

          <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="firstname">Name</Label>
              <Input
                  id="name"
                  placeholder="Tyler"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    {errors.name.message}
                  </span>
                )}
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="email">Email Address</Label>
              <Input 
              id="email" 
              placeholder="projectmayhem@fc.com" 
              {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })} 
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </LabelInputContainer>

            <LabelInputContainer className="mb-8">
              <Label htmlFor="twitterpassword">Message</Label>
              <Input
                  id="message"
                  placeholder="Hello"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    {errors.message.message}
                  </span>
                )}
            </LabelInputContainer>

            <div className='w-full flex justify-end'>
            <button
              className="bg-gradient-to-br relative group/btn from-zinc-800 dark:from-zinc-900 dark:to-zinc-800 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Send
              <BottomGradient />
            </button>

            </div>
            
          </form>
        </div>
              
        <div className="w-full lg:w-1/2">
            <div className="w-full h-full">
              <GlobeDemo />
            </div>
        </div>

      </div>

      {/* Footer content */}
      <div className='px-4 sm:px-8'>
        {/* <hr className='border-1'></hr> */}
        <div className="flex sm:flex-row flex-col-reverse justify-between items-center py-4">
          <p className="md:text-base text-sm font-light mt-3">
            Copyright © {new Date().getFullYear()} Nipun Dileka
          </p>
          <div className="flex flex-wrap space-x-6 items-center">
            <Link href="https://github.com/Dileka9957">
            <IconBrandGithub className=" text-neutral-300 dark:text-neutral-300" />
            </Link>
            <Link href="https://www.linkedin.com/in/nipun-dileka-b73530228/">
            <IconBrandLinkedin className="text-neutral-300 dark:text-neutral-300" />
            </Link>
            <Link href="https://www.linkedin.com/in/nipun-dileka-b73530228/">
            <IconBrandX className="text-neutral-300 dark:text-neutral-300" />
            </Link>
          </div>
        </div>
      </div>
  </>
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

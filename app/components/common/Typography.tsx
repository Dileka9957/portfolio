import * as React from 'react'
import { cva } from 'class-variance-authority'

// Define text variants type
type TextVariant =
  | 'hero'
  | 'title'
  | 'title2'
  | 'heading'
  | 'sub_heading'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'form_section_title'
  | 'section_heading'

// Props interface for Typography component
interface TypographyProps extends React.HTMLProps<HTMLElement> {
  className?: string
  variant: TextVariant
  displayAs?: keyof React.JSX.IntrinsicElements
}

// Initialize text variants using cva function
const textVariants = cva('', {
  variants: {
    variant: {
      hero: 'font-normal text-hero_sm md:text-hero leading-[1.2]',
      section_heading: 'text-[20px] text-slate-900 capitalize',
      form_section_title: 'text-[18px] font-semibold text-slate-900 capitalize',
      title: 'font-semibold tracking-normal text-h1_sm md:text-h1 leading-[1.1]',
      title2: 'font-syne text-h2 font-bold tracking-tight md:text-h2_sm leading-[1.1]',
      heading: '~text-2xl/3xl capitalize font-semibold ',
      sub_heading: 'text-md font-normal',
      body1: 'text-body font-normal leading-[1.4]',
      body2: 'text-base md:text-xl font-normal',
      caption: 'text-sm',
    },
  },
  defaultVariants: {
    variant: 'body1',
  },
})

// TypeScript function component using React.forwardRef
const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, displayAs = 'p', ...props }, ref) => {
    const Tag: any = displayAs
    return <Tag className={textVariants({ variant, className })} ref={ref} {...props} />
  },
)

Typography.displayName = 'Typography'

export { Typography, textVariants }

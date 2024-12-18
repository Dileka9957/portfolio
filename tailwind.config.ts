import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

import svgToDataUri from 'mini-svg-data-uri'
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'

export default {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // darkMode: "class",
  theme: {
  	extend: {
  		colors: {
			background: 'var(--background)',
        	foreground: 'var(--foreground)',
  			// background: 'hsl(var(--background))',
  			// foreground: 'hsl(var(--foreground))',
  			// card: {
  			// 	DEFAULT: 'hsl(var(--card))',
  			// 	foreground: 'hsl(var(--card-foreground))'
  			// },
  			// popover: {
  			// 	DEFAULT: 'hsl(var(--popover))',
  			// 	foreground: 'hsl(var(--popover-foreground))'
  			// },
  			// primary: {
  			// 	DEFAULT: 'hsl(var(--primary))',
  			// 	foreground: 'hsl(var(--primary-foreground))'
  			// },
  			// secondary: {
  			// 	DEFAULT: 'hsl(var(--secondary))',
  			// 	foreground: 'hsl(var(--secondary-foreground))'
  			// },
  			// muted: {
  			// 	DEFAULT: 'hsl(var(--muted))',
  			// 	foreground: 'hsl(var(--muted-foreground))'
  			// },
  			// accent: {
  			// 	DEFAULT: 'hsl(var(--accent))',
  			// 	foreground: 'hsl(var(--accent-foreground))'
  			// },
  			// destructive: {
  			// 	DEFAULT: 'hsl(var(--destructive))',
  			// 	foreground: 'hsl(var(--destructive-foreground))'
  			// },
  			// border: 'hsl(var(--border))',
  			// input: 'hsl(var(--input))',
  			// ring: 'hsl(var(--ring))',
  			// chart: {
  			// 	'1': 'hsl(var(--chart-1))',
  			// 	'2': 'hsl(var(--chart-2))',
  			// 	'3': 'hsl(var(--chart-3))',
  			// 	'4': 'hsl(var(--chart-4))',
  			// 	'5': 'hsl(var(--chart-5))'
  			// }
  		},
		  boxShadow: {
			input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
		  },
  		fontFamily: {
  			jost: [
  				'var(--font-jost)',
                    ...fontFamily.sans
                ]
  		},
  		fontSize: {
  			hero: '`clamp(4rem, 1vw + 2.75rem, 5.375rem)`',
  			hero_sm: '`clamp(3rem, 2vw + 1rem, 4rem)`',
			h1: `clamp(1.5rem, 2vw + 1rem, 1.875rem)`,
			h1_sm: `clamp(1.5rem, 2vw + 1rem, 1.875rem)`,
  			h2: '`clamp(1.5rem, 1vw + 1rem, 1.5rem)`',
  			h2_sm: '`clamp(1.286rem, 1vw + 1rem, 1.714rem)`',
  			heading: '`clamp(2.75rem, 3vw + 1rem, 3.5rem)`',
  			heading_sm: '`clamp(2.25rem, 5vw + 1rem, 2.75rem)`',
  			heading2: '`clamp(1.75rem, 1vw + 1rem, 2rem)`',
  			heading2_sm: '`clamp(1.5rem, 2vw + 1rem, 1.75rem)`',
  			heading3: '`clamp(2.25rem, 2vw + 1rem, 2.75rem)`',
  			heading3_sm: '`clamp(1.75rem, 3vw + 1rem, 2.25rem)`',
  			body: '`clamp(1.333rem, 1vw + 1rem, 1.667rem)`',
  			body_sm: '`clamp(1rem, 1vw + 1rem, 1.429rem)`'
  		},
  		animation: {
  			first: 'moveVertical 30s ease infinite',
  			second: 'moveInCircle 20s reverse infinite',
  			third: 'moveInCircle 40s linear infinite',
  			fourth: 'moveHorizontal 40s ease infinite',
  			fifth: 'moveInCircle 20s ease infinite',
  			shimmer: 'shimmer 2s linear infinite'
  		},
  		keyframes: {
  			moveHorizontal: {
  				'0%': {
  					transform: 'translateX(-50%) translateY(-10%)'
  				},
  				'50%': {
  					transform: 'translateX(50%) translateY(10%)'
  				},
  				'100%': {
  					transform: 'translateX(-50%) translateY(-10%)'
  				}
  			},
  			moveInCircle: {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'50%': {
  					transform: 'rotate(180deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			},
  			moveVertical: {
  				'0%': {
  					transform: 'translateY(-50%)'
  				},
  				'50%': {
  					transform: 'translateY(50%)'
  				},
  				'100%': {
  					transform: 'translateY(-50%)'
  				}
  			},
  			shimmer: {
  				from: {
  					backgroundPosition: '0 0'
  				},
  				to: {
  					backgroundPosition: '-200% 0'
  				}
  			}
  		}
  	
  	}
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
			"bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
          'bg-dot-thick': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`,
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' },
      )
    },
    //   require("tailwindcss-animate")
],
} satisfies Config

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'))
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  )

  addBase({
    ':root': newVars,
  })
}

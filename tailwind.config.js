/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Extend custom colors with CSS variables or static values
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1DA1F2",  // Twitter-like blue color
        secondary: "#14171A",  // Darker gray for text
        accent: "#ff5722",  // Accent color (e.g., button highlights)
        muted: "#6c757d",  // Muted text color
      },

      // Extend font families
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  // Default font
        serif: ['Merriweather', 'serif'],  // Serif font
        mono: ['Menlo', 'monospace'],  // Monospace font
      },

      // Extend font sizes
      fontSize: {
        'xxs': '0.65rem',  // Extra extra small
        'xs': '0.75rem',   // Extra small
        'sm': '0.875rem',  // Small
        'base': '1rem',    // Base size
        'lg': '1.125rem',  // Large
        'xl': '1.25rem',   // Extra large
        '2xl': '1.5rem',   // 2x large
        '3xl': '2rem',     // 3x large
        '4xl': '2.5rem',   // 4x large
        '5xl': '3rem',     // 5x large
      },

      // Extend spacing (padding, margin, etc.)
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '18': '4.5rem',
        '20': '5rem',
      },

      // Extend breakpoints for responsive design
      screens: {
        'xs': '480px',   // Extra small devices
        'sm': '640px',   // Small devices
        'md': '768px',   // Medium devices
        'lg': '1024px',  // Large devices
        'xl': '1280px',  // Extra large devices
        '2xl': '1536px', // 2x large devices
      },

      // Extend border radius
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        'full': '9999px',  // Full rounded (like pill buttons)
      },

      // Extend z-index values
      zIndex: {
        '-1': '-1',  // For background layering
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        'auto': 'auto',
      },
      
      // Add custom animations
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
    },
  },

  // Add plugins for common functionalities
  plugins: [
    require('@tailwindcss/forms'),         // For form inputs, checkboxes, etc.
    require('@tailwindcss/typography'),    // For rich text content
    require('@tailwindcss/aspect-ratio'),  // For responsive aspect ratios
    require('@tailwindcss/line-clamp'),    // For text truncation
  ],
};

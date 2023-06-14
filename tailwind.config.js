/** @type {import('tailwindcss').Config} */

module.exports = {
  
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: { screens: {
    'small':'250px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'large':'1085px',
    'xl': '1280px',
    '2xl': '1536px',
    'custom': '850px', // Novo breakpoint personalizado
  },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'purple-bt':'#8156bf',
        'pink2': '#DDBBFF',
        'pink':'#E8D2FF',
        'ciano':'#06143d',
        'purp':'#6e6499',
      },
    
      textColor: {
        'primary': '#888F70',
        'purple': '#8156bf',
        'purple-2': '#9b6cce',
        'pink':'#E8D2FF',
        'pink-2': '#DDBBFF',
        'pink-3':'#BBA2FF',
        'green-c':'#a0d6c1',
        'green-d':'#c0d6cd',
      },

      shadow: {
        'text-shadow': '2px 2px 2px rgba(0, 0, 0, 0.5)'
      }
      
    },fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
      mono: ['VT323'],
      sanss: ['Raleway'],
      karla: ['Karla', 'sans-serif'],
      fredoka:['Fredoka', 'sans-serif']
    }
  },
  plugins: [],
}

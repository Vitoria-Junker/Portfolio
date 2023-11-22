/** @type {import('tailwindcss').Config} */

module.exports = {
  
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: { screens: {
    'small':'250px',
    'li':'343px',
    'inter':'560px',
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
        'gradient-ct': 'linear-gradient(to right, rgba(15, 12, 64, 0.5), rgba(48, 43, 67, 0.5), rgba(36, 49, 62, 0.5)',
        'gradient-bg':'linear-gradient(19deg, #f3c3f2 0%, #DDD6F3 92%)',
        'gradient-radial':'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'image-bg': "url('/mountain.jpg')",
      },
      backgroundColor: {
        'purple-bt':'#8156bf',
        'pink2': '#DDBBFF',
        'pink':'#E8D2FF',
        'easy':'#f4a4f2',
        'ciano':'#06102b',
        'purp':'#6e6499',
        'green-c':'#d4f9ea',
        'green-d':'#c0d6cd',
      },
      colors: {
        'pink-3': '#BBA2FF',
      },
      textColor: {
        'primary': '#888F70',
        'purple': '#8156bf',
        'purple-2': '#9b6cce',
        'p':'#967ac1',
        'pink':'#E8D2FF',
        'pink-2': '#DDBBFF',
        'pink-3':'#BBA2FF',
        'green-c':'#a0d6c1',
        'green-d':'#c0d6cd',
        'blue-e':'#97a4a9',
      },

      shadow: {
        'text-shadow': '2px 2px 2px rgba(0, 0, 0, 0.5)'
      }
      
    },fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
      mono: ['VT323'],
      sanss: ['Raleway'],
      'volkhov': ['Volkhov', 'serif'],
      'old': ['Old Standard TT', 'serif'],
      karla: ['Karla', 'sans-serif'],
      fredoka:['Fredoka', 'sans-serif'],
      'playfair': ['Playfair Display', 'serif'],
      'ubuntu': ['Ubuntu Mono', 'monospace'],
      'inter':['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}

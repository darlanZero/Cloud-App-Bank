/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/pages/**/*.{js, ts, jsx, tsx, mdx}'
    ],
    theme: {
        screens: {
            xs: '360px',
            sm: '480px',
            m: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1440px',
        },

        
        extend: {
            colors: {
            'light-theme': {
                background: '#f5f5f5',
                text: '#333333',
                primary: '#4169E1',
                secondary: '#f8f9fa',
                border: '#ced4da',
            },
            'dark-theme': {
                background: '#121212',
                text_pr: '#E0E0E0',
                text_sc: '#FFFFFF',
                primary: '#BB86FC',
                secondary: '#252525',
                terciary: '#262C57',
                border: '#373737',
            },
            
        },
        fontFamily: {
            'sans': ['Inter', 'sans-serif'],
            'title': ['Kode Mono', 'sans-serif'],
            'subtitle': ['Poppins', 'sans-serif'],
            'paragraph': ['Roboto', 'sans-serif'],
        }
    },
        },
    darkMode: 'class',
    plugins: [],
}


/* */
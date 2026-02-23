/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF7B00',
                dark: '#121212',
                darker: '#080808',
                grey: '#2A2A2A',
            },
            fontFamily: {
                heading: ['Oswald', 'sans-serif'],
                body: ['Poppins', 'sans-serif'],
            }
        },
    },
    plugins: [],
}

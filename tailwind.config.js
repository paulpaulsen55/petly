/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                pp: {
                    'blue': '#0AE1FF',
                    'white': '#EEFBF5',
                    'gray': '#EEFBF5',
                    'black': '#080809',
                }
            },
        },
    },
    plugins: [],
}


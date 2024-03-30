/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                p: {
                    'blue': '#0AE1FF',
                    'white': '#EEFBF5',
                    'gray': '#A3A6A6',
                    'dark': '#394040',
                    'black': '#080809',
                }
            },
        },
        animation: {
            shine: "shine 1s",
        },
            keyframes: {
                shine: {
                    "100%": { left: "125%" },
                },
        },
    },
    plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: "#6767EA",
                    main: "#282E52",
                    dark: "#1B203B",
                },
            },
        },
    },
    plugins: [],
};

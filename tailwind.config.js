// const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}', // Add this line if your components are in a separate directory
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1E40AF',
                secondary: '#F59E0B',
                danger: '#EF4444',
                navbarbg: 'var(--navbarbackground)', // Keep this
            },
            fontFamily: {
                alatsi: ['Alatsi', 'sans-serif'],
                lucida: ['Lucida Calligraphy', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
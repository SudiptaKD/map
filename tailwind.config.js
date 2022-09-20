module.exports = {
  content: ["./src/**/*.{html,js}",
          "./src/**/*.{js,ts,jsx,tsx}",
          "./src/components/**/*.{js,ts,jsx,tsx}",
          "./src/components/layout/**/*.{js,ts,jsx,tsx}",],
  theme: {
      screens: {
          xs: '480px',
          sm: '576px',
          sm_md :'660px',
          md: '768px',
          md_lg: '870px',
          lg: '976px',
          xl: '1080px',
          '2xl' : '1280px',
          '3xl': '1440px',
          '4xl': '1640px',
        },
        fontFamily: {
          sans: ['Graphik', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
        extend: {
          spacing: {
            '128': '32rem',
            '144': '36rem',
          },
          borderRadius: {
            '4xl': '2rem',
          },
          colors: {
            'main-bg': '#F8F8F8',
            "header-bg" : '#FFFFFF'
          },
        }
  },
  plugins: [],
}
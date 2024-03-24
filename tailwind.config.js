
const config = {
  content: ["./src/**/*.{jsx,js,tsx,ts,css}"],
  theme: {
    extend: {
      colors: {
        'primary':'#005960',
        'secondary':'#98f5ff',
        'tertiary':'#00ffff',
        'error':'red'
      }
    },
    screens: {
      'lg': {'max': '2023px'},
      'sm': {'max': '1000px'},
    }
  },
  plugins: [],
};

export default config;

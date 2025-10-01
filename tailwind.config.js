/** @type {import('tailwindcss').Config} */
/**
 * Tailwind configuration for the Hotel Elite demo.  Tailwind needs to scan
 * the project files in order to generate the appropriate CSS classes.  Without
 * specifying these paths the compiled stylesheet will omit all of the classes
 * used in our React components, resulting in a blank page.  The `content`
 * array below lists every file glob that should be inspected.  You can add
 * additional patterns here if you create new folders or file types in the
 * future.
 *
 * See https://tailwindcss.com/docs/content-configuration for more details.
 */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,vue,svelte}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom brand colours used throughout the site.  Feel free to tweak
        // these values to adjust the look and feel.  These names are not
        // required by Tailwind but serve as semantic aliases in the markup.
        primary: '#5B3E78',
        secondary: '#ECEAF5',
        dark: '#1A1A1A',
      },
    },
  },
  plugins: [],
}


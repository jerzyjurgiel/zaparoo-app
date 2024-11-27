/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "var(--color-background)",
      foreground: "var(--color-foreground)",
      "foreground-disabled": "var(--color-foreground-disabled)",
      primary: "var(--color-primary)",
      success: "var(--color-success)",
      error: "var(--color-error)",
      "bd-filled": "var(--color-border-filled)",
      "bd-outline": "var(--color-border-outline)",
      "bd-input": "var(--color-border-input)",
      "btn-start": "var(--color-button-start)",
      "btn-end": "var(--color-button-end)"
    },
    extend: {
      backgroundImage: {
        "button-pattern":
          "radial-gradient(164.29% 190% at center top, #3FAEEC 0%, #4E4AF2 100%)",
        "card-pattern":
          "radial-gradient(68.44% 136.87% at center top, #333C4D 0%, #111928 100%)"
      }
    }
  },
  plugins: []
};

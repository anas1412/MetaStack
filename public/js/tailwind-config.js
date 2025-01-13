tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#80B5FA",
        secondary: "#2E363A",
        accent: "#FFD700",
        background: "#1F2937",
        text: "#F9FAFB",
        card: "#374151",
      },
      boxShadow: {
        glow: "0 0 15px rgba(128, 181, 250, 0.5)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out",
        slideInLeft: "slideInLeft 0.5s ease-out",
        slideInRight: "slideInRight 0.5s ease-out",
        bounce: "bounce 2s infinite",
      },
    },
  },
};

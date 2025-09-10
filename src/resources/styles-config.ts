// src/resources/styles-config.ts
export const googleFonts = [
    {
        name: "Roboto",
        css: "'Roboto', sans-serif",
        url: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
    },
    {
        name: "Inter",
        css: "'Inter', sans-serif",
        url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
    },
    {
        name: "Montserrat",
        css: "'Montserrat', sans-serif",
        url: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
    },
    {
        name: "Poppins",
        css: "'Poppins', sans-serif",
        url: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
    },
    {
        name: "Open Sans",
        css: "'Open Sans', sans-serif",
        url: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap"
    }
];

export const currentFontIndex = 3; // 0: Roboto, 1: Inter, etc.
export const currentFont = googleFonts[currentFontIndex];
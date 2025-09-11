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

export const headerStyles = {
    type: "fixed", // "default" | "fixed"
    sideBarDirection: "left", // "left" "right" "top" "bottom"
}

export const appColors = {
    primary: "#1976d2",
    secondary: "#9c27b0",
    success: "#4caf50",
    danger: "#f44336",
    warning: "#ff9800",
    dark: "#212121",
    light: "#f5f5f5",
    buttonHover: "#1565c0",
};
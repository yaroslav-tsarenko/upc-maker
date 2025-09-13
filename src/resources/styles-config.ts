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
    },
];

export const currentFontIndex = 3;
export const currentFont = googleFonts[currentFontIndex];

export const headerStyles = {
    type: "fixed" as "default" | "fixed",
    sideBarDirection: "left" as "left" | "right" | "top" | "bottom",
};

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

export const drawerConfig = {
    anchor: "top" as "left" | "right" | "top" | "bottom",
    width: "100%",
    padding: "20px",
    logoWidth: 120,
    logoHeight: 30,
    contentGap: "40px",
    navGap: "20px",
    contentAlign: "flex-start" as "flex-start" | "center" | "space-between" | "flex-end",
};

export type FooterType = "columns" | "center" | "mega";
export const footerStyles = {
    type: "columns" as FooterType,     // "columns" | "center" | "mega"
    showTopBorder: true,
    showBottomBorder: true,
    maxWidth: 1440,

    // spacing (px)
    paddings: {x: 70, y: 32},
    gap: 20,               // вертикальні відступи між секціями
    columnsGap: 50,        // між колонками

    logo: {width: 240, height: 30, align: "start" as "start" | "center" | "end"},

    colors: {
        bg: "var(--primary-color)",
        text: "var(--text-black)",
        muted: "var(--text-gray)",
        border: "var(--secondary-color)",
        link: "var(--quaternary-color)",
        linkHover: "var(--text-gray)",
    },

    grid: {colsXL: 1, colsLG: 3, colsMD: 2, colsSM: 1},

    font: {size: 16, legalSize: 20},

    sizes: {
        titles: {xl: 22, lg: 20, md: 18, sm: 18},
        links: {xl: 20, lg: 18, md: 16, sm: 16},
        icons: {xl: 30, lg: 25, md: 20, sm: 18},
    },

    radius: "100px 100px 0 0",
    shadow: "none",
};

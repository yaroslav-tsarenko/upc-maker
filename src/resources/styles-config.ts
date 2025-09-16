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

export const buttonColors = {
    primary: "var(--primary-color)",
    secondary: "var(--secondary-color)",
    tertiary: "var(--tertiary-color)",
    quaternary: "var(--quaternary-color)",

    success: "var(--success-color)",
    warning: "var(--warning-color)",
    danger: "var(--error-color)",
    info: "var(--info-color)",

    text: "var(--text-primary)",
    textSecondary: "var(--text-secondary)",
    muted: "var(--text-muted)",
    inverse: "var(--text-inverse)",

    hover: "var(--button-hover)",
    link: "var(--link-color)",
    linkHover: "var(--link-hover)",

    backgroundLight: "var(--background-light)",
    backgroundDark: "var(--background-dark)",
    surface: "var(--surface-color)",
    surfaceMuted: "var(--surface-muted)",

    border: "var(--border-color)",
    shadow: "var(--shadow-color)",
} as const;

export type ButtonColor = keyof typeof buttonColors;

export type HeaderScrollMode = "solid" | "blur";
export type HeaderType = "default" | "sticky" | "sticky-rounded";

export const headerStyles = {
    type: "sticky" as HeaderType,
    sideBarDirection: "left" as "left" | "right" | "top" | "bottom",
    linkColor: "var(--text-primary)",
    linkHoverColor: "var(--link-hover)",

    scrollMode: "solid" as HeaderScrollMode,
    scrollBackground: "var(--primary-color)",   // фон для solid
    scrollBlur: "50px",                          // blur для blur
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
    type: "mega" as FooterType,
    showTopBorder: true,
    showBottomBorder: true,
    maxWidth: 1440,

    paddings: { x: 70, y: 32 },
    gap: 20,
    columnsGap: 50,

    logo: { width: 240, height: 30, align: "start" as "start" | "center" | "end" },

    colors: {
        bg: "var(--primary-color)",

        title: "var(--text-primary)",
        text: "var(--secondary-color)",
        muted: "var(--text-inverse)",
        border: "var(--border-color)",
        link: "var(--text-inverse)",
        linkHover: "var(--text-gray)",

        contactLabel: "var(--background-dark)",   // Company / Address / Email / Phone labels
        contactHover: "var(--quaternary-color)",  // hover для email/phone

        socialHover: "var(--background-dark)",
    },

    grid: { colsXL: 1, colsLG: 3, colsMD: 2, colsSM: 1 },

    font: { size: 16, legalSize: 20 },

    sizes: {
        titles: { xl: 22, lg: 20, md: 18, sm: 18 },
        links: { xl: 20, lg: 18, md: 16, sm: 16 },
        icons: { xl: 30, lg: 25, md: 20, sm: 18 },
    },

    radius: "100px 100px 0 0",
    shadow: "none",
};

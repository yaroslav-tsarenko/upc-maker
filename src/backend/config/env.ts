export function env(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`${name} is not defined in environment variables.`);
    }
    return value;
}

export const ENV = {
    JWT_SECRET: env("JWT_SECRET"),
    MONGODB_URI: env("MONGODB_URI"),
    PORT: process.env.PORT || "3000",
    NODE_ENV: process.env.NODE_ENV || "development",
    COOKIE_NAME: env("COOKIE_NAME"),
    COOKIE_SECRET: env("COOKIE_SECRET"),
    FRONTEND_URL: env("FRONTEND_URL"),
    SMTP_HOST: env("SMTP_HOST"),
    SMTP_PORT: env("SMTP_PORT"),
    SMTP_USER: env("SMTP_USER"),
    SMTP_PASS: env("SMTP_PASS"),
    EMAIL_FROM: env("EMAIL_FROM"),
    EMAIL_RESET_URL: env("EMAIL_RESET_URL"),
};

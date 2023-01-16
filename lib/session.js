export const sessionOptions = {
    password: process.env.NEXT_PUBLIC_SESSION_PWD,
    cookieName: process.env.NEXT_PUBLIC_SESSION_COOKIE,
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production',
    },
}
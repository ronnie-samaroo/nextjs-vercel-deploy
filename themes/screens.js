export const size = {
    xs: 420,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1280,
    xxl: 1680,
    xxxl: 1920,
}

const screen = {
    xs: `(max-width: ${size.xs}px)`,
    sm: `(max-width: ${size.sm}px)`,
    md: `(max-width: ${size.md}px)`,
    lg: `(max-width: ${size.lg}px)`,
    xl: `(max-width: ${size.xl}px)`,
    xxl: `(max-width: ${size.xxl}px)`,
    xxxl: `(max-width: ${size.xxxl}px)`,
}

export const minscreen = {
    xs: `(min-width: ${size.xs}px)`,
    sm: `(min-width: ${size.sm}px)`,
    md: `(min-width: ${size.md}px)`,
    lg: `(min-width: ${size.lg}px)`,
    xl: `(min-width: ${size.xl}px)`,
    xxl: `(min-width: ${size.xxl}px)`,
    xxxl: `(min-width: ${size.xxxl}px)`,
}

export default screen

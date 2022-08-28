import { colors, typography } from '../theme/index'

const BASE = {
    // fontFamily: typography.primary,
    fontSize: 15,
    color: colors.black
}

const BOLD = {
    // fontFamily: typography.bold,
    color: colors.black
}

export const presets = {
    default: BASE,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: 56,
    },
    h2: {
        ...BOLD,
        fontSize: 40,
    },
    h3: {
        ...BOLD,
        fontSize: 36,
        fontWeight: 'bold',
        color: colors.lightBlack
    },
    h4: {
        ...BOLD,
        fontSize: 28,
    },
    h5: {
        ...BOLD,
        fontSize: 24,
        color: "#1D2939"
    },
    h6: {
        ...BOLD,
        fontSize: 18,
        color: colors.grey
    },
    overline: {
        // fontFamily: typography.regular,
        fontSize: 14,
    },
    subtitle: {
        ...BOLD,
        fontSize: 13
    },
    title: {
        ...BOLD,
        fontSize: 14
    },
    paragraph: {
        ...BOLD,
        fontSize: 20,
        color: "#299647"
    }
}
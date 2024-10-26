import { INFO_COLOR, PRIMARY_COLOR, PRIMARY_COLOR_TRANSPARENT, SECONDARY_COLOR, LIGHT, DANGER_COLOR, DARK } from "./constant";

import { StyleSheet } from "react-native";

export const typography = StyleSheet.create({
    textPrimary: {
        color: PRIMARY_COLOR
    },
    textSecondary: {
        color: SECONDARY_COLOR,
    },
    textLight: {
        color: LIGHT,
    },
    textDark: {
        color: DARK,
    },
    textDanger: {
        color: DANGER_COLOR,
    },
    textInfo: {
        color: INFO_COLOR
    },
    textWarning: {
      color:  WARNING_COLOR
    },
    textSuccess: {
        color: SUCCESS_COLOR
    },
    textPrimarytransparent: {
        color : PRIMARY_COLOR_TRANSPARENT,
    }
    textBold: {
        fontWeight: 'bold'
    },

    font12: {
        fontSize: 12
    },

    font14: {
        fontSize: 14
    },
    font16: {
        fontSize: 16
    },
    font20: {
        fontSize: 20
    }

})
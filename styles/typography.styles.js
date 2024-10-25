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

})
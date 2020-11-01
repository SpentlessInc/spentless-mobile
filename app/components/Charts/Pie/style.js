import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


const styles = StyleSheet.create({
    pie: {
        height: 280,
    },
    labelsContainer: {
        position: "absolute",
        width: 150,
        top: 90,
    },
    label: {
        textAlign: "center",
        fontFamily: FONTS.cairoBold,
        color: COLORS.gold,
        fontSize: 48,
    },
})

export default styles

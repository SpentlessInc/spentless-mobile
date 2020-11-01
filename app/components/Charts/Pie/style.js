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
        top: 100,
    },
    label: {
        textAlign: "center",
        fontFamily: FONTS.cairoBold,
    },
    spend: {
        color: COLORS.gold,
        fontSize: 28,
        height: 35,
    },
    balance: {
        color: COLORS.white,
        fontSize: 18,
        height: 25,
    },
})

export default styles
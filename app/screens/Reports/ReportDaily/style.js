import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
    },

    // details stuff
    detailsContainer: {
        marginTop: 30,
        alignItems: "center",
    },
    details: {
        backgroundColor: COLORS.gold,
        width: 325,
        height: 80,
        marginTop: 15,
        borderRadius: 15,
        alignItems: "center",
        flexDirection: "row",
    },
    detailsText: {
        width: "40%",
        paddingLeft: 20,
        fontSize: 24,
        fontFamily: FONTS.cairoBold,
        color: COLORS.black,
    },
    detailsChart: {
        width: "60%",
    },
})

export default styles
import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


const styles = StyleSheet.create({
    date: {
        fontFamily: FONTS.cairoRegular,
        color: COLORS.white,
        fontSize: 16,
        height: 22, // todo: figure out height for text components
    },
    dayTransactions: {
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20,
    },
    transaction: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: COLORS.gold,
        borderRadius: 5,
        marginTop: 5,
        height: 50,
    },

    // transaction card stuff
    infoContainer: {
        justifyContent: "center",
        paddingLeft: 10,
    },
    info: {
        color: COLORS.black,
        fontFamily: FONTS.cairoBold,
        fontSize: 16,
        height: 22,
    },
    category: {
        color: COLORS.black,
        fontFamily: FONTS.cairoRegular,
        fontSize: 14,
    },
    amountContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: 5,
    },
    amount: {
        color: COLORS.black,
        fontFamily: FONTS.cairoBold,
        fontSize: 16,
    },
})

export default styles
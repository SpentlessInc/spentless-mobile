import { Alert } from "react-native"


export const discardChangesEffect = (navigation, hasUnsavedChanges) => {
    navigation.addListener("beforeRemove", (e) => {
        if (!hasUnsavedChanges) {
            // If we don't have unsaved changes, then we don't need to do anything
            return
        }

        // Prevent default behavior of leaving the screen
        e.preventDefault()

        // Prompt the user before leaving the screen
        Alert.alert(
            "Discard changes?",
            "You have unsaved changes. Are you sure to discard them and leave the screen?",
            [
                { text: "Don't leave", style: "default", onPress: () => {} },
                {
                    text: "Discard",
                    style: "destructive",
                    // If the user confirmed, then we dispatch the action we blocked earlier
                    // This will continue the action that had triggered the removal of the screen
                    onPress: () => navigation.dispatch(e.data.action),
                },
            ],
        )
    })
}

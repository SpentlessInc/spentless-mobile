import React, { useState } from "react"
import { View, Text } from "react-native"

import PasswordInput from "@components/Inputs/PasswordInput"
import EmailInput from "@components/Inputs/EmailInput"
import Header from "@components/Header/Header"
import Button from "@components/Buttons/Button"
import { SIGNIN_SCREEN } from "@utils/constants"
import {
    validateEmail,
    validatePassword,
    validateConfirmPassword,
} from "@utils/validators"

import styles from "./style"


const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [emailErrors, setEmailErrors] = useState(null)
    const [passwordErrors, setPasswordErrors] = useState(null)
    const [confirmPasswordErrors, setConfirmPasswordErrors] = useState(null)

    const handleEmailChange = (value) => {
        setEmail(value)

        const errors = validateEmail(value)
        setEmailErrors(errors)
    }

    const handlePasswordChange = (value) => {
        setPassword(value)

        const errors = validatePassword(value)
        setPasswordErrors(errors)
    }

    const handleConfirmPasswordChange = (value) => {
        setConfirmPassword(value)

        const errors = validateConfirmPassword(password, value)
        setConfirmPasswordErrors(errors)
    }

    // email, new, confirm password shouldn't be null and errors should be empty
    const isValid = email
        && password
        && confirmPassword
        && !emailErrors
        && !passwordErrors
        && !confirmPasswordErrors
    return (
        <View style={styles.container}>
            <Header isSecondary={true} text="Sign Up"/>
            <View>
                <View>
                    <EmailInput
                        handleChange={handleEmailChange}
                        value={email}
                        style={styles.input}
                        errors={emailErrors}
                    />
                    <PasswordInput
                        placeholder="Enter password..."
                        handleChange={handlePasswordChange}
                        value={password}
                        style={styles.input}
                        errors={passwordErrors}
                    />
                    <PasswordInput
                        placeholder="Enter confirm password..."
                        handleChange={handleConfirmPasswordChange}
                        value={confirmPassword}
                        style={styles.input}
                        errors={confirmPasswordErrors}
                    />
                </View>
                <View style={styles.buttonsContainer}>
                    <Button
                        size="medium"
                        label="Sign Up"
                        color={isValid ? "gold": "grey"}
                        disabled={!isValid}
                    />
                    <Button color="none" handlePress={() => navigation.navigate(SIGNIN_SCREEN)}>
                        <Text style={styles.signIn}>
                            Have an account?
                            <Text style={styles.signInBold}>  Sign in.</Text>
                        </Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default SignUp

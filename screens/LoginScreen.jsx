import { Keyboard, KeyboardAvoidingView, View, Platform, ScrollView } from "react-native"
import MyImageBackground from "../components/MyImageBackground"
import { H1, H5, Span } from "../components/text"
import { styles } from "../styles/components.styles"
import MyTextInput from "../components/input/MyTextInput"
import PrimaryButton from "../components/buttons/PrimaryButton"

export default function LoginScreen() {
    return (
        <MyImageBackground>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.titleContainer}>
                    <H1>Welcome Back</H1>
                    <H5>Sign in to continue</H5>
                </View>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.inputContainer}

                >
                    <MyTextInput
                        title="Username"
                        type="text"
                        placeholder="abc@xyz.com"

                    />
                    <MyTextInput
                        title="Password"
                        type="password"
                        secureTextEntry={true}
                    />

                    <Span style={styles.rightLink}>Forgot Password?</Span>
                    <PrimaryButton title="Login" />
                </KeyboardAvoidingView>
            </ScrollView>
        </MyImageBackground>
    )
}
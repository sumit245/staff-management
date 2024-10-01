import { Keyboard, KeyboardAvoidingView, View, Platform, ScrollView } from "react-native"
import MyImageBackground from "../components/MyImageBackground"
import { H1, H5, H3, Span, H2 } from "../components/text"
import { styles } from "../styles/components.styles"
import MyTextInput from "../components/input/MyTextInput"
import Button from "../components/buttons/Button"

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
                    <Button style={[styles.btn, styles.bgPrimary, { justifyContent: 'center' }]}>
                        <H2 style={[styles.btnText, styles.textLarge, styles.textLight]}>Login</H2>
                    </Button>
                </KeyboardAvoidingView>
            </ScrollView>
        </MyImageBackground>
    )
}
import { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  View,
  Platform,
  ScrollView,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyImageBackground from "../components/MyImageBackground";
import { H1, H5, Span, H2 } from "../components/text";
import MyTextInput from "../components/input/MyTextInput";
import Button from "../components/buttons/Button";
import { styles } from "../styles/components.styles";
import { layouts, spacing, typography } from "../styles";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    setError("");
  }, []);

  const onSubmit = () => {
    const fakeEmail = "abc@xyz.com";
    const fakePassword = "123";

    if (username === fakeEmail && password === fakePassword) {
      navigation.navigate("attendancePunch");
    } else {
      setError("Please provide the correct credentials");
    }
  };

  return (
    <MyImageBackground>
      <ScrollView
        style={{ flex: 1 }}
      >
        <View style={[layouts.center, spacing.mv5]}>
          <H1 style={spacing.mv2}>Welcome Back</H1>
          <H5 style={spacing.mb5}>Sign in to continue</H5>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={spacing.mb5}
        >
          <MyTextInput
            title="Username"
            type="text"
            placeholder="abc@xyz.com"
            value={username}
            onChangeText={setUsername}
          />
          <MyTextInput
            title="Password"
            type="password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          {error ? (
            <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
          ) : null}

          <Span style={styles.rightLink}>Forgot Password?</Span>
          <Button
            style={[styles.btn, styles.bgPrimary, { justifyContent: "center" }]}
            onPress={onSubmit}
          >
            <H2
              style={[styles.btnText, styles.textLarge, typography.textLight]}
            >
              Login
            </H2>
          </Button>
        </KeyboardAvoidingView>
        <Button
          style={[styles.btn, styles.bgPrimary, { justifyContent: "center" }]}
          onPress={onSubmit}
        >
          <H2 style={[
            styles.btnText,
            styles.textLarge,
            typography.textLight]}>
            Login
          </H2>
        </Button>
      </ScrollView>
    </MyImageBackground>
  );
}

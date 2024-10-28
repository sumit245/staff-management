import { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  View,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyImageBackground from "../components/MyImageBackground";
import { H1, H5, Span, H2 } from "../components/text";
import MyTextInput from "../components/input/MyTextInput";
import Button from "../components/buttons/Button";
import { styles } from "../styles/components.styles";
import { layouts, spacing, typography } from "../styles";
import { login } from "../redux/actions";
import Icon from "react-native-vector-icons/Ionicons";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setError("");
  }, []);

  const onSubmit = () => {
    const result = login(username, password);
    if (result) {
      navigation.navigate("attendancePunch");
    } else {
      setError("Please provide the correct credentials");
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <MyImageBackground>
      <ScrollView style={{ flex: 1 }}>
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
            type="email"
            placeholder="abc@xyz.com"
            value={username}
            onChangeText={setUsername}
          />
          <View style={[styles.passwordContainer, { position: "relative" }]}>
            <MyTextInput
              title="Password"
              type="password"
              secureTextEntry={!isPasswordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              style={{
                position: "absolute",
                right: spacing.mr2.marginRight,
                top: 40,
              }}
              onPress={togglePasswordVisibility}
            >
              <Icon
                name={isPasswordVisible ? "eye-off" : "eye"}
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          {error ? (
            <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
          ) : null}

          <Span style={styles.rightLink}>Forgot Password?</Span>
        </KeyboardAvoidingView>
        <Button
          style={[styles.btn, styles.bgPrimary, { justifyContent: "center" }]}
          onPress={onSubmit}
        >
          <H2 style={[styles.btnText, styles.textLarge, typography.textLight]}>
            Login
          </H2>
        </Button>
      </ScrollView>
    </MyImageBackground>
  );
}

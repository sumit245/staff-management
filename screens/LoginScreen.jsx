// import all react native
import { useState } from "react";
import {
  KeyboardAvoidingView,
  View,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
// import components
import MyImageBackground from "../components/MyImageBackground";
import MyTextInput from "../components/input/MyTextInput";
import Button from "../components/buttons/Button";

// import styles
import { Span, H2, H3, P } from "../components/text";
import { layouts, spacing, styles, typography } from "../styles";
// import redux
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/staffActions";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async () => {
    setError("");
    try {
      const result = await dispatch(login(username, password));
      if (result) {
        navigation.navigate("attendancePunch");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred during login.");
    }
  };

  return (
    <MyImageBackground imageSource={require("../assets/Login.png")}>
      <ScrollView style={{ flex: 1 }}>
        <View style={[layouts.center, spacing.mv5]}>
          <H3 style={spacing.mv2}>Welcome Back</H3>
          <P style={spacing.mb5}>Sign in to continue</P>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={spacing.mb5}
        >
          <MyTextInput
            title="Username"
            type="email"
            placeholder="Enter your email"
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
                right: 12,
                top: 33,
              }}
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              <Icon
                name={isPasswordVisible ? "eye-off" : "eye"}
                size={30}
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

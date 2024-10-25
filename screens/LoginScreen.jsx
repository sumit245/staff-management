import { useState } from "react";
import {
  KeyboardAvoidingView,
  View,
  Platform,
  ScrollView,
  Text, TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import MyImageBackground from "../components/MyImageBackground";
import { H1, H5, Span, H2 } from "../components/text";
import MyTextInput from "../components/input/MyTextInput";
import Button from "../components/buttons/Button";
import ModalPopup from "../components/Modal";
import Avatar from "../components/Avatar";

import { styles } from "../styles/components.styles";
import { typography } from "../styles";

export default function LoginScreen() {
  const [popupVisible, setPopupVisible] = useState(false);
  const navigation = useNavigation();

  const onSubmit = () => {
    navigation.navigate('attendancePunch')
  };



  return (
    <MyImageBackground>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.titleContainer}>
          <H1>Welcome Back</H1>
          <H5>Sign in to continue</H5>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.inputContainer}
        >
          <MyTextInput title="Username" type="text" placeholder="abc@xyz.com" />
          <MyTextInput
            title="Password"
            type="password"
            secureTextEntry={true}
          />

          <Span style={styles.rightLink}>Forgot Password?</Span>
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
        </KeyboardAvoidingView>
      </ScrollView>

      {/* {popupVisible && (
        <ModalPopup
          visible={popupVisible}
          close={() => setPopupVisible((prev) => !prev)}
          negativeButton="Cancel"
          positiveButton="Login"
          action={() => { }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("homeScreen");
              setPopupVisible(false);
            }}
            activeOpacity={0.9}
            style={{ alignItems: "center", marginBottom: 4 }}
          >
            <Avatar
              // style={{ height: "40px" }}
              name="Rohit"
              avatar="https://cbx-prod.b-cdn.net/COLOURBOX24637694.jpg?width=800&height=800&quality=70"
              style={{ width: 120, height: 120 }}
            />
          </TouchableOpacity>

          <Text style={styles.message} numberOfLines={1}>
            Put your finger on above sensor to create attendance!!
          </Text>
        </ModalPopup>
      )} */}
    </MyImageBackground>
  );
}

// navigate is like href from any page to any page
// goBack only push to previous page in stack
// cangoBack allows or disallows back propagation

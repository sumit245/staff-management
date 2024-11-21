import { useState } from "react";
import { View } from "react-native";
import ContainerComponent from "../components/ContainerComponent";
import { spacing, SCREEN_WIDTH, typography, styles } from "../styles";
import MyHeader from "../components/header/MyHeader";
import { H2 } from "../components/text";
import Button from "../components/buttons/Button";
import MyTextInput from "../components/input/MyTextInput";

const EditProfileScreen = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSave = () => {
    console.log("Current Password:", currentPassword);
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <ContainerComponent>
      <MyHeader isBack={true} title="Edit Profile" hasIcon={true} />
      <View style={[spacing.mt5, spacing.mh2, { width: SCREEN_WIDTH - 16 }]}>
        <MyTextInput
          title="Current Password"
          placeholder="Enter current password"
          value={currentPassword}
          onChangeText={setCurrentPassword}
          secureTextEntry
        />
        <MyTextInput
          title="New Password"
          placeholder="Enter new password"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry
        />
        <MyTextInput
          title="Confirm New Password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <Button
          style={[
            styles.btn,
            styles.bgPrimary,
            { justifyContent: "center", marginHorizontal: 18 },
          ]}
        >
          <H2 style={[styles.btnText, styles.textLarge, typography.textLight]}>
            Save
          </H2>
        </Button>
      </View>
    </ContainerComponent>
  );
};

export default EditProfileScreen;

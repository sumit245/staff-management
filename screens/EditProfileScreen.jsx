import React, { useState } from "react";
import { View, TextInput } from "react-native";
import ContainerComponent from "../components/ContainerComponent";
import { styles, spacing, SCREEN_WIDTH, typography } from "../styles";
import MyHeader from "../components/header/MyHeader";
import { H2, P } from "../components/text";
import Button from "../components/buttons/Button";

const EditProfileScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    console.log("Updated Email:", email);
    console.log("Updated Password:", password);
  };

  return (
    <ContainerComponent>
      <MyHeader title="Edit Profile" isBack={true} />
      <View style={[spacing.mt5, spacing.mh2, { width: SCREEN_WIDTH - 16 }]}>
        <P style={styles.label}>Current Password</P>
        <TextInput
          style={styles.input}
          placeholder="Enter current password"
          value={password}
          onChangeText={setEmail}
        />
        <P style={styles.label}> New Password</P>
        <TextInput
          style={styles.input}
          placeholder="Enter new password"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
        <P style={styles.label}>Confirm New Password</P>
        <TextInput
          style={styles.input}
          placeholder="Confirm new password"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
        <Button
          style={[styles.btn, styles.bgPrimary, { justifyContent: "center" }]}
          onPress={handleSave}
        >
          <H2 style={[styles.btnText, styles.textLarge, typography.textLight]}>
            Save Changes
          </H2>
        </Button>
      </View>
    </ContainerComponent>
  );
};

export default EditProfileScreen;

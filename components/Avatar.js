import React, { useEffect } from "react";
import { View, Image, Text } from "react-native";
import { styles } from "../styles/components.styles";
import H1 from "./text/H2";

export default function Avatar({ avatar, name, online }) {
  useEffect(() => {
    console.log(avatar);
  }, [avatar]);

  return (
    <View style={styles.avatarContainer}>
      {avatar ? (
        <Image source={{ uri: avatar }} style={styles.profileImage} />
      ) : (
        <View
          style={[
            styles.profileImage,
            { justifyContent: "center", alignItems: "center" },
          ]}
        >
          <H1 style={[styles.titleText, { textTransform: "uppercase" }]}>
            {name.slice(0, 2)}
          </H1>
        </View>
      )}
      {online && <View style={[styles.onlineDot, styles.radioDot]} />}
    </View>
  );
}

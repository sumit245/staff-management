import React from "react";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles, layouts } from "../styles";
import { SCREEN_WIDTH } from "../styles/constant";
import { P, Span } from "./text";
import Avatar from "./Avatar";


export default function ProfileCard({ imageUri, name, phoneNumber }) {
  return (
    <View
      style={[
        styles.rowItem,
        styles.ph5,
        styles.pv5,
        { height: 120, width: SCREEN_WIDTH },
      ]}
    >
      <Avatar avatar={imageUri} name={name} />
      <View style={layouts.flex1}>
        <P style={{ fontWeight: "bold" }}>{name}</P>
        <Span>{phoneNumber}</Span>
      </View>
      <Icon name="chevron-forward-outline" size={20} color="#333" />
    </View>
  );
}

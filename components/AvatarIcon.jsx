import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import ContainerComponent from "./ContainerComponent";
import { styles } from "../styles/components.styles";

export default function AvatarIcon() {
  return (
    <ContainerComponent>
      <View style={styles.container}>
        {/* Avatar Icon */}
        <View style={styles.avatarItem}>
          <Avatar.Icon
            size={50}
            icon={() => <Icon name="person" size={24} color="white" />}
            style={{ backgroundColor: "#3498db" }}
          />
          <Text style={styles.avatarText}>Avatar Icon</Text>
        </View>

        {/* Avatar Text */}
        <View style={styles.avatarItem}>
          <Avatar.Text
            size={50}
            label="AB"
            style={{ backgroundColor: "#3498db" }}
            labelStyle={{ color: "white" }}
          />
          <Text style={styles.avatarText}>Avatar Text</Text>
        </View>

        {/* Avatar Image */}
        <View style={styles.avatarItem}>
          <Avatar.Image
            size={50}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNzU1Ajo-RClF42aO2dvjvDRFcjPtvNuPUwTU92WutY5sB_8xV4vLcdoqEjn2vtd-_-MA&usqp=CAU",
            }}
          />
          <Text style={styles.avatarText}>Avatar Image</Text>
        </View>
      </View>
    </ContainerComponent>
  );
}

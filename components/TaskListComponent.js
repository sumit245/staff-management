import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import { styles } from "../styles/components.styles";

export default function TaskListComponent({ id, name, passtoParent }) {
  const [nameState, setNameState] = useState("");

  useEffect(() => {
    passtoParent(nameState);
  }, [name]);

  return (
    <View>
      <Text>{name}</Text>
      <TextInput value={nameState} onChangeText={(val) => setNameState(val)} />
    </View>
  );
}

const style = StyleSheet.create({
  text: { color: "red" },
});

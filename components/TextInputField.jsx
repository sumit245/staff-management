import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const TextInputField = ({ label, value, setValue, multiline = false }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, multiline && styles.textArea]}
        value={value}
        onChangeText={setValue}
        multiline={multiline}
        numberOfLines={multiline ? 4 : 1}
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  textArea: {
    height: 80,
  },
});

export default TextInputField;

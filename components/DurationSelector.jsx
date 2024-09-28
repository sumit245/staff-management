import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const DurationSelector = ({ duration, setDuration }) => {
  return (
    <View>
      <Text style={styles.label}>Duration</Text>
      <View style={styles.durationContainer}>
        <TouchableOpacity
          style={[
            styles.durationButton,
            duration === "Single day" && styles.durationButtonActive,
          ]}
          onPress={() => setDuration("Single day")}
        >
          <Text style={styles.durationButtonText}>Single day</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.durationButton,
            duration === "Multiple days" && styles.durationButtonActive,
          ]}
          onPress={() => setDuration("Multiple days")}
        >
          <Text style={styles.durationButtonText}>Multiple days</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.durationButton,
            duration === "Hours" && styles.durationButtonActive,
          ]}
          onPress={() => setDuration("Hours")}
        >
          <Text style={styles.durationButtonText}>Hours</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  durationContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  durationButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
  },
  durationButtonActive: {
    backgroundColor: "#007bff",
  },
  durationButtonText: {
    color: "#333",
  },
});

export default DurationSelector;

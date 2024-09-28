import React from "react";
import { Picker } from "@react-native-picker/picker";
import { View, Text, StyleSheet } from "react-native";

const LeaveTypePicker = ({ leaveType, setLeaveType }) => {
  return (
    <View>
      {/* Add Apply Leave title */}
      <Text style={styles.pageTitle}>Apply Leave</Text>

      {/* Leave type picker */}
      <Text style={styles.label}>Leave type</Text>
      <Picker
        selectedValue={leaveType}
        style={styles.picker}
        onValueChange={(itemValue) => setLeaveType(itemValue)}
      >
        <Picker.Item label="Select Leave Type" value="" />
        <Picker.Item label="Sick Leave" value="sick" />
        <Picker.Item label="Vacation" value="vacation" />
        {/* Add more leave types as needed */}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20, // Space around the title
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
    borderRadius: 5,
  },
});

export default LeaveTypePicker;

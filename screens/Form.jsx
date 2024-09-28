import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import LeaveTypePicker from "../components/LeaveTypePicker";
import DurationSelector from "../components/DurationSelector";
import DatePickerInput from "../components/DatePickerInput";
import TextInputField from "../components/TextInputField";
import PrimaryButton from "../components/buttons/PrimaryButton";

export default function Form() {
  const [leaveType, setLeaveType] = useState("");
  const [duration, setDuration] = useState("Single day");
  const [date, setDate] = useState(new Date());
  const [reason, setReason] = useState("");

  const handleSubmit = () => {
    console.log({
      leaveType,
      duration,
      date: date.toDateString(),
      reason,
    });
  };

  return (
    <View style={styles.container}>
    
      <View style={styles.formContainer}>
        <LeaveTypePicker leaveType={leaveType} setLeaveType={setLeaveType} />
        <DurationSelector duration={duration} setDuration={setDuration} />
        <DatePickerInput date={date} setDate={setDate} />
        <TextInputField
          label="Reason"
          value={reason}
          setValue={setReason}
          multiline
        />
              {/* <SubmitButton onPress={ handleSubmit } /> */}
              <PrimaryButton onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    padding: 20,
  },
});

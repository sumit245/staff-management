import { useState } from "react";
import { View } from "react-native";
import DurationSelector from "../components/DurationSelector";
import DatePickerInput from "../components/input/DatePickerInput";
import PrimaryButton from "../components/buttons/PrimaryButton";
import MyPickerInput from "../components/input/MyPickerInput";
import { leaveReasons } from "../utils/faker";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import MyTextInput from "../components/input/MyTextInput";
import { styles } from "../styles/components.styles";

export default function ApplyLeaveForm() {
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
    <ContainerComponent>
      <MyHeader title="Apply Leave" />
      <View style={styles.formContainer}>
        <MyPickerInput title="Leave Type" value={leaveType} onChange={setLeaveType} options={leaveReasons} />
        <DurationSelector duration={duration} setDuration={setDuration} />
        <DatePickerInput title="Select Date" mode="date" date={date} setDate={setDate} />
        <MyTextInput
          title="Reason"
          type="text"
          value={reason}
          onChangeText={setReason}
          multiline
          numberOfLines={5}
          placeholder="Enter reason of leave briefly"
          style={{ ...styles.textInputField, height: 126 }} />
        <PrimaryButton onPress={handleSubmit} title="Apply Now" />
      </View>
    </ContainerComponent>
  );
}


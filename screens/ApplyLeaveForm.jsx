import { useState } from "react";
import { View } from "react-native";
import { H2, H5 } from "../components/text";
import DatePickerInput from "../components/input/DatePickerInput";
import MyPickerInput from "../components/input/MyPickerInput";
import { leaveReasons, leaveTypes } from "../utils/faker";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import MyTextInput from "../components/input/MyTextInput";
import MyChipSelector from "../components/input/MyChipSelector";
import { styles } from "../styles/components.styles";
import Button from "../components/buttons/Button";

export default function ApplyLeaveForm() {
  const [leaveType, setLeaveType] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [duration, setDuration] = useState("Single day");
  const [reason, setReason] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSubmit = () => {
    console.log({
      leaveType,
      contactNumber, // Include contact number in the submission
      duration,
      startDate: startDate.toDateString(),
      endDate: endDate.toDateString(),
      reason,
    });
  };

  return (
    <ContainerComponent>
      <MyHeader title="Apply Leave" />
      <View style={styles.formContainer}>
        <MyPickerInput
          title="Leave Type"
          value={leaveType}
          onChange={setLeaveType}
          options={leaveReasons}
        />

        <View style={{ marginVertical: 4 }}>

          <MyTextInput
            title="Contact Number"
            type="text"
            value={contactNumber}
            onChangeText={setContactNumber}
            placeholder="Enter your contact number"
            style={{ ...styles.textInputField, height: 48 }} // Adjust height as needed
          />
        </View>

        <View style={{ marginVertical: 4 }}>
          <H5>Duration</H5>
          <View style={styles.row}>
            {leaveTypes.map((option, index) => (
              <MyChipSelector
                icon={option.icon}
                id={option.id}
                title={option.type}
                key={index}
                onPressed={() => setDuration(option.type)}
              />
            ))}
          </View>
        </View>

        <View style={{ marginVertical: 4 }}>
         
          <DatePickerInput
            title="Start Date"
            mode="date"
            date={startDate}
            setDate={setStartDate}
            style={{ flex: 1, marginBottom: 8 }}
          />
        </View>

        <View style={{ marginVertical: 4 }}>
          <DatePickerInput
            title="End Date"
            mode="date"
            date={endDate}
            setDate={setEndDate}
            style={{ flex: 1 }}
          />
        </View>

        <MyTextInput
          title="Reason"
          type="text"
          value={reason}
          onChangeText={setReason}
          multiline
          numberOfLines={5}
          placeholder="Enter reason of leave briefly"
          style={{ ...styles.textInputField, height: 126 }}
        />

        <Button
          style={[styles.btn, styles.bgPrimary, { justifyContent: "center" }]}
          onPress={handleSubmit}
        >
          <H2 style={[styles.btnText, styles.textLarge, styles.textLight]}>
            Apply Now
          </H2>
        </Button>
      </View>
    </ContainerComponent>
  );
}

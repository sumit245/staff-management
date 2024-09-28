import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import StatusText from "./StatusText";
import TimeText from "./TimeText";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";

import { styles } from "../styles/components.styles";

const CheckInCheckOut = () => {
  const [status, setStatus] = useState("Not Checked In");
  const [checkedIn, setCheckedIn] = useState(false);
  const [time, setTime] = useState(null);

  const handleCheckIn = (currentTime) => {
    setStatus("Checked In");
    setCheckedIn(true);
    setTime(currentTime);
  };

  const handleCheckOut = (currentTime) => {
    setStatus("Checked Out");
    setCheckedIn(false);
    setTime(currentTime);
  };

  return (
    <View style={styles.container}>
      <StatusText text={status} />
      <TimeText time={time} />

      {checkedIn ? (
        <CheckOut onCheckOut={handleCheckOut} />
      ) : (
        <CheckIn onCheckIn={handleCheckIn} />
      )}
    </View>
  );
};

export default CheckInCheckOut;

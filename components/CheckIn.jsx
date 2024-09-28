import React from "react";
import PrimaryButton from "./buttons/PrimaryButton";

const CheckIn = ({ onCheckIn }) => {
  const handleCheckIn = () => {
    const currentTime = new Date().toLocaleTimeString();
    onCheckIn(currentTime);
  };

  return (
    <PrimaryButton style={styles.primaryButton}>
      <H2 style={styles.btnText}>{title}</H2>
    </PrimaryButton>
  );
};

export default CheckIn;

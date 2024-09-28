import React from "react";
import PrimaryButton from "./buttons/PrimaryButton";

const CheckOut = ({ onCheckOut }) => {
  const handleCheckOut = () => {
    const currentTime = new Date().toLocaleTimeString();
    onCheckOut(currentTime);
  };

  return (
    <PrimaryButton style={styles.primaryButton}>
      <H2 style={styles.btnText}>{title}</H2>
    </PrimaryButton>
  );
};

export default CheckOut;

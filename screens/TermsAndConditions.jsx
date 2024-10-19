import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import MyHeader from "../components/header/MyHeader";
import CustomCheckbox from "../components/input/CustomCheckbox";
import Button from "../components/buttons/Button";
import { H6, H2 } from "../components/text";
import { styles } from "../styles/components.styles";
import ContainerComponent from "../components/ContainerComponent";

const TermsAndConditions = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const onSubmit = () => {
    if (isChecked) {
      alert("You have accepted the terms and conditions.");
    } else {
      alert("Please accept the terms and conditions to proceed.");
    }
  };

  return (
    <ContainerComponent>
      <View style={[styles.container, { flex: 1 }]}>
        <MyHeader title="Terms And Conditions" />
        <ScrollView contentContainerStyle={styles.scrollView}>
          <H6>
            By using the Dashandots Technology app, you agree to comply with the
            following terms and conditions. We reserve the right to update these
            terms at any time, and it is your responsibility to stay informed of
            any changes. Your use of the app constitutes acceptance of the
            current terms. The app's content, including but not limited to
            graphics, texts, logos, and software, is the property of Dashandots
            Technology. Unauthorized use, reproduction, or distribution is
            prohibited. You are also responsible for maintaining the
            confidentiality of your account and password and for restricting
            access to your device to prevent unauthorized access to your
            account. Any breach of security or unauthorized use must be reported
            to us immediately. We do not guarantee the uninterrupted or
            error-free operation of the app.
          </H6>

          <View style={styles.checkboxContainer}>
            <CustomCheckbox
              isChecked={isChecked}
              onPress={handleCheckboxChange}
              label="I accept the terms and conditions"
            />
          </View>
        </ScrollView>

        {/* Button fixed at the bottom */}
        <View style={{ position: "absolute", bottom: 50, left: 20, right: 20 }}>
          <Button
            style={[styles.btn, styles.bgPrimary, { justifyContent: "center" }]}
            onPress={onSubmit}
          >
            <H2 style={[styles.btnText, styles.textLarge, styles.textLight]}>
              Submit
            </H2>
          </Button>
        </View>
      </View>
    </ContainerComponent>
  );
};

export default TermsAndConditions;

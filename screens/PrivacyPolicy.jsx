import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import MyHeader from "../components/header/MyHeader";
import CustomCheckbox from "../components/input/CustomCheckbox";
import Button from "../components/buttons/Button";
import { H6, H2 } from "../components/text";
import { styles } from "../styles/components.styles";
import ContainerComponent from "../components/ContainerComponent";
const PrivacyPolicy = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const onSubmit = () => {
    if (isChecked) {
      alert("You have accepted the privacy policy.");
    } else {
      alert("Please accept the privacy policy to proceed.");
    }
  };

  return (
    <ContainerComponent>
      <View style={styles.container}>
        <MyHeader title="Privacy Policy" />
        <ScrollView contentContainerStyle={styles.scrollView}>
          <H6>
            At Dashandots Technology, we deeply value your privacy and are
            committed to safeguarding the personal information you share with
            us. We collect essential personal information, including but not
            limited to your name, email address, and contact details, to ensure
            the efficient delivery of our services, enhance user experience, and
            better understand your needs. We assure you that we do not sell,
            rent, or trade your personal information to any third parties
            without your explicit consent, unless mandated by legal
            requirements. Your data may only be shared with trusted partners or
            service providers who assist us in operating our app or conducting
            our business, and even then, only under strict confidentiality
            agreements. To ensure the security of your personal information, we
            have implemented robust security measures designed to protect
            against unauthorized access, misuse, or disclosure. These measures
            are continually updated to adapt to evolving security threats and
            industry standards. For any questions, concerns, or requests
            regarding your privacy, you can reach out to us at any time via
            email at info@dashandots.tech. We are committed to promptly
            addressing any concerns you may have.
          </H6>
          {/* </Text> */}

          <View style={styles.checkboxContainer}>
            <CustomCheckbox
              isChecked={isChecked}
              onPress={handleCheckboxChange}
              label="I accept the Privacy Policy"
            />
          </View>

          <Button
            style={[styles.btn, styles.bgPrimary, { justifyContent: "center" }]}
            onPress={onSubmit}
          >
            <H2 style={[styles.btnText, styles.textLarge, styles.textLight]}>
              Submit
            </H2>
          </Button>
        </ScrollView>
      </View>
    </ContainerComponent>
  );
};

export default PrivacyPolicy;

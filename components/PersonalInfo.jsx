import { View } from "react-native";
import { H4, H5, Span } from "../components/text";
import { styles } from "../styles/components.styles";
const PersonalInfo = ({ personalData }) => {
  return (
    <View style={styles.content}>
      <Span style={styles.label}>Full Name</Span>
      <H4 style={styles.value}>{personalData.fullName}</H4>

      <Span style={styles.label}>Email Address</Span>
      <H4 style={styles.value}>{personalData.email}</H4>

      <Span style={styles.label}>Phone Number</Span>
      <H4 style={styles.value}>{personalData.phone}</H4>

      <Span style={styles.label}>Address</Span>
      <H4 style={styles.value}>{personalData.address}</H4>
    </View>
  );
};

export default PersonalInfo;

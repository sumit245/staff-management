import { View } from "react-native";
import { styles } from "../styles/components.styles";
import Avatar from "./Avatar";
import ContactInfo from "./ContactInfo";

export default function ContactItem({ item }) {
  const { name, avatar, online, status } = item;
  return (
    <View style={styles.contactCard}>
      <Avatar avatar={avatar} name={name} online={online} />

      <ContactInfo name={name} status={status} />
    </View>
  );
}

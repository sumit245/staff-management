// import { View, Text, Image } from "react-native";
// import { styles } from "../styles/components.styles";

// export default function ContactItem({ item }) {
//   const { name, avatar, online, status } = item;

//   return (
//     <View style={styles.contactCard}>
//       <View style={styles.avatarContainer}>
//         {avatar ? (
//           <Image source={{ uri: avatar }} style={styles.avatar} />
//         ) : (
//           <View style={styles.placeholderAvatar}>
//             <Text style={styles.placeholderText}>{name.slice(0, 2)}</Text>
//           </View>
//         )}
//         {online && <View style={styles.onlineDot} />}
//       </View>
//       <View style={styles.contactInfo}>
//         <Text style={styles.contactName}>{name}</Text>
//         <Text style={styles.contactStatus}>{status}</Text>
//       </View>
//     </View>
//   );
// }

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

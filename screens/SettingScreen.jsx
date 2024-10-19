// import ProfileCard from "../components/ProfileCard";
// import MenuItem from "../components/MenuItem";
// import { menuItems } from "../utils/faker";
// import ContainerComponent from "../components/ContainerComponent";
// import { View } from "react-native";
// import { H5 } from "../components/text";
// import { DANGER_COLOR } from "../styles/constant";
// import Icon from "react-native-vector-icons/Ionicons";

// export default function SettingsScreen() {
//   return (
//     <ContainerComponent justifyContent="space-between">
//       <ProfileCard
//         imageUri="https://randomuser.me/api/portraits/men/7.jpg"
//         name="Mihir Mishra"
//         phoneNumber="+91 6204765678"
//       />
//       <View style={{ flex: 1 }}>
//         {menuItems.map((item, index) => (
//           <MenuItem
//             key={index}
//             label={item.label}
//             icon={item.icon}
//             onPress={() => console.log(item.label)}
//           />
//         ))}
//       </View>

//       <View
//         style={{
//           marginBottom: 8,
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Icon name="power-outline" size={24} color={DANGER_COLOR} />
//         <H5 style={{ color: DANGER_COLOR }}>Logout</H5>
//       </View>
//     </ContainerComponent>
//   );
// }

// import React from "react";
// import ProfileCard from "../components/ProfileCard";
// import MenuItem from "../components/MenuItem";
// import { menuItems } from "../utils/faker";
// import ContainerComponent from "../components/ContainerComponent";
// import { View } from "react-native";
// import { H5 } from "../components/text";
// import { DANGER_COLOR } from "../styles/constant";
// import Icon from "react-native-vector-icons/Ionicons";
// import { useNavigation } from "@react-navigation/native";

// export default function SettingsScreen() {
//   const navigation = useNavigation();

//   const handleMenuItemPress = (label) => {
//     if (label === "My Purchase") {
//       navigation.navigate("Requisitions");
//     } else {
//       console.log(label);
//     }
//   };

//   return (
//     <ContainerComponent justifyContent="space-between">
//       <ProfileCard
//         imageUri="https://randomuser.me/api/portraits/men/7.jpg"
//         name="Mihir Mishra"
//         phoneNumber="+91 6204765678"
//       />
//       <View style={{ flex: 1 }}>
//         {menuItems.map((item, index) => (
//           <MenuItem
//             key={index}
//             label={item.label}
//             icon={item.icon}
//             onPress={() => handleMenuItemPress(item.label)} // Handle press event
//           />
//         ))}
//       </View>

//       <View
//         style={{
//           marginBottom: 8,
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Icon name="power-outline" size={24} color={DANGER_COLOR} />
//         <H5 style={{ color: DANGER_COLOR }}>Logout</H5>
//       </View>
//     </ContainerComponent>
//   );
// }

import React from "react";
import ProfileCard from "../components/ProfileCard";
import MenuItem from "../components/MenuItem";
import { menuItems } from "../utils/faker";
import ContainerComponent from "../components/ContainerComponent";
import { View } from "react-native";
import { H5 } from "../components/text";
import { DANGER_COLOR } from "../styles/constant";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function SettingsScreen() {
  const navigation = useNavigation();

  const handleMenuItemPress = (label) => {
    if (label === "My Purchase") {
      navigation.navigate("Requisitions");
    } else if (label === "Notification") {
      navigation.navigate("NotificationScreen");
    } else if (label === "Privacy") {
      navigation.navigate("PrivacyPolicy");
    } else {
      console.log(label);
    }
  };

  return (
    <ContainerComponent justifyContent="space-between">
      <ProfileCard
        imageUri="https://randomuser.me/api/portraits/men/7.jpg"
        name="Mihir Mishra"
        phoneNumber="+91 6204765678"
      />
      <View style={{ flex: 1 }}>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            label={item.label}
            icon={item.icon}
            onPress={() => handleMenuItemPress(item.label)}
          />
        ))}
      </View>

      <View
        style={{
          marginBottom: 8,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon name="power-outline" size={24} color={DANGER_COLOR} />
        <H5 style={{ color: DANGER_COLOR }}>Logout</H5>
      </View>
    </ContainerComponent>
  );
}

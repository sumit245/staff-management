// import React from "react";
// import { View, TouchableOpacity, FlatList } from "react-native";
// import { Text, Divider } from "react-native-paper";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import { holidays } from "../utils/faker";
// import ContainerComponent from "../components/ContainerComponent";
// import MyHeader from "../components/header/MyHeader";
// //import MyFlatList from "../components/utility/MyFlatList";
// import { styles } from "../styles/components.styles";
// import { H5, P } from "../components/text";

// export default function HolidayListScreen() {
//   const renderItem = ({ item }) => (
//     <TouchableOpacity>
//       <View style={styles.Section}>
//         <View style={styles.leftSection}>
//           <View style={styles.iconWrapper}>
//             <Icon name={item.icon} size={24} color="#fff" />
//           </View>
//           <Text style={styles.dateText}>{item.date}</Text>
//         </View>
//         <View style={styles.rightSection}>
//           <H5 style={styles.title}>{item.title}</H5>
//           <P style={styles.day}>{item.day}</P>
//         </View>
//       </View>
//       <Divider />
//     </TouchableOpacity>
//   );

//   return (
//     <ContainerComponent>
//       <MyHeader title="Holidays" isBack={true} hasIcon={true} />
//       <View>
//         <FlatList
//           data={holidays}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id}
//         />
//       </View>
//     </ContainerComponent>
//   );
// }

import React from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import { Text, Divider } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { holidays } from "../utils/faker";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import { styles } from "../styles/components.styles";
import { H5, P } from "../components/text";

export default function HolidayListScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.Section}>
        <View style={styles.leftSection}>
          <View style={styles.iconWrapper}>
            <Icon name="calendar" size={24} color="#fff" />
          </View>
          <Text style={styles.dateText}>{item.date}</Text>
        </View>

        <View style={styles.rightSection}>
          <H5 style={styles.title}>{item.title}</H5>
          <P style={styles.day}>{item.day}</P>
        </View>
      </View>
      <Divider />
    </TouchableOpacity>
  );

  return (
    <ContainerComponent>
      <MyHeader title="Holidays" isBack={true} hasIcon={true} />
      <View>
        <FlatList
          data={holidays}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ContainerComponent>
  );
}

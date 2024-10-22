import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";
import { Card } from "react-native-paper";
import { Icon } from "react-native-elements";
import Button from "../components/buttons/Button";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import { styles } from "../styles/components.styles";
import { itemsData, amountDetailsData } from "../utils/faker";
import { H2, H3, H5, H6, P } from "../components/text";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../components/input/SearchBar";

const PurchaseOrderScreen = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [items, setItems] = useState(itemsData);
  const [filteredItems, setFilteredItems] = useState(itemsData);
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation(); // Hook to navigate

  // Function to toggle checkbox
  const toggleCheck = (itemId) => {
    setCheckedItems({
      ...checkedItems,
      [itemId]: !checkedItems[itemId],
    });
  };

  // Function to handle search query and filter items
  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text === "") {
      setFilteredItems(itemsData);
    } else {
      const filtered = itemsData.filter(
        (item) =>
          item.id.toLowerCase().includes(text.toLowerCase()) || // Search by product code
          item.name.toLowerCase().includes(text.toLowerCase()) // Search by product name
      );
      setFilteredItems(filtered);
    }
  };

  return (
    <ContainerComponent>
      <ScrollView>
        <MyHeader
          title="Select Project Code"
          isBack={true}
          hasIcon={true}
          icon={"trash-outline"}
        />

        <SearchBar
          placeholder="Search Project Code or Name"
          value={searchQuery}
          onChangeText={handleSearch}
        />

        <Button style={[styles.btn, styles.bgPrimary]}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <H2 style={[styles.btnText, styles.textLarge, styles.textLight]}>
              Add New Line Item
            </H2>
            <TouchableOpacity
              onPress={() => navigation.navigate("TaskList")} // Navigate to TaskList
              style={[styles.addIconContainer, { marginLeft: 15 }]}
            >
              <Icon name="add" size={20} color="#020409" />
            </TouchableOpacity>
          </View>
        </Button>

        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate("TaskList")} // Navigate to TaskList on card click
            >
              <Card style={styles.card}>
                <View style={styles.cardRow}>
                  <CheckBox
                    checked={checkedItems[item.id] || false}
                    onPress={() => toggleCheck(item.id)}
                  />
                  <View style={styles.itemInfo}>
                    <H5>{item.id}</H5>
                    <P>{item.name}</P>
                  </View>
                  <View style={styles.itemDetails}>
                    <H6>₹{item.price.toFixed(2)}</H6>
                    <P>{item.quantity} Ea</P>
                    <H5>₹{item.total.toFixed(2)}</H5>
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
          ))
        ) : (
          <H3>No products found</H3>
        )}

        <Card style={styles.amountCard}>
          {amountDetailsData.map((detail, index) => (
            <View
              key={index}
              style={[styles.amountDetails, { paddingRight: 10 }]}
            >
              <H6 style={styles.label}>{detail.label}</H6>
              <P>
                {typeof detail.value === "number"
                  ? detail.value.toFixed(2)
                  : detail.value}
              </P>
            </View>
          ))}
        </Card>

        <Button
          style={[styles.btn, styles.bgPrimary, { justifyContent: "center" }]}
        >
          <H2 style={[styles.btnText, styles.textLarge, styles.textLight]}>
            Create Purchase Order
          </H2>
        </Button>
      </ScrollView>
    </ContainerComponent>
  );
};

export default PurchaseOrderScreen;

// import React, { useState } from "react";
// import { View, ScrollView, TouchableOpacity } from "react-native";
// import { CheckBox } from "react-native-elements";
// import { Card } from "react-native-paper";
// import { Icon } from "react-native-elements";
// import Button from "../components/buttons/Button";
// import ContainerComponent from "../components/ContainerComponent";
// import MyHeader from "../components/header/MyHeader";
// import { styles } from "../styles/components.styles";
// import { itemsData, amountDetailsData } from "../utils/faker";
// import { H2, H3, H5, H6, P } from "../components/text";
// import { useNavigation } from "@react-navigation/native";
// import SearchBar from "../components/input/SearchBar";

// const PurchaseOrderScreen = () => {
//   const [checkedItems, setCheckedItems] = useState({});
//   const [items, setItems] = useState(itemsData);
//   const [filteredItems, setFilteredItems] = useState(itemsData);
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigation = useNavigation(); // Hook to navigate

//   // Function to toggle checkbox
//   const toggleCheck = (itemId) => {
//     setCheckedItems({
//       ...checkedItems,
//       [itemId]: !checkedItems[itemId],
//     });
//   };

//   // Function to handle search query and filter items
//   const handleSearch = (text) => {
//     setSearchQuery(text);
//     if (text === "") {
//       setFilteredItems(itemsData);
//     } else {
//       const filtered = itemsData.filter(
//         (item) =>
//           item.id.toLowerCase().includes(text.toLowerCase()) || // Search by product code
//           item.name.toLowerCase().includes(text.toLowerCase()) // Search by product name
//       );
//       setFilteredItems(filtered);
//     }
//   };

//   const navigateToFormScreen = () => {
//     navigation.navigate("FormScreen"); // Navigate to FormScreen
//   };

//   return (
//     <ContainerComponent>
//       <ScrollView>
//         <MyHeader
//           title="Select Project Code"
//           isBack={true}
//           hasIcon={true}
//           icon={"trash-outline"}
//         />

//         <SearchBar
//           placeholder="Search Project Code or Name"
//           value={searchQuery}
//           onChangeText={handleSearch}
//         />

//         <Button style={[styles.btn, styles.bgPrimary]}>
//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               flex: 1,
//               justifyContent: "center",
//             }}
//           >
//             <H2 style={[styles.btnText, styles.textLarge, styles.textLight]}>
//               Add New Line Item
//             </H2>
//             <TouchableOpacity
//               onPress={navigateToFormScreen} // Navigate to form screen on button click
//               style={[styles.addIconContainer, { marginLeft: 15 }]}
//             >
//               <Icon name="add" size={20} color="#020409" />
//             </TouchableOpacity>
//           </View>
//         </Button>

//         {filteredItems.length > 0 ? (
//           filteredItems.map((item) => (
//             <View
//               key={item.id}
//              // onPress={() => navigation.navigate("TaskList")}
//             >
//               <Card style={styles.card}>
//                 <View style={styles.cardRow}>
//                   <CheckBox
//                     checked={checkedItems[item.id] || false}
//                     onPress={() => toggleCheck(item.id)}
//                   />
//                   <View style={styles.itemInfo}>
//                     <H5>{item.id}</H5>
//                     <P>{item.name}</P>
//                   </View>
//                   <View style={styles.itemDetails}>
//                     <H6>₹{item.price.toFixed(2)}</H6>
//                     <P>{item.quantity} Ea</P>
//                     <H5>₹{item.total.toFixed(2)}</H5>
//                   </View>
//                 </View>
//               </Card>
//             </View>
//           ))
//         ) : (
//           <H3>No products found</H3>
//         )}

//         <Card style={styles.amountCard}>
//           {amountDetailsData.map((detail, index) => (
//             <View
//               key={index}
//               style={[styles.amountDetails, { paddingRight: 10 }]}
//             >
//               <H6 style={styles.label}>{detail.label}</H6>
//               <P>
//                 {typeof detail.value === "number"
//                   ? detail.value.toFixed(2)
//                   : detail.value}
//               </P>
//             </View>
//           ))}
//         </Card>

//         <Button
//           style={[styles.btn, styles.bgPrimary, { justifyContent: "center" }]}
//         >
//           <H2 style={[styles.btnText, styles.textLarge, styles.textLight]}>
//             Create Purchase Order
//           </H2>
//         </Button>
//       </ScrollView>
//     </ContainerComponent>
//   );
// };

// export default PurchaseOrderScreen;

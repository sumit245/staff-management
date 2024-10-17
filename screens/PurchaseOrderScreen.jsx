// import React, { useState } from "react";
// import { View, Text, ScrollView } from "react-native";
// import { CheckBox } from "react-native-elements";
// import { Card } from "react-native-paper";
// import { Icon } from "react-native-elements";
// import Button from "../components/buttons/Button";
// import ContainerComponent from "../components/ContainerComponent";
// import MyHeader from "../components/header/MyHeader";
// import { styles } from "../styles/components.styles";
// import { itemsData, amountDetailsData } from "../utils/faker";
// import { H2, H3, H4, H5, H6, P } from "../components/text";

// const PurchaseOrderScreen = () => {
//   const [checkedItems, setCheckedItems] = useState({});
//   const [items, setItems] = useState(itemsData);

//   const toggleCheck = (itemId) => {
//     setCheckedItems({
//       ...checkedItems,
//       [itemId]: !checkedItems[itemId],
//     });
//   };

//   return (
//     <ContainerComponent>
//       <ScrollView>
//         <MyHeader title="Select Product Code" hasIcon={true} icon={"trash-outline"} />

//         <Button style={[styles.btn, styles.bgPrimary]}>
//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               flex: 1,
//             }}
//           >
//             <H2 style={[styles.btnText, styles.textLarge, styles.textLight]}>
//               Add New Line Item
//             </H2>
//             <View style={[styles.addIconContainer, { marginLeft: 15 }]}>
//               <Icon name="add" size={20} color="#020409" />
//             </View>
//           </View>
//         </Button>

//         {items.map((item) => (
//           <Card key={item.id} style={styles.card}>
//             <View style={styles.cardRow}>
//               <CheckBox
//                 checked={checkedItems[item.id] || false}
//                 onPress={() => toggleCheck(item.id)}
//                 style={{ marginLeft: -15 }}
//               />
//               <View style={styles.itemInfo}>
//                 <H5>{item.id}</H5>
//                 <P>{item.name}</P>
//               </View>
//               <View style={styles.itemDetails}>
//                 <H6>₹{item.price.toFixed(2)}</H6>
//                 <P>{item.quantity} Ea</P>
//                 <H5>₹{item.total.toFixed(2)}</H5>
//               </View>
//             </View>
//           </Card>
//         ))}

//         <Card style={styles.amountCard}>
//           {amountDetailsData.map((detail, index) => (
//             <View key={index} style={styles.amountDetails}>
//               <H6 style={styles.label}>{detail.label}</H6>
//               <P>
//                 {typeof detail.value === "number"
//                   ? detail.value.toFixed(2)
//                   : detail.value}
//               </P>
//             </View>
//           ))}
//         </Card>

//         <Button style={[styles.btn, styles.bgPrimary]}>
//           <H2 style={[styles.btnText, styles.textLarge, styles.textLight]}>
//             Create Purchase Order
//           </H2>
//         </Button>
//       </ScrollView>
//     </ContainerComponent>
//   );
// };

// export default PurchaseOrderScreen;

// import React, { useState } from "react";
// import { View, ScrollView, Alert } from "react-native";
// import { CheckBox } from "react-native-elements";
// import { Card } from "react-native-paper";
// import { Icon } from "react-native-elements";
// import Button from "../components/buttons/Button";
// import ContainerComponent from "../components/ContainerComponent";
// import MyHeader from "../components/header/MyHeader";
// import SearchableDropdown from "../components/SearchableDropdown";
// import { styles } from "../styles/components.styles";
// import { itemsData, amountDetailsData } from "../utils/faker";
// import { H1, H2, H5, H6, P } from "../components/text";

// const PurchaseOrderScreen = () => {
//   const [checkedItems, setCheckedItems] = useState({});
//   const [items, setItems] = useState(itemsData); // original items
//   const [filteredItems, setFilteredItems] = useState(itemsData); // filtered items for displaying in the UI

//   // Function to toggle checkbox
//   const toggleCheck = (itemId) => {
//     setCheckedItems({
//       ...checkedItems,
//       [itemId]: !checkedItems[itemId],
//     });
//   };

//   // Function to handle text change in the SearchableDropdown
//   const handleTextChange = (text) => {
//     if (text === "") {
//       // If input is cleared, reset filtered items to the original itemsData
//       setFilteredItems(itemsData);
//     } else {
//       // Filter items based on product name or product code
//       const filteredItems = itemsData.filter(
//         (item) =>
//           item.name.toLowerCase().includes(text.toLowerCase()) || // Search by name
//           item.productCode.toLowerCase().includes(text.toLowerCase()) // Search by productCode
//       );

//       console.log("Filtered Items:", filteredItems); // Debugging output

//       // If no items are found, show an alert
//       if (filteredItems.length === 0) {
//         Alert.alert("Item not found");
//       }

//       // Update filteredItems state
//       setFilteredItems(filteredItems);
//     }
//   };

//   return (
//     <ContainerComponent>
//       <ScrollView>
//         <MyHeader
//           title="Select Product Code"
//           hasIcon={true}
//           icon={"trash-outline"}
//         />

//         <View style={{ marginVertical: 10 }}>
//           {/* Pass handleTextChange to SearchableDropdown to filter items */}
//           <SearchableDropdown
//             onChangeText={handleTextChange} // Trigger search logic
//             items={filteredItems} // Show filtered items
//           />
//         </View>

//         <Button style={[styles.btn, styles.bgPrimary]}>
//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               flex: 1,
//             }}
//           >
//             <H2 style={[styles.btnText, styles.textLarge, styles.textLight]}>
//               Add New Line Item
//             </H2>
//             <View style={[styles.addIconContainer, { marginLeft: 15 }]}>
//               <Icon name="add" size={20} color="#020409" />
//             </View>
//           </View>
//         </Button>

//         {/* Render filteredItems */}
//         {filteredItems.map((item) => (
//           <Card key={item.id} style={styles.card}>
//             <View style={styles.cardRow}>
//               <CheckBox
//                 checked={checkedItems[item.id] || false}
//                 onPress={() => toggleCheck(item.id)}
//                 style={{ marginLeft: -15 }}
//               />
//               <View style={styles.itemInfo}>
//                 <H5>{item.productCode}</H5>
//                 <P>{item.name}</P>
//               </View>
//               <View style={styles.itemDetails}>
//                 <H6>₹{item.price.toFixed(2)}</H6>
//                 <P>{item.quantity} Ea</P>
//                 <H5>₹{item.total.toFixed(2)}</H5>
//               </View>
//             </View>
//           </Card>
//         ))}

//         <Card style={styles.amountCard}>
//           {amountDetailsData.map((detail, index) => (
//             <View key={index} style={styles.amountDetails}>
//               <H5 style={styles.label}>{detail.label}</H5>
//               <P style={styles.value}>
//                 {typeof detail.value === "number"
//                   ? detail.value.toFixed(2)
//                   : detail.value}
//               </P>
//             </View>
//           ))}
//         </Card>

//         <Button style={[styles.btn, styles.bgPrimary]}>
//           <H2 style={[styles.btnText, styles.textLarge, styles.textLight]}>
//             Create Purchase Order
//           </H2>
//         </Button>
//       </ScrollView>
//     </ContainerComponent>
//   );
// };

// export default PurchaseOrderScreen;

// import React, { useState } from "react";
// import { View, Text, ScrollView, TextInput } from "react-native";
// import { CheckBox } from "react-native-elements";
// import { Card } from "react-native-paper";
// import { Icon } from "react-native-elements";
// import Button from "../components/buttons/Button";
// import ContainerComponent from "../components/ContainerComponent";
// import MyHeader from "../components/header/MyHeader";
// import { styles } from "../styles/components.styles";
// import { itemsData, amountDetailsData } from "../utils/faker";
// import { H2, H5, H6, P } from "../components/text";

// const PurchaseOrderScreen = () => {
//   const [checkedItems, setCheckedItems] = useState({});
//   const [items, setItems] = useState(itemsData); // original items
//   const [filteredItems, setFilteredItems] = useState(itemsData); // filtered items for display
//   const [searchQuery, setSearchQuery] = useState(""); // search input state

//   // Function to toggle checkbox
//   const toggleCheck = (itemId) => {
//     setCheckedItems({
//       ...checkedItems,
//       [itemId]: !checkedItems[itemId],
//     });
//   };

//   // Function to handle search query and filter items based on product code
//   const handleSearch = (text) => {
//     setSearchQuery(text);

//     if (text === "") {
//       setFilteredItems(itemsData); // Reset to all items if search query is cleared
//     } else {
//       const filtered = itemsData.filter(
//         (item) => item.id.toLowerCase().includes(text.toLowerCase()) // Search by product code
//       );
//       setFilteredItems(filtered);
//     }
//   };

//   return (
//     <ContainerComponent>
//       <ScrollView>
//         <MyHeader
//           title="Select Product Code"
//           hasIcon={true}
//           icon={"trash-outline"}
//         />

//         {/* Searchable Input Field */}
//         <View style={{ marginVertical: 10, paddingHorizontal: 10 }}>
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search by Product Code"
//             value={searchQuery}
//             onChangeText={handleSearch}
//           />
//         </View>

//         <Button style={[styles.btn, styles.bgPrimary]}>
//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               flex: 1,
//             }}
//           >
//             <H2 style={[styles.btnText, styles.textLarge, styles.textLight]}>
//               Add New Line Item
//             </H2>
//             <View style={[styles.addIconContainer, { marginLeft: 15 }]}>
//               <Icon name="add" size={20} color="#020409" />
//             </View>
//           </View>
//         </Button>

//         {/* Display filtered items based on search */}
//         {filteredItems.length > 0 ? (
//           filteredItems.map((item) => (
//             <Card key={item.id} style={styles.card}>
//               <View style={styles.cardRow}>
//                 <CheckBox
//                   checked={checkedItems[item.id] || false}
//                   onPress={() => toggleCheck(item.id)}
//                   style={{ marginLeft: -15 }}
//                 />
//                 <View style={styles.itemInfo}>
//                   <H5>{item.id}</H5>
//                   <P>{item.name}</P>
//                 </View>
//                 <View style={styles.itemDetails}>
//                   <H6>₹{item.price.toFixed(2)}</H6>
//                   <P>{item.quantity} Ea</P>
//                   <H5>₹{item.total.toFixed(2)}</H5>
//                 </View>
//               </View>
//             </Card>
//           ))
//         ) : (
//           <Text>No products found</Text>
//         )}

//         <Card style={styles.amountCard}>
//           {amountDetailsData.map((detail, index) => (
//             <View key={index} style={styles.amountDetails}>
//               <H6 style={styles.label}>{detail.label}</H6>
//               <P>
//                 {typeof detail.value === "number"
//                   ? detail.value.toFixed(2)
//                   : detail.value}
//               </P>
//             </View>
//           ))}
//         </Card>

//         <Button style={[styles.btn, styles.bgPrimary]}>
//           <H2 style={[styles.btnText, styles.textLarge, styles.textLight]}>
//             Create Purchase Order
//           </H2>
//         </Button>
//       </ScrollView>
//     </ContainerComponent>
//   );
// };

// export default PurchaseOrderScreen;

// import React, { useState } from "react";
// import { View, Text, ScrollView, TextInput } from "react-native";
// import { CheckBox } from "react-native-elements";
// import { Card } from "react-native-paper";
// import { Icon } from "react-native-elements";
// import Button from "../components/buttons/Button";
// import ContainerComponent from "../components/ContainerComponent";
// import MyHeader from "../components/header/MyHeader";
// import { styles } from "../styles/components.styles";
// import { itemsData, amountDetailsData } from "../utils/faker";
// import { H2, H5, H6, P } from "../components/text";

// const PurchaseOrderScreen = () => {
//   const [checkedItems, setCheckedItems] = useState({});
//   const [items, setItems] = useState(itemsData);
//   const [filteredItems, setFilteredItems] = useState(itemsData); // filtered items for display
//   const [searchQuery, setSearchQuery] = useState(""); // search input state

//   // Function to toggle checkbox
//   const toggleCheck = (itemId) => {
//     setCheckedItems({
//       ...checkedItems,
//       [itemId]: !checkedItems[itemId],
//     });
//   };

//   // Function to handle search query and filter items based on product code
//   const handleSearch = (text) => {
//     setSearchQuery(text);

//     if (text === "") {
//       setFilteredItems(itemsData); // Reset to all items if search query is cleared
//     } else {
//       const filtered = itemsData.filter(
//         (item) =>
//           item.id.toLowerCase().includes(text.toLowerCase()) || // Search by product code
//           item.name.toLowerCase().includes(text.toLowerCase()) // Search by product name
//       );
//       setFilteredItems(filtered);
//     }
//   };

//   return (
//     <ContainerComponent>
//       <ScrollView>
//         <MyHeader
//           title="Select Project Code"
//           hasIcon={true}
//           icon={"trash-outline"}
//         />

//         <View style={{ marginVertical: 10, paddingHorizontal: 10 }}>
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search by Project Code or Name"
//             value={searchQuery}
//             onChangeText={handleSearch}
//           />
//         </View>

//         <Button style={[styles.btn, styles.bgPrimary]}>
//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               flex: 1,
//             }}
//           >
//             <H2 style={[styles.btnText, styles.textLarge, styles.textLight]}>
//               Add New Line Item
//             </H2>
//             <View style={[styles.addIconContainer, { marginLeft: 15 }]}>
//               <Icon name="add" size={20} color="#020409" />
//             </View>
//           </View>
//         </Button>

//         {/* Display filtered items based on search */}
//         {filteredItems.length > 0 ? (
//           filteredItems.map((item) => (
//             <Card key={item.id} style={styles.card}>
//               <View style={styles.cardRow}>
//                 <CheckBox
//                   checked={checkedItems[item.id] || false}
//                   onPress={() => toggleCheck(item.id)}
//                   style={{ marginLeft: -15 }}
//                 />
//                 <View style={styles.itemInfo}>
//                   <H5>{item.id}</H5>
//                   <P>{item.name}</P>
//                 </View>
//                 <View style={styles.itemDetails}>
//                   <H6>₹{item.price.toFixed(2)}</H6>
//                   <P>{item.quantity} Ea</P>
//                   <H5>₹{item.total.toFixed(2)}</H5>
//                 </View>
//               </View>
//             </Card>
//           ))
//         ) : (
//           <Text>No products found</Text>
//         )}

//         <Card style={styles.amountCard}>
//           {amountDetailsData.map((detail, index) => (
//             <View key={index} style={styles.amountDetails}>
//               <H6 style={styles.label}>{detail.label}</H6>
//               <P>
//                 {typeof detail.value === "number"
//                   ? detail.value.toFixed(2)
//                   : detail.value}
//               </P>
//             </View>
//           ))}
//         </Card>

//         <Button style={[styles.btn, styles.bgPrimary]}>
//           <H2 style={[styles.btnText, styles.textLarge, styles.textLight]}>
//             Create Purchase Order
//           </H2>
//         </Button>
//       </ScrollView>
//     </ContainerComponent>
//   );
// };

// export default PurchaseOrderScreen;

import React, { useState } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import { CheckBox } from "react-native-elements";
import { Card } from "react-native-paper";
import { Icon } from "react-native-elements";
import Button from "../components/buttons/Button";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import { styles } from "../styles/components.styles";
import { itemsData, amountDetailsData } from "../utils/faker";
import { H2, H5, H6, P } from "../components/text";
import { useNavigation } from "@react-navigation/native"; 

const PurchaseOrderScreen = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [items, setItems] = useState(itemsData);
  const [filteredItems, setFilteredItems] = useState(itemsData); // filtered items for display
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation(); 

  // Function to toggle checkbox
  const toggleCheck = (itemId) => {
    setCheckedItems({
      ...checkedItems,
      [itemId]: !checkedItems[itemId],
    });
  };

  // Function to handle search query and filter items based on product code
  const handleSearch = (text) => {
    setSearchQuery(text);

    if (text === "") {
      setFilteredItems(itemsData); // Reset to all items if search query is cleared
    } else {
      const filtered = itemsData.filter(
        (item) =>
          item.id.toLowerCase().includes(text.toLowerCase()) || // Search by product code
          item.name.toLowerCase().includes(text.toLowerCase()) // Search by product name
      );
      setFilteredItems(filtered);
    }
  };

  // Navigate to FormScreen when the add new item button is clicked
  const navigateToFormScreen = () => {
    navigation.navigate("FormScreen"); // Navigate to the FormScreen
  };

  return (
    <ContainerComponent>
      <ScrollView>
        <MyHeader
          title="Select Project Code"
          hasIcon={true}
          icon={"trash-outline"}
        />

        <View style={{ marginVertical: 10, paddingHorizontal: 10 }}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by Project Code or Name"
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>

        {/* Button to Add New Line Item */}
        <Button
          style={[styles.btn, styles.bgPrimary]}
          onPress={navigateToFormScreen}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
            }}
          >
            <H2 style={[styles.btnText, styles.textLarge, styles.textLight]}>
              Add New Line Item
            </H2>
            <View style={[styles.addIconContainer, { marginLeft: 15 }]}>
              <Icon name="add" size={20} color="#020409" />
            </View>
          </View>
        </Button>

        {/* Display filtered items based on search */}
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Card key={item.id} style={styles.card}>
              <View style={styles.cardRow}>
                <CheckBox
                  checked={checkedItems[item.id] || false}
                  onPress={() => toggleCheck(item.id)}
                  style={{ marginLeft: -15 }}
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
          ))
        ) : (
          <Text>No products found</Text>
        )}

        <Card style={styles.amountCard}>
          {amountDetailsData.map((detail, index) => (
            <View key={index} style={styles.amountDetails}>
              <H6 style={styles.label}>{detail.label}</H6>
              <P>
                {typeof detail.value === "number"
                  ? detail.value.toFixed(2)
                  : detail.value}
              </P>
            </View>
          ))}
        </Card>

        <Button style={[styles.btn, styles.bgPrimary]}>
          <H2 style={[styles.btnText, styles.textLarge, styles.textLight]}>
            Create Purchase Order
          </H2>
        </Button>
      </ScrollView>
    </ContainerComponent>
  );
};

export default PurchaseOrderScreen;

import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { data } from "../utils/faker";
import { styles } from "../styles/components.styles";
import CardItem from "./CardItem";

export default function CardGrid() {
  const renderItem = ({ item }) => (
    <CardItem title={item.title} icon={item.icon} />
  );

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Explore</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>All</Text>
          <Ionicons name="chevron-down-outline" size={16} color="#333" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.gridContainer}
      />
    </View>
  );
}

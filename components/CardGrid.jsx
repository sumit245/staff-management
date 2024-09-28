import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { data } from "../utils/faker";
import CardItem from "./CardItem";

export default function CardGrid() {
  const renderItem = ({ item }) => (
    <CardItem title={item.title} icon={item.icon} />
  );

  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  dropdownText: {
    marginRight: 5,
    fontSize: 16,
  },
  gridContainer: {
    justifyContent: "space-between",
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 20,
  },
});

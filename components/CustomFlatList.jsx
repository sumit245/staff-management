import { FlatList, View, ActivityIndicator } from "react-native";
import { styles } from "../styles/components.styles";

const CustomFlatList = ({
  data,
  renderItem,
  keyExtractor,
  loading,
  ListEmptyComponent,
}) => {
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#2b87b0" />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ListEmptyComponent={ListEmptyComponent}
        />
      )}
    </View>
  );
};

export default CustomFlatList;

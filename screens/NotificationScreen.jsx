import { View, FlatList } from "react-native";
import { Avatar, List, Divider } from "react-native-paper";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import { notifications } from "../utils/faker";
import { TouchableOpacity } from "react-native";
import { styles } from "../styles/components.styles";
import { H2, H5, P } from "../components/text";

export default function NotificationScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <List.Item
        title={<H5 style={styles.titleText}>{item.title}</H5>}
        description={<P style={styles.description}>{item.description}</P>}
        left={() => (
          <Avatar.Icon
            size={40}
            icon={item.icon}
            style={{ backgroundColor: "#2b87b0" }}
          />
        )}
        right={() => <H2 style={styles.time}>{item.time}</H2>}
      />
      <Divider />
    </TouchableOpacity>
  );

  return (
    <ContainerComponent>
      <MyHeader
        title="Notification"
        isBack={true}
        hasIcon={true}
        icon={"search-outline"}
      />
      <View>
        <FlatList
          data={notifications}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ContainerComponent>
  );
}

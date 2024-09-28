import { View, Text, FlatList } from "react-native";
import { Card, Avatar, IconButton } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { cardData } from "../utils/faker";
import { styles } from "../styles/components.styles";
import ContainerComponent from "./ContainerComponent";

const CardTask = ({ task }) => (
  <ContainerComponent>
    <Card style={styles.card}>
      <View style={styles.cardHeader}>
        <Text>{task.title}</Text>
        <IconButton icon="dots-horizontal" size={24} onPress={() => {}} />
      </View>

      <View style={styles.labelsContainer}>
        <View style={[styles.label, styles.highPriority]}>
          <Text style={styles.labelText}>{task.priority}</Text>
        </View>
        <View style={[styles.label, styles.onTrack]}>
          <Text style={styles.labelText}>{task.status}</Text>
        </View>
      </View>

      <View style={styles.cardFooter}>
        <View style={styles.footerItem}>
          <Icon name="calendar-outline" size={16} color="#6b7280" />
          <Text style={styles.footerText}>{task.date}</Text>
        </View>

        <View style={styles.footerItem}>
          <Icon name="link-outline" size={16} color="#6b7280" />
          <Text style={styles.footerText}>{task.links}</Text>
        </View>

        <View style={styles.footerItem}>
          <Icon name="chatbubble-outline" size={16} color="#6b7280" />
          <Text style={styles.footerText}>{task.comments}</Text>
        </View>

        <View style={styles.footerItem}>
          {task.avatars.map((avatarUri, index) => (
            <Avatar.Image key={index} size={24} source={{ uri: avatarUri }} />
          ))}
          <Text style={styles.footerText}>+{task.avatars.length}</Text>
        </View>
      </View>
    </Card>
  </ContainerComponent>
);

const TaskList = () => (
  <FlatList
    data={cardData}
    renderItem={({ item }) => <CardTask task={item} />}
    keyExtractor={(item) => item.id.toString()}
  />
);

export default TaskList;

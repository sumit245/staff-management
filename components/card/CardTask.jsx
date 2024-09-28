import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Card, Avatar, IconButton } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { CardData } from "../utils/cardData";

const cardTask = ({ task }) => {
  return (
    <Card style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.taskTitle}>{task.title}</Text>
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
  );
};

const TaskList = () => {
  return (
    <FlatList
      data={cardData}
      renderItem={({ item }) => <CardTask task={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 15,
    elevation: 3,
    backgroundColor: "#fff",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  labelsContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  label: {
    borderRadius: 15,
    paddingVertical: 3,
    paddingHorizontal: 10,
    marginRight: 5,
  },
  highPriority: {
    backgroundColor: "#f87171",
  },
  onTrack: {
    backgroundColor: "#c084fc",
  },
  labelText: {
    color: "#fff",
    fontSize: 12,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  footerItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerText: {
    marginLeft: 5,
    color: "#6b7280",
    fontSize: 14,
  },
});

export default TaskList;

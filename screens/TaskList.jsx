import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Avatar, IconButton } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";

const TaskList = () => {
  return (
      <ContainerComponent>
         <MyHeader
          title="Select Project Code"
          isBack={true}
          hasIcon={true}
          icon={"trash-outline"}
        />
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.header}>
            <Text style={styles.greeting}>Good morning , Rohit!</Text>

            <IconButton icon="bell" size={24} onPress={() => {}} />
            <Avatar.Image
              size={40}
              source={{ uri: "https://placekitten.com/200/200" }}
            />
          </View>

          <View style={styles.statusContainer}>
            <TouchableOpacity style={styles.statusButton}>
              <Text style={styles.statusText}>To do</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.statusButton, styles.activeButton]}
            >
              <Text style={styles.activeText}>In progress</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.statusButton}>
              <Text style={styles.statusText}>Overdue</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.taskCard}>
            <Text style={styles.taskTitle}>Landing page design</Text>
            <View style={styles.taskInfo}>
              <Icon name="calendar-outline" size={16} color="#fff" />
              <Text style={styles.infoText}>Due: 25 Apr</Text>
              <Icon name="time-outline" size={16} color="#fff" />
              <Text style={styles.infoText}>Est: 20 h</Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    </ContainerComponent>
  );
};

const styles = StyleSheet.create({
  //   card: {
  //     margin: 10,
  //     borderRadius: 15,
  //     backgroundColor: "#f4f4f5",
  //   },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  statusButton: {
    padding: 10,
    backgroundColor: "#e5e5e5",
    borderRadius: 20,
  },
  statusText: {
    fontSize: 16,
    color: "#333",
  },
  activeButton: {
    backgroundColor: "#2b87b0",
  },
  activeText: {
    color: "#fff",
  },
  taskCard: {
    backgroundColor: "#2b87b0",
    padding: 15,
    borderRadius: 15,
    marginTop: 20,
  },
  taskTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  taskInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  infoText: {
    color: "#fff",
    marginLeft: 5,
    marginRight: 15,
  },
});

export default TaskList;

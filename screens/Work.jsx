import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { H1, H2, H3, H4, H5, H6 } from "../components/text";
import ProfileCard from "../components/ProfileCard";




const Card = ({ children, style }) => (
  <View style={[styles.card, style]}>{children}</View>
);


const MyTextInput = ({ title, value, icon }) => (
  <View style={styles.textInputContainer}>
    {/* Icon (Placeholder for actual icon implementation) */}
    <View style={styles.iconPlaceholder}>
      <Text>{icon}</Text>
    </View>
    <View style={styles.textInputDetails}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  </View>
);


const DashboardScreen = () => {
  const task = {
    label: "In Progress",
    title: "Landing page design",
    dueDate: "25 Apr",
    estimate: "20h",
    progress: 60, // percentage
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View>
          <H2>Good evening,</H2>
          <H1>Marie!</H1>
        </View>
        <View style={styles.headerRight}>
          {/* Notification Icon (Placeholder) */}
          <TouchableOpacity style={styles.notificationIcon}>
            <Text>🔔</Text>
          </TouchableOpacity>
          {/* <ProfileCard imageUri="https://via.placeholder.com/150" /> */}
        </View>
      </View>

      {/* Tabs Section */}
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>To do</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.activeTabText}>In progress</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Overdue</Text>
        </TouchableOpacity>
      </View>

      {/* Card Section */}
      <ScrollView style={styles.cardsContainer}>
        <Card style={styles.taskCard}>
          <View style={styles.cardContent}>
            <H4 style={styles.status}>{task.label}</H4>
            <H3 style={styles.taskTitle}>{task.title}</H3>
            <View style={styles.taskDetails}>
              <MyTextInput title="Due:" value={task.dueDate} icon="📅" />
              <MyTextInput title="Est:" value={task.estimate} icon="⏳" />
            </View>
            {/* Progress Bar */}
            <View style={styles.progressBar}>
              <View
                style={[styles.progress, { width: `${task.progress}%` }]}
              ></View>
            </View>
          </View>
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationIcon: {
    marginRight: 10,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: "#000",
  },

  activeTabText: {
    color: "#fff",
  },
  cardsContainer: {
    marginTop: 20,
  },
  taskCard: {
    backgroundColor: "#a2d2ff",
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
  },
  cardContent: {
    flexDirection: "column",
  },
  status: {
    color: "#fff",
    marginBottom: 10,
  },

  taskDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progressBar: {
    height: 5,
    backgroundColor: "#ddd",
    borderRadius: 10,
    marginTop: 10,
  },
  progress: {
    height: "100%",
    backgroundColor: "#4caf50",
    borderRadius: 10,
  },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  iconPlaceholder: {
    marginRight: 10,
  },
});

export default DashboardScreen;

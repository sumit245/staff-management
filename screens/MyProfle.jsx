import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { H1 } from "../components/text"
import MyTextInput from "../components/input/MyTextInput"

const ProfileScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState("Personal");

  const renderTabContent = () => {
    switch (selectedTab) {
      case "Personal":
        return (
          <View>
            <MyTextInput
              title="Full Name"
              value="Michael Mitc"
              editable={false}
            />
            <MyTextInput
              title="Email Address"
              value="michael.mitc@example.com"
              editable={false}
            />
            <MyTextInput
              title="Phone Number"
              value="(603) 555-0123"
              editable={false}
            />
            <MyTextInput
              title="Address"
              value="3517 W. Gray St. Utica, Pennsylvania 57867"
              editable={false}
            />
          </View>
        );
      case "Professional":
        return <Text>Professional Content</Text>;
      case "Documents":
        return <Text>Documents Content</Text>;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text>Back</Text>
      </TouchableOpacity>
      <H1>My Profile</H1>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "Personal" && styles.activeTab,
          ]}
          onPress={() => setSelectedTab("Personal")}
        >
          <Text
            style={
              selectedTab === "Personal" ? styles.activeTabText : styles.tabText
            }
          >
            Personal
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "Professional" && styles.activeTab,
          ]}
          onPress={() => setSelectedTab("Professional")}
        >
          <Text
            style={
              selectedTab === "Professional"
                ? styles.activeTabText
                : styles.tabText
            }
          >
            Professional
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "Documents" && styles.activeTab,
          ]}
          onPress={() => setSelectedTab("Documents")}
        >
          <Text
            style={
              selectedTab === "Documents"
                ? styles.activeTabText
                : styles.tabText
            }
          >
            Documents
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      {renderTabContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  backButton: {
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
  },
  activeTab: {
    borderBottomColor: "#007AFF",
  },
  tabText: {
    color: "#333",
  },
  activeTabText: {
    color: "#007AFF",
  },
});

export default ProfileScreen;

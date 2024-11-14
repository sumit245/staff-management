import React from "react";
import { View, ScrollView, StyleSheet, Text, Dimensions } from "react-native";
import { Card } from "react-native-elements";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";

const ProjectCard = ({
  id,
  name,
  startDate,
  deadline,
  description,
  manager,
  teamMembers,
}) => {
  return (
    <ContainerComponent>
      <Card containerStyle={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.id}>Project ID: {id}</Text>
        </View>
        <View style={styles.cardDetails}>
          <View style={styles.detailsRow}>
            <Text style={styles.detailsLabel}>Start Date:</Text>
            <Text style={styles.detailsValue}>{startDate}</Text>
          </View>
          <View style={styles.detailsRow}>
            <Text style={styles.detailsLabel}>Deadline:</Text>
            <Text style={styles.detailsValue}>{deadline}</Text>
          </View>
          <View style={styles.detailsRow}>
            <Text style={styles.detailsLabel}>Manager:</Text>
            <Text style={styles.detailsValue}>{manager}</Text>
          </View>
          <View style={styles.detailsRow}>
            <Text style={styles.detailsLabel}>Team Members:</Text>
            <Text style={styles.detailsValue}>{teamMembers.join(", ")}</Text>
          </View>
          <View style={styles.detailsRow}>
            <Text style={styles.detailsLabel}>Description:</Text>
            <Text style={styles.detailsValue}>{description}</Text>
          </View>
        </View>
      </Card>
    </ContainerComponent>
  );
};

const OpenProjectScreen = () => {
  const projectDataList = [
    {
      id: 1,
      name: "Robotic Cell",
      startDate: "2024-10-08",
      deadline: "2024-10-22",
      description: "A project focused on automating the cell assembly process.",
      manager: "Anand Dhariwal",
      teamMembers: ["Anand Dhariwal", "John Doe"],
    },
    {
      id: 2,
      name: "AI Analytics",
      startDate: "2024-09-01",
      deadline: "2024-12-15",
      description: "Developing AI-powered analytics tools for data insights.",
      manager: "Priya Sen",
      teamMembers: ["Priya Sen", "Alex Lee", "Maria Garcia"],
    },
    {
      id: 3,
      name: "Mobile App Development",
      startDate: "2024-11-01",
      deadline: "2025-01-15",
      description: "Building a cross-platform mobile application.",
      manager: "Raj Patel",
      teamMembers: ["Raj Patel", "Samir Khan", "Lucy Brown"],
    },
    {
      id: 4,
      name: "Website Redesign",
      startDate: "2024-08-15",
      deadline: "2024-10-30",
      description: "Revamping the company website with a new design.",
      manager: "Rita Das",
      teamMembers: ["Rita Das", "Tom Wilson", "Emma Clark"],
    },
    {
      id: 5,
      name: "IoT Integration",
      startDate: "2024-07-10",
      deadline: "2024-11-20",
      description: "Integrating IoT devices for smart office automation.",
      manager: "John Smith",
      teamMembers: ["John Smith", "Mark Kim", "Alice Wong"],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <MyHeader title="Open Project" isBack={true} hasIcon={true} />
      {projectDataList.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          name={project.name}
          startDate={project.startDate}
          deadline={project.deadline}
          description={project.description}
          manager={project.manager}
          teamMembers={project.teamMembers}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
  },
  card: {
    borderRadius: 10,
    padding: 15,
    margin: 0,
    marginBottom: 12,
    width: Dimensions.get("window").width - 20,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  id: {
    fontSize: 14,
    color: "gray",
  },
  cardDetails: {
    paddingVertical: 10,
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  detailsLabel: {
    fontSize: 14,
    color: "gray",
  },
  detailsValue: {
    fontSize: 14,
    textAlign: "right",
    flex: 1,
  },
});

export default OpenProjectScreen;

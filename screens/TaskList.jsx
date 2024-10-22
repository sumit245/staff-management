import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Avatar, IconButton, ProgressBar } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import {
  projects as initialProjects,
  handleTaskProgress,
} from "../utils/faker";
import ToDo from "../components/input/ToDo";
import { styles } from "../styles/components.styles";
import { H1, H3, H4, H5, H6, P } from "../components/text";

const TaskList = () => {
  const [activeStatus, setActiveStatus] = useState("toDo");
  const [checkedProject, setCheckedProject] = useState(null);
  const [projects, setProjects] = useState(initialProjects);

  const handleStatusChange = (status) => {
    setActiveStatus(status);
  };

  return (
    <ContainerComponent>
      <MyHeader
        title="Task List"
        isBack={true}
        hasIcon={true}
        icon={"search-outline"}
      />

      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.header}>
            <H4 style={styles.greeting}>Good morning, Rohit!</H4>
            <IconButton icon="bell" size={24} onPress={() => {}} />
            <Avatar.Image
              size={40}
              source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
            />
          </View>

          <View style={styles.statusContainer}>
            <TouchableOpacity
              style={[
                styles.statusButton,
                activeStatus === "toDo" && styles.activeButton,
              ]}
              onPress={() => handleStatusChange("toDo")}
            >
              <H5 style={[activeStatus === "toDo" && styles.activeText]}>
                To do
              </H5>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.statusButton,
                activeStatus === "inProgress" && styles.activeButton,
              ]}
              onPress={() => handleStatusChange("inProgress")}
            >
              <H6
                style={[
                  styles.statusText,
                  activeStatus === "inProgress" && styles.activeText,
                ]}
              >
                In progress
              </H6>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.statusButton,
                activeStatus === "complete" && styles.activeButton,
              ]}
              onPress={() => handleStatusChange("complete")}
            >
              <H6 style={[activeStatus === "complete" && styles.activeText]}>
                Complete
              </H6>
            </TouchableOpacity>
          </View>

          {/* Conditional rendering based on activeStatus */}
          {activeStatus === "toDo" && (
            <ToDo
              projects={projects}
              setProjects={setProjects} // Pass setProjects to child
              checkedProject={checkedProject}
              setCheckedProject={setCheckedProject}
              handleTaskProgress={handleTaskProgress}
              setActiveStatus={setActiveStatus}
            />
          )}

          {activeStatus === "inProgress" && (
            <>
              {projects
                .filter((project) => project.status === "inProgress")
                .map((project) => (
                  <View style={styles.taskCard} key={project.id}>
                    <H6 style={styles.taskTitle}>{project.title}</H6>
                    <ProgressBar
                      progress={project.progress}
                      color="#020409"
                      style={styles.progressBar}
                    />
                    <Text style={styles.progressText}>
                      {Math.round(project.progress * 100)}% complete
                    </Text>
                    <View style={styles.taskInfo}>
                      <Icon name="calendar-outline" size={16} color="#020409" />
                      <Text style={styles.infoText}>Due: {project.due}</Text>
                      <Icon name="time-outline" size={16} color="#020409" />
                      <Text style={styles.infoText}>Est: {project.est}</Text>
                    </View>
                  </View>
                ))}
            </>
          )}

          {activeStatus === "complete" && (
            <Text style={styles.completedText}></Text>
          )}
        </Card.Content>
      </Card>
    </ContainerComponent>
  );
};

export default TaskList;

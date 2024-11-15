import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
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
import { H3, H5, H6 } from "../components/text";

import { layouts, spacing, typography, LIGHT } from "../styles";
import { staff, tasks } from "../utils/faker";

const SCREEN_WIDTH = Dimensions.get("window").width;

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

      <Card>
        <Card.Content backgroundColor={LIGHT}>
          <View
            style={[
              styles.row,
              spacing.mh2,
              { alignItems: "center", width: SCREEN_WIDTH - 32 },
            ]}
          >
            <View>
              <H3 style={typography.textBold}>
                Good Morning, {staff.first_name}
              </H3>
            </View>
           
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

          {activeStatus === "toDo" && (
            <ToDo
              projects={projects}
              setProjects={setProjects}
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
            <Text style={styles.completedText}>All tasks are complete!</Text>
          )}
        </Card.Content>
      </Card>
    </ContainerComponent>
  );
};

export default TaskList;

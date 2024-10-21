// import React from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import { Card, Avatar, IconButton } from "react-native-paper";
// import Icon from "react-native-vector-icons/Ionicons";
// import { ProgressBar } from "react-native-paper";
// import ContainerComponent from "../components/ContainerComponent";
// import MyHeader from "../components/header/MyHeader";

// const TaskList = () => {
//   return (
//     <ContainerComponent>
//       <MyHeader
//         title="Task List"
//         isBack={true}
//         hasIcon={true}
//         icon={"search-outline"}
//       />
//       <Card style={styles.card}>
//         <Card.Content>
//           <View style={styles.header}>
//             <Text style={styles.greeting}>Good morning , Rohit!</Text>

//             <IconButton icon="bell" size={24} onPress={() => {}} />
//             <Avatar.Image
//               size={40}
//               source={{ uri: "https://placekitten.com/200/200" }}
//             />
//           </View>

//           <View style={styles.statusContainer}>
//             <TouchableOpacity style={styles.statusButton}>
//               <Text style={styles.statusText}>To do</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.statusButton, styles.activeButton]}
//             >
//               <Text style={styles.activeText}>In progress</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.statusButton}>
//               <Text style={styles.statusText}>Complete</Text>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.taskCard}>
//             <Text style={styles.taskTitle}>Landing page design</Text>
//             <ProgressBar
//               progress={0.5}
//               color="#020409"
//               style={styles.progressBar}
//             />
//             <Text style={styles.progressText}>50% complete</Text>

//             <View style={styles.taskInfo}>
//               <Icon name="calendar-outline" size={16} color="#fff" />
//               <Text style={styles.infoText}>Due: 25 Apr</Text>
//               <Icon name="time-outline" size={16} color="#fff" />
//               <Text style={styles.infoText}>Est: 20 h</Text>
//             </View>
//           </View>
//           <View style={styles.taskCard}>
//             <Text style={styles.taskTitle}>Landing page design</Text>
//             <ProgressBar
//               progress={0.7}
//               color="#020409"
//               style={styles.progressBar}
//             />
//             <Text style={styles.progressText}>70% complete</Text>

//             <View style={styles.taskInfo}>
//               <Icon name="calendar-outline" size={16} color="#fff" />
//               <Text style={styles.infoText}>Due: 25 Apr</Text>
//               <Icon name="time-outline" size={16} color="#fff" />
//               <Text style={styles.infoText}>Est: 20 h</Text>
//             </View>
//           </View>
//         </Card.Content>
//       </Card>
//     </ContainerComponent>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     // margin: 10,
//     // borderRadius: 15,
//     backgroundColor: "#ffffff",
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   greeting: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   statusContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 10,
//   },
//   statusButton: {
//     padding: 10,
//     backgroundColor: "#e5e5e5",
//     borderRadius: 20,
//   },
//   statusText: {
//     fontSize: 16,
//     color: "#333",
//   },
//   activeButton: {
//     backgroundColor: "#2b87b0",
//   },
//   activeText: {
//     color: "#fff",
//   },
//   taskCard: {
//     backgroundColor: "#2b87b0",
//     padding: 15,
//     borderRadius: 15,
//     marginTop: 20,
//   },
//   taskTitle: {
//     fontSize: 18,
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   taskInfo: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 10,
//   },
//   infoText: {
//     color: "#fff",
//     marginLeft: 5,
//     marginRight: 15,
//   },
//   progressBar: {
//     height: 10,
//     borderRadius: 5,
//     marginVertical: 10,
//   },
//   progressText: {
//     // textAlign: "center",
//     fontWeight: "bold",
//     marginTop: 6,
//     color: "#fff",
//   },
// });

// export default TaskList;

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Card, Avatar, IconButton, RadioButton } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { ProgressBar } from "react-native-paper";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";

const TaskList = () => {
  const [activeStatus, setActiveStatus] = useState("toDo"); // Default active status
  const [checkedProject, setCheckedProject] = useState(null); // To handle selected project
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Robatic cell",
      status: "toDo",
      progress: 0.5,
      due: "25 Apr",
      est: "20 h",
    },
    {
      id: 2,
      title: "Coffee Vending Machine",
      status: "toDo",
      progress: 0.7,
      due: "28 Apr",
      est: "15 h",
    },
    {
      id: 3,
      title: "Automatic soap Dispensor machine jig",
      status: "toDo",
      progress: 0.7,
      due: "28 Apr",
      est: "15 h",
    },
  ]);

  // Function to handle status change
  const handleStatusChange = (status) => {
    setActiveStatus(status);
  };

  // Function to move the selected task to "inProgress"
  const handleTaskProgress = (projectId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === projectId ? { ...task, status: "inProgress" } : task
    );
    setTasks(updatedTasks);
    setActiveStatus("inProgress");
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
            <Text style={styles.greeting}>Good morning, Rohit!</Text>
            <IconButton icon="bell" size={24} onPress={() => {}} />
            <Avatar.Image
              size={40}
              source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
            />
          </View>

          {/* Status buttons */}
          <View style={styles.statusContainer}>
            <TouchableOpacity
              style={[
                styles.statusButton,
                activeStatus === "toDo" && styles.activeButton,
              ]}
              onPress={() => handleStatusChange("toDo")}
            >
              <Text
                style={[
                  styles.statusText,
                  activeStatus === "toDo" && styles.activeText,
                ]}
              >
                To do
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.statusButton,
                activeStatus === "inProgress" && styles.activeButton,
              ]}
              onPress={() => handleStatusChange("inProgress")}
            >
              <Text
                style={[
                  styles.statusText,
                  activeStatus === "inProgress" && styles.activeText,
                ]}
              >
                In progress
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.statusButton,
                activeStatus === "complete" && styles.activeButton,
              ]}
              onPress={() => handleStatusChange("complete")}
            >
              <Text
                style={[
                  styles.statusText,
                  activeStatus === "complete" && styles.activeText,
                ]}
              >
                Complete
              </Text>
            </TouchableOpacity>
          </View>

          {/* Conditional rendering based on activeStatus */}
          {activeStatus === "toDo" && (
            <View style={styles.projectList}>
              <Text style={styles.projectListTitle}>Select a project:</Text>
              <RadioButton.Group
                onValueChange={(value) => {
                  setCheckedProject(value);
                  handleTaskProgress(parseInt(value)); // Automatically move task to inProgress
                }}
                value={checkedProject}
              >
                {tasks
                  .filter((task) => task.status === "toDo")
                  .map((task) => (
                    <View style={styles.radioItem} key={task.id}>
                      <RadioButton value={task.id.toString()} />
                      <Text>{task.title}</Text>
                    </View>
                  ))}
              </RadioButton.Group>
            </View>
          )}

          {activeStatus === "inProgress" && (
            <>
              {tasks
                .filter((task) => task.status === "inProgress")
                .map((task) => (
                  <View style={styles.taskCard} key={task.id}>
                    <Text style={styles.taskTitle}>{task.title}</Text>
                    <ProgressBar
                      progress={task.progress}
                      color="#020409"
                      style={styles.progressBar}
                    />
                    <Text style={styles.progressText}>
                      {Math.round(task.progress * 100)}% complete
                    </Text>
                    <View style={styles.taskInfo}>
                      <Icon name="calendar-outline" size={16} color="#fff" />
                      <Text style={styles.infoText}>Due: {task.due}</Text>
                      <Icon name="time-outline" size={16} color="#fff" />
                      <Text style={styles.infoText}>Est: {task.est}</Text>
                    </View>
                  </View>
                ))}
            </>
          )}

          {activeStatus === "complete" && (
            <Text style={styles.completedText}>
              {/* All tasks have been completed! */}
            </Text>
          )}
        </Card.Content>
      </Card>
    </ContainerComponent>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
  },
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
  projectList: {
    marginTop: 20,
  },
  projectListTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  radioItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
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
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  progressText: {
    fontWeight: "bold",
    marginTop: 6,
    color: "#fff",
  },
  completedText: {
    textAlign: "center",
    fontSize: 18,
    color: "#2b87b0",
    marginTop: 20,
  },
});

export default TaskList;

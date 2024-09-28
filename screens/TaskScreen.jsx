// import React from "react";
// import {
//   Text,
//   ScrollView,
//   View,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";
// import ContainerComponent from "../components/ContainerComponent";
// import MyHeader from "../components/header/MyHeader";
// import TaskCard from "../components/card/TaskCard"; // Custom Task Card component
// import { tasks } from "../utils/faker"; // Import your tasks data

// export default function TaskScreen() {
//   return (
//     <ContainerComponent>
//       <MyHeader
//         title="Task List"
//         hasIcon={true}
//         icon="notifications-outline"
//         badgeCount={1}
//       />
//       {/* Task categories header */}
//       <View style={styles.categoryContainer}>
//         <CategoryBadge title="Complete" count={65} isActive />
//         <CategoryBadge title="To Do" count={45} />
//         <CategoryBadge title="In Review" count={3} />
//       </View>
//       <ScrollView>
//         {(tasks || []).map((task, index) => (
//           <TaskCard
//             key={index}
//             backgroundColor={task.backgroundColor}
//             title={task.title}
//             description={task.description}
//             status={task.status}
//             date={task.date}
//             commentsCount={task.commentsCount}
//             attachmentsCount={task.attachmentsCount}
//             teamMembers={task.teamMembers}
//           />
//         ))}
//       </ScrollView>
//       {/* Add Task Button */}
//       <TouchableOpacity style={styles.addButton}>
//         <Text style={styles.addButtonText}>+</Text>
//       </TouchableOpacity>
//     </ContainerComponent>
//   );
// }

// const CategoryBadge = ({ title, count, isActive }) => (
//   <View style={[styles.categoryBadge, isActive && styles.activeCategory]}>
//     <Text style={styles.categoryText}>{title}</Text>
//     <Text style={styles.categoryCount}>{count}</Text>
//   </View>
// );

// // Custom styles for the TaskList screen
// const styles = StyleSheet.create({
//   categoryContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginVertical: 10,
//   },
//   categoryBadge: {
//     backgroundColor: "#f0f0f0",
//     borderRadius: 20,
//     paddingHorizontal: 15,
//     paddingVertical: 5,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   activeCategory: {
//     backgroundColor: "#000",
//   },
//   categoryText: {
//     color: "#000",
//     fontSize: 14,
//     marginRight: 5,
//   },
//   categoryCount: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   addButton: {
//     backgroundColor: "#8e44ad",
//     borderRadius: 30,
//     width: 60,
//     height: 60,
//     justifyContent: "center",
//     alignItems: "center",
//     position: "absolute",
//     bottom: 20,
//     right: 20,
//     elevation: 5,
//   },
//   addButtonText: {
//     color: "#fff",
//     fontSize: 30,
//   },
// });

import React from "react";
import { ScrollView, View } from "react-native";
import TaskCard from "./TaskCard";
import tasks from "../utils/dummyData";

const TaskListTwo = () => {
  return (
    <ScrollView>
      {tasks.map((task) => (
        <View key={task.id}>
          <TaskCard task={task} />
        </View>
      ))}
    </ScrollView>
  );
};

export default TaskListTwo;

import { View, FlatList, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Progress from "react-native-progress";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import { cardtasks } from "../utils/faker";
import DateSelector from "../components/DateSelector";
import { H1, H4, H5, H6 } from "../components/text";
import { styles } from "../styles/components.styles";

const ProjectTimeline = ({ task }) => (
  <View style={styles.taskCard}>
    <View style={styles.taskHeader}>
      <H4 style={styles.taskTitle}>{task.title}</H4>
      <Icon name="ellipsis-h" size={20} color="#888" />
    </View>
    <H5 style={styles.taskTime}>{task.time}</H5>
    <View style={styles.progressContainer}>
      <Text style={styles.progressLabel}>Progress</Text>
      <Progress.Bar progress={task.progress} width={150} color="#1abc9c" />
      <Text style={styles.progressPercent}>{`${Math.round(
        task.progress * 100
      )}%`}</Text>
    </View>
    <View style={styles.participantsContainer}>
      {task.avatars.map((avatar, index) => (
        <Image key={index} source={{ uri: avatar }} style={styles.avatar} />
      ))}
      <H4 style={styles.participantText}>+{task.participants}</H4>
    </View>
  </View>
);

const ProjectTimelineScreen = () => {
  const dates = ["10", "11", "12", "13", "14", "15", "16"];
  const activeDate = "12";

  const onSelectDate = (date) => {
    console.log("Selected date:", date);
  };

  return (
    <ContainerComponent>
      <View>
        <MyHeader title="Project Timeline" />
        <DateSelector
          dates={dates}
          activeDate={activeDate}
          onSelectDate={onSelectDate}
        />
        <FlatList
          data={cardtasks}
          renderItem={({ item }) => <ProjectTimeline task={item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.taskList}
        />
      </View>
    </ContainerComponent>
  );
};

export default ProjectTimelineScreen;

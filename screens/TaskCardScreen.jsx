import { View, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import { task } from "../utils/faker";
import { spacing, typography, SCREEN_WIDTH } from "../styles";
import { styles } from "../styles/components.styles";
import { H4, H5, H6 } from "../components/text";
import { DARK } from "../styles/constant";

const TaskCardScreen = ({ title, deadline, start, project, assignedTo }) => {
  return (
    <ContainerComponent>
      <Card containerStyle={styles.card}>
        <View style={{ flexDirection: "row", marginBottom: 12 }}>
          <H4 style={[typography.textBold, { color: DARK }]}>{title}</H4>
        </View>
        <View style={styles.cardDetails}>
          <View style={{ flexDirection: "row", marginBottom: 8 }}>
            <H5 style={[typography.font8, { color: "black", flex: 1 }]}>
              Start Date:
            </H5>
            <H6
              style={[
                typography.font8,
                { color: "black", textAlign: "right", flex: 1 },
              ]}
            >
              {start}
            </H6>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 8 }}>
            <H5 style={[typography.font8, { color: "black", flex: 1 }]}>
              Deadline:
            </H5>
            <H6
              style={[
                typography.font8,
                { color: "black", textAlign: "right", flex: 1 },
              ]}
            >
              {deadline}
            </H6>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 8 }}>
            <H5 style={[typography.font8, { color: "black", flex: 1 }]}>
              Project:
            </H5>
            <H6
              style={[
                typography.font8,
                { color: "black", textAlign: "right", flex: 1 },
              ]}
            >
              {project}
            </H6>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 8 }}>
            <H5 style={[typography.font8, { color: "black", flex: 1 }]}>
              Assigned To:
            </H5>
            <H6
              style={[
                typography.font8,
                { color: "black", textAlign: "right", flex: 1 },
              ]}
            >
              {assignedTo}
            </H6>
          </View>
        </View>
      </Card>
    </ContainerComponent>
  );
};

const TaskListScreen = () => {
  return (
    <View
      style={[
        spacing.mh2,
        {
          width: SCREEN_WIDTH - 16,
        },
      ]}
    >
      <MyHeader title="Complete Task" isBack={true} hasIcon={true} />
      <ScrollView>
        {task.map((task) => (
          <TaskCardScreen
            key={task.id}
            id={task.id}
            title={task.title}
            status={task.status}
            deadline={task.deadline}
            start={task.start}
            project={task.project}
            assignedTo={task.assignedTo}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default TaskListScreen;

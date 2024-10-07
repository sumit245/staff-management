import { View, Text, Image, TouchableOpacity } from "react-native";
import { Card, ProgressBar } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import { profileImages, miniCards, taskCards } from "../utils/faker";
import { styles } from "../styles/components.styles";

export default function LandingPage() {
  return (
    <ContainerComponent>
      <MyHeader title="Landing Page Design" icon="dots-horizontal" />

      <View>
        <Card style={styles.card}>
          <View style={styles.progressContainer}>
            <View style={styles.leftContainer}>
              <Text style={styles.progressText}>72%</Text>
              <Text style={styles.subText}>Total progress</Text>
            </View>
            <View style={styles.profileContainer}>
              {profileImages.map((uri, index) => (
                <Image
                  key={index}
                  source={{ uri }}
                  style={styles.profileImage}
                />
              ))}
              <Ionicons
                name="add-circle"
                size={24}
                color="#000"
                style={styles.addIcon}
              />
            </View>
          </View>
        </Card>

        <View style={styles.row}>
          {miniCards.map((card) => (
            <Card
              key={card.id}
              style={[styles.miniCard, { backgroundColor: "#ffffff" }]}
            >
              <Ionicons name={card.icon} size={24} color="#2b87b0" />
              <Text style={styles.cardText}>{card.text}</Text>
            </Card>
          ))}
        </View>

        <View style={styles.row}>
          {taskCards.map((task) => (
            <Card
              key={task.id}
              style={[styles.taskCard, { backgroundColor: task.bgColor }]}
            >
              <TouchableOpacity style={styles.taskContent}>
                <Text style={styles.taskText}>{task.text}</Text>
                <ProgressBar
                  progress={task.progress}
                  color="#fff"
                  style={styles.progressBar}
                />
                <View style={styles.profileContainer}>
                  {profileImages.map((uri, index) => (
                    <Image
                      key={index}
                      source={{ uri }}
                      style={styles.profileImage}
                    />
                  ))}
                </View>
              </TouchableOpacity>
            </Card>
          ))}
        </View>
      </View>
    </ContainerComponent>
  );
}

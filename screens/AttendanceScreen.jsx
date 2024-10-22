import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Card } from "react-native-paper";
import ContainerComponent from "../components/ContainerComponent";
import DateSelector from "../components/DateSelector";
import { H5, P, H4, H6 } from "../components/text";
import { attendanceData, activityData } from "../utils/faker";
import { styles } from "../styles/components.styles";

export default function AttendanceScreen() {
  const [activeDate, setActiveDate] = useState("08 Sat");
  const dates = ["06 Thu", "07 Fri", "08 Sat", "09 Sun"];

  const handleSelectDate = (date) => {
    setActiveDate(date);
  };

  return (
    <ContainerComponent>
      <ScrollView>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/5.jpg" }}
            style={styles.profileImage}
          />
          <View>
            <H5 style={styles.profileName}>Rohit Gupta</H5>
            <P style={styles.profileTitle}>UI/UX Designer</P>
          </View>
          <Icon
            name="bell-outline"
            size={28}
            color="#000"
            style={styles.notificationIcon}
          />
        </View>

        <DateSelector
          dates={dates}
          activeDate={activeDate}
          onSelectDate={handleSelectDate}
        />

        <H4 style={styles.sectionTitle}>Today Attendance</H4>
        <View style={styles.attendanceContainer}>
          {attendanceData.map((item, index) => (
            <Card key={index} style={styles.attendanceCard}>
              <Icon name={item.icon} size={24} color="#2b87b0" />
              <H6 style={styles.attendanceText}>{item.title}</H6>
              <P style={styles.attendanceTime}>{item.time}</P>
              <P style={styles.attendanceStatus}>{item.status}</P>
            </Card>
          ))}
        </View>

        <H4 style={styles.sectionTitle}>Your Activity</H4>
        {activityData.map((activity, index) => (
          <View key={index} style={styles.activityItem}>
            <Icon name={activity.icon} size={24} color="#2b87b0" />
            <View style={styles.activityInfo}>
              <H6 style={styles.activityText}>{activity.title}</H6>
              <P style={styles.activityTime}>{activity.time}</P>
            </View>
            <Text style={styles.activityStatus}>{activity.status}</Text>
          </View>
        ))}
      </ScrollView>
    </ContainerComponent>
  );
}

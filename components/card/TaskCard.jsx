// File: ../components/card/TaskCard.js

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TaskCard = ({
  backgroundColor,
  title,
  description,
  status,
  date,
  commentsCount,
  attachmentsCount,
  teamMembers,
}) => {
  return (
    <TouchableOpacity style={[styles.cardContainer, { backgroundColor }]}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.status}>{status}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.footer}>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{commentsCount} comments</Text>
          <Text style={styles.infoText}>{attachmentsCount} attachments</Text>
        </View>
        <View style={styles.teamMembers}>
          {teamMembers.map((member, index) => (
            <Image
              key={index}
              source={{ uri: member.image }}
              style={styles.avatar}
            />
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  status: {
    color: "#777",
  },
  description: {
    marginVertical: 5,
    color: "#555",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    color: "#777",
    fontSize: 12,
  },
  infoContainer: {
    flexDirection: "row",
  },
  infoText: {
    color: "#777",
    fontSize: 12,
    marginRight: 10,
  },
  teamMembers: {
    flexDirection: "row",
  },
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    marginLeft: 5,
  },
});

export default TaskCard;

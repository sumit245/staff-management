import React from "react";
import { View, ScrollView, StyleSheet, Text, Dimensions } from "react-native";
import { Card } from "react-native-elements";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import { projectDataList } from "../utils/faker";
import { styles } from "../styles/components.styles";
//import { SCREEN_WIDTH, spacing, typography } from "../styles";
import { H1, H2, H3, H4, H5, H6 } from "../components/text";
import {
  LIGHT,
  PRIMARY_COLOR,
  //styles,
  spacing,
  typography,
  SCREEN_WIDTH,
} from "../styles";
import { DARK } from "../styles/constant";

const ProjectCard = ({
  name,
  startDate,
  deadline,
  description,
  manager,
  teamMembers,
}) => {
  return (
    <ContainerComponent>
      <Card containerStyle={styles.card}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <H4 style={[typography.textBold, { color: DARK }]}>{name}</H4>
        </View>
        <View>
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
              {startDate}
            </H6>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 8,
            }}
          >
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
          <View
            style={{
              flexDirection: "row",
              marginBottom: 8,
            }}
          >
            <H5 style={[typography.font8, { color: "black", flex: 1 }]}>
              Manager:
            </H5>
            <H6
              style={[
                typography.font8,
                { color: "black", textAlign: "right", flex: 1 },
              ]}
            >
              {manager}
            </H6>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 8,
            }}
          >
            <H5 style={[typography.font8, { color: "black", flex: 1 }]}>
              Team Members:
            </H5>
            <H6
              style={[
                typography.font8,
                { color: "black", textAlign: "right", flex: 1 },
              ]}
            >
              {teamMembers.join(", ")}
            </H6>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 8,
            }}
          >
            <H5 style={[typography.font8, { color: "black", flex: 1 }]}>
              Description:
            </H5>
            <H6
              style={[
                typography.font8,
                { color: "black", textAlign: "right", flex: 1 },
              ]}
            >
              {description}
            </H6>
          </View>
        </View>
      </Card>
    </ContainerComponent>
  );
};

const OpenProjectScreen = () => {
  return (
    <View
      style={[
        spacing.mh1,
        {
          width: SCREEN_WIDTH - 8,
        },
      ]}
    >
      <MyHeader title="Open Project" isBack={true} hasIcon={true} />
      <ScrollView>
        {projectDataList.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            startDate={project.startDate}
            deadline={project.deadline}
            description={project.description}
            manager={project.manager}
            teamMembers={project.teamMembers}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default OpenProjectScreen;

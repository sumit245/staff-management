import React, { useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { reviewsData } from "../utils/faker";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import { SCREEN_WIDTH, spacing, typography, styles } from "../styles";
import { H3, H6 } from "../components/text";

const InReviewScreen = () => {
  const [filteredTasks, setFilteredTasks] = useState(reviewsData);

  const renderListItem = ({ item }) => (
    <TouchableOpacity>
      <Card
        style={[
          spacing.mv1,
          { width: SCREEN_WIDTH - 16, backgroundColor: "#ffffff" },
        ]}
      >
        <View style={{ flexDirection: "row", padding: 16 }}>
          <View>
            <H3 style={[typography.font8, { color: "black" }]}>{item.title}</H3>

            <H6 style={[typography.font8, { color: "black" }]}>
              Details: {item.details}
            </H6>
            <H6 style={[typography.font8, { color: "black" }]}>
              Start Date: {item.startDate}
            </H6>
            <H6 style={[typography.font8, { color: "black" }]}>
              End Date: {item.endDate}
            </H6>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );

  return (
    <ContainerComponent>
      <View style={[spacing.mh1, { width: SCREEN_WIDTH - 16 }]}>
        <MyHeader title="In Review" isBack={true} hasIcon={true} />
        <FlatList
          data={filteredTasks}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
        />
      </View>
    </ContainerComponent>
  );
};

export default InReviewScreen;

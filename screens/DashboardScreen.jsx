import React, { useState } from "react";
import { Text, ScrollView, View } from "react-native";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import StatCard from "../components/card/Statcard";
import MyRadioButton from "../components/input/MyRadioButton";
import CustomFlatList from "../components/CustomFlatList";

export default function DashboardScreen() {
  const [selectedOption, setSelectedOption] = useState(null);

  const radioOptions = [
    { label: "ABC", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <ContainerComponent>
      <MyHeader
        title="Dashboard"
        hasIcon={true}
        icon="notifications-outline"
        badgeCount={1}
      />
      <ScrollView>
        {tasks.map((task, index) => (
          <StatCard
            key={index}
            backgroundColor={task.backgroundColor}
            tasks={task.count}
            status={task.status}
          />
        ))}       
        <CustomFlatList
          data={data}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 8,
              }}
            >
              <Text>{item.dessert}</Text>
              <Text>{item.calories}</Text>
              <Text>{item.fat}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={<Text>No tasks available.</Text>}
        />

        <MyRadioButton
          title="Select an Option"
          options={radioOptions}
          selectedValue={selectedOption}
          onValueChange={setSelectedOption}
        />

        <Text style={{ fontSize: 80 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aliquam
          id neque, nemo inventore tenetur excepturi! Modi facere nobis
          molestiae aliquam, distinctio dolorem itaque aperiam ab cupiditate
          maxime delectus ipsa?
        </Text>
      </ScrollView>
    </ContainerComponent>
  );
}

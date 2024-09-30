import React, { useState } from "react";
import { Text, ScrollView, View } from "react-native";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import StatCard from "../components/card/Statcard";
import MyRadioButton from "../components/input/MyRadioButton";
import CustomFlatList from "../components/CustomFlatList";
import DataTableHeader from "../components/DataTable/DataTableHeader"; // Adjust the path as necessary

export default function DashboardScreen() {
  const [selectedOption, setSelectedOption] = useState(null);

  const radioOptions = [
    { label: "ABC", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  // Sample data for the DataTable
  const data = [
    { dessert: "Ice Cream", calories: 200, fat: 10 },
    { dessert: "Cake", calories: 300, fat: 15 },
    { dessert: "Pie", calories: 250, fat: 12 },
  ];

  const headers = [
    {
      label: "Dessert",
      numeric: false,
      sortKey: "dessert",
      sortDirection: "descending",
    },
    {
      label: "Calories",
      numeric: true,
      sortKey: "calories",
      sortDirection: "descending",
    },
    {
      label: "Fat (g)",
      numeric: true,
      sortKey: "fat",
      sortDirection: "descending",
    },
  ];

  const handleSort = (key) => {
    // Implement sorting logic if needed
    console.log(`Sort by ${key}`);
  };

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

        {/* DataTable Header */}
        <DataTableHeader headers={headers} onSort={handleSort} />

        {/* Custom FlatList for displaying data */}
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

import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { H2, P } from "../components/text";
import { PRIMARY_COLOR, spacing, typography, styles } from "../styles";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import SearchBar from "../components/input/SearchBar";
import MyFlatList from "../components/utility/MyFlatList";
import { dummyWorkers } from "../utils/faker";

const STATUS_COLORS = {
  Present: { bg: "#DFF0D8", text: "#4CAF50", border: "#4CAF50" },
  "Half Day": { bg: "#FDF6D1", text: "#B8860B", border: "#ccc" },
  Absent: { bg: "#F8D7DA", text: "#C0392B", border: "#ccc" },
};

const AttendanceCard = ({ item, index, onStatusChange }) => (
  <View
    style={{
      backgroundColor: "#fff",
      marginVertical: 8,
      marginLeft: 20,
      right: 20,
      padding: 16,
      borderRadius: 12,
      elevation: 3,
      borderLeftWidth: 4,
      borderLeftColor: STATUS_COLORS[item.status]?.border || "#ccc",
      width: "100%",
    }}
  >
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
        <Text style={{ color: "gray", fontSize: 14 }}>{item.job}</Text>
      </View>
      <TouchableOpacity>
        <Text style={{ fontSize: 20, color: "#888" }}>⋮</Text>
      </TouchableOpacity>
    </View>

    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 12,
      }}
    >
      {Object.keys(STATUS_COLORS).map((status) => {
        const isActive = item.status === status;
        const { bg, text } = STATUS_COLORS[status];
        return (
          <TouchableOpacity
            key={status}
            onPress={() => onStatusChange(index, status)}
            style={{
              paddingVertical: 6,
              paddingHorizontal: 16,
              borderRadius: 8,
              backgroundColor: isActive ? bg : "#f0f0f0",
              borderColor: "#ccc",
              borderWidth: 1,
              marginHorizontal: 2,
            }}
          >
            <Text
              style={{
                color: isActive ? text : "#444",
                fontWeight: "bold",
              }}
            >
              {status}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  </View>
);

const VendorAttendanceScreen = () => {
  const [attendanceList, setAttendanceList] = useState(dummyWorkers);
  const [searchText, setSearchText] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleStatusChange = (index, status) => {
    const updatedList = [...attendanceList];
    updatedList[index].status = status;
    setAttendanceList(updatedList);
  };

  const filteredList = attendanceList.filter((worker) =>
    worker.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const formattedDate = selectedDate.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <ContainerComponent>
      <MyHeader isBack={true} title="Attendance" hasIcon={true} />
      <SearchBar
        placeholder="Search"
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* Date & Count Section */}
      <View
        style={[
          styles.row,
          {
            alignItems: "center",
            marginBottom: 16,
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => setDatePickerVisibility(true)}
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 6,
            paddingVertical: 4,
            paddingHorizontal: 10,
          }}
        >
          <P style={typography.font14}>{formattedDate}</P>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 14,
            color: PRIMARY_COLOR,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 6,
            paddingVertical: 4,
            paddingHorizontal: 10,
            fontWeight: "bold",
          }}
        >
          Labour on Site: {attendanceList.length}
        </Text>
      </View>

      {/* Attendance List */}
      <MyFlatList
        data={filteredList}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <AttendanceCard
            item={item}
            index={index}
            onStatusChange={handleStatusChange}
          />
        )}
      />

      {/* Date Picker */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        date={selectedDate}
        onConfirm={(date) => {
          setSelectedDate(date);
          setDatePickerVisibility(false);
        }}
        onCancel={() => setDatePickerVisibility(false)}
      />
    </ContainerComponent>
  );
};

export default VendorAttendanceScreen;

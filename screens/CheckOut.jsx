import React from "react";
import { View, Dimensions } from "react-native";
import { Text, Card } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CheckoutButton from "../components/buttons/CheckoutButton";
import MyHeader from "../components/header/MyHeader";
import ContainerComponent from "../components/ContainerComponent";
import { activities } from "../utils/faker";
import { H1, H4, H5, P } from "../components/text";
import { styles } from "../styles/components.styles";
import MapView, { Marker } from "react-native-maps";

export default function TimeClockScreen() {
  const handleCheckout = () => {};

  const location = {
    latitude: 25.6097,
    longitude: 85.1422,
  };

  return (
    <ContainerComponent>
      <View>
        <MyHeader title="Time Clock" />

        <Card style={styles.timerCard}>
          <View style={styles.timerContent}>
            <View style={styles.locationRow}>
              <H4 style={styles.locationText}>Current Location</H4>
              <H4 style={styles.locationText}>Capital Icon</H4>
            </View>
            <H1 style={styles.timeText}>00:00:00</H1>
            <P style={styles.workHoursText}>Total work hours today</P>
            <P style={styles.workHoursTimeText}>00:00:00</P>
          </View>
        </Card>

        <Card style={styles.activityCard}>
          <H4 style={styles.activityHeader}>My Day Activity</H4>
          {activities.map((item) => (
            <View key={item.id} style={styles.activityRow}>
              <H5 style={styles.activityTitle}>{item.title}</H5>
              <P style={styles.activityTime}>{item.time}</P>
            </View>
          ))}
        </Card>

        <CheckoutButton
          onPress={handleCheckout}
          text="Check Out"
          icon="hand-pointing-up"
          size={60}
          color="#ffffff"
        />

        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              ...location,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}
          >
            <Marker coordinate={location} title={"Patna"} />
          </MapView>
        </View>
      </View>
    </ContainerComponent>
  );
}

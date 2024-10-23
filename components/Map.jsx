// import React from "react";
// import MapView from "react-native-maps";
// import { StyleSheet, View } from "react-native";

// export default function Map() {
//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: 25.5941, // Patna Latitude
//           longitude: 85.1376, // Patna Longitude
//           latitudeDelta: 0.05, // Zoom level for latitude
//           longitudeDelta: 0.05, // Zoom level for longitude
//         }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     width: "100%",
//     height: "50%",
//   },
// });

import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";

export default function Map({ location }) {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude, // Location passed as prop
          longitude: location.longitude, // Location passed as prop
          latitudeDelta: 0.05, // Zoom level for latitude
          longitudeDelta: 0.05, // Zoom level for longitude
        }}
      >
        <Marker coordinate={location} title="Your Location" />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    borderRadius: 10,
    overflow: "hidden",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

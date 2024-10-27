import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, PRIMARY_COLOR } from "./constant";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  cameraContainer: {
    height: SCREEN_WIDTH / 1.5,
    width: SCREEN_WIDTH / 1.5,
    borderRadius: SCREEN_WIDTH / 3,
    borderWidth: 6,
    borderColor: PRIMARY_COLOR,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  camera: {
    height: SCREEN_WIDTH / 1.5,
    width: SCREEN_WIDTH / 1.5,
  },
  capturedImageContainer: {
    height: 240,
    width: 240,
    borderRadius: 120,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  capturedImage: {
    height: "100%",
    width: "100%",
    borderRadius: 120,
    position: "absolute",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },

  mapContainer: {
    height: 300,
    marginVertical: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  map: {
    width: SCREEN_WIDTH - 20,
    height: SCREEN_WIDTH,
  },
  loadingText: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    backgroundColor: "#2b87b0",
    marginVertical: 8,
    padding: 8,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 6,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

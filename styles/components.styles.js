import { StyleSheet, Platform, StatusBar } from "react-native";
import {
  DANGER_COLOR,
  DARK,
  LIGHT,
  PRIMARY_COLOR,
  PRIMARY_COLOR_TRANSPARENT,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "./constant";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT, 
    alignItems: "center",
    marginHorizontal: 8,
  },
  card: {
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 15,
    elevation: 3,
    backgroundColor: "#fff", 
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  labelsContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  label: {
    borderRadius: 15,
    paddingVertical: 3,
    paddingHorizontal: 10,
    marginRight: 5,
  },
  highPriority: {
    backgroundColor: "#f87171", 
  },
  onTrack: {
    backgroundColor: "#c084fc", 
  },
  labelText: {
    color: "#fff",
    fontSize: 12,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  footerItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerText: {
    marginLeft: 5,
    color: "#6b7280", 
    fontSize: 14,
  },
  dangerHeading: {
    color: DANGER_COLOR,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    padding: 20,
  },
  textLarge: {
    fontSize: 20,
  },
  imageContainer: {
    flex: 1,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    height: 0.1 * SCREEN_HEIGHT,
    marginVertical: 0.02 * SCREEN_HEIGHT,
  },
  imageContainerImg: {
    width: 0.6 * SCREEN_WIDTH,
    height: 0.6 * SCREEN_WIDTH,
    marginTop: 20,
  },
  inputContainer: {
    width: SCREEN_WIDTH - 16,
  },
  textInput: {
    marginVertical: 8,
  },
  textInputField: {
    marginVertical: 4,
    backgroundColor: PRIMARY_COLOR_TRANSPARENT,
    borderRadius: 6,
    height: 54,
    fontSize: 18,
    paddingLeft: 14,
    borderColor: PRIMARY_COLOR,
    borderWidth: 1,
  },
  primaryButton: {
    marginVertical: 8,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  btnText: {
    textTransform: "uppercase",
    color: LIGHT,
    fontWeight: "bold",
  },
  rightLink: {
    color: PRIMARY_COLOR,
    textAlign: "right",
    textDecorationLine: "underline",
    marginVertical: 12,
  },
  headerStyle: {
    width: SCREEN_WIDTH,
    borderBottomColor: "#6c6c6c",
    borderBottomWidth: 0.5,
    height: 54,
    margin: 0,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleText: {
    fontWeight: "700",
    color: DARK,
  },
  statCard: {
    width: SCREEN_WIDTH / 2.5,
    height: SCREEN_WIDTH / 3,
    margin: 8,
    padding: 18,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
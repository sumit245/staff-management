import { StyleSheet, Platform, StatusBar } from "react-native";
import {
  DANGER_COLOR,
  DARK,
  LIGHT,
  PRIMARY_COLOR,
  PRIMARY_COLOR_TRANSPARENT,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  SECONDARY_COLOR,
} from "./constant";
import FilledButton from "../components/buttons/FilledButton";
import Dropdown from "../components/Dropdown";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT,
    alignItems: "center",
    marginHorizontal: 8,
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
  picker: {
    borderWidth: 1,
    borderColor: SECONDARY_COLOR,
    borderRadius: 5,
  },
  chipButton: {
    borderWidth: 1,
    borderColor: SECONDARY_COLOR,
    borderRadius: 5,
    padding: 4,
    marginRight: 4,
    backgroundColor: LIGHT,
    width: SCREEN_WIDTH / 3.5,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  //progressbar
  pcontainer: {
    marginVertical: 10,
    alignItems: "center",
    width: "100%",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  progressBarContainer: {
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    borderRadius: 10,
  },
  progressText: {
    marginTop: 5,
    fontSize: 14,
    color: "#888",
  },
  appContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  // ============
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 26,
    paddingVertical: 22,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  searchButton: {
    marginLeft: "auto",
    marginTop: 14,
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "white",
  },
  addButton: {
    marginRight: 8,
  },
  textInputContainer: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    borderRadius: 24,
    paddingHorizontal: 12,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
  sendButton: {
    marginLeft: 8,
  },
  // Audio.jsx
  audioContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  audioText: {
    marginLeft: 10,
    fontSize: 16,
  },
  //FilledButton
  filledButton: {
    margin: 50,
    borderColor: PRIMARY_COLOR,
    borderWidth: 2,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  //Dropdown
  container: {
    marginVertical: 200,
    borderWidth: 1,
    borderColor: SECONDARY_COLOR,
    borderRadius: 2,
    paddingHorizontal: 10,
  },
  selectedText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  //list
  screenContainer: {
    padding: 16,
  },
  itemContainer: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    color: "LIGHT",
  },
  //CustomSwitch
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 200,
    justifyContent: "center",
  },
  //Animatedfeb
  container: {
    position: "absolute",
    bottom: 30,
    right: 30,
    alignItems: "flex-end",
  },
  fab: {
    backgroundColor: PRIMARY_COLOR,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  fabText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  actionButton: {
    backgroundColor: "#54B4D3",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  actionText: {
    color: "#fff",
    fontWeight: "bold",
  },
  //menuitem
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  icon: {
    marginRight: 15,
  },
  title: {
    fontSize: 16,
    color: "#333",
  },
});

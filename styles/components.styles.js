import { StyleSheet, Platform, StatusBar } from "react-native";
import { DANGER_COLOR, DARK, LIGHT, PRIMARY_COLOR, PRIMARY_COLOR_TRANSPARENT, SCREEN_HEIGHT, SCREEN_WIDTH, SECONDARY_COLOR } from "./constant";

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
    width: "90%", // Reduce width to create space on sides
    paddingHorizontal: 16,
    marginVertical: 12, // Adjust margin between input fields
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
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
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
  icon: {
    marginRight: 15,
    color: DARK,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20, // Add vertical padding to create space
  },
  optionsContainer: {
    width: "90%", // Match the width of other components
    paddingHorizontal: 16, // Padding for consistent spacing
    marginTop: 20, // Create space between inputs and options
  },
  optionItem: {
    paddingVertical: 16, // Add vertical padding for touch targets
    borderBottomWidth: 1,
    borderBottomColor: "#eee", // Separate items with a soft border
  },
  
});
import { StyleSheet, Platform, StatusBar } from "react-native";
import {
  DANGER_COLOR,
  DARK,
  INFO_COLOR,
  LIGHT,
  PRIMARY_COLOR,
  PRIMARY_COLOR_TRANSPARENT,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  SECONDARY_COLOR,
  SUCCESS_COLOR,
  WARNING_COLOR,
} from "./constant";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT,
    alignItems: "center",
    marginHorizontal: 8,
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
    width: SCREEN_WIDTH - 20,
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    borderRadius: 6,
  },
  chipButton: {
    borderWidth: 1,
    borderColor: SECONDARY_COLOR,
    borderRadius: 6,
    padding: 4,
    marginRight: 4,
    backgroundColor: LIGHT,
    width: SCREEN_WIDTH / 3.5,
  },
  btn: {
    marginVertical: 8,
    padding: 8,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 6,
    flexDirection: "row",
  },
  bgDark: {
    backgroundColor: DARK,
  },
  bgInfo: {
    backgroundColor: INFO_COLOR,
  },
  bgDanger: {
    backgroundColor: DANGER_COLOR,
  },
  bgWarning: {
    backgroundColor: WARNING_COLOR,
  },
  bgSuccess: {
    backgroundColor: SUCCESS_COLOR,
  },
  bgPrimary: {
    backgroundColor: PRIMARY_COLOR,
  },
  bgPrimaryTransParent: {
    backgroundColor: PRIMARY_COLOR_TRANSPARENT,
  },
  bgSecondary: {
    backgroundColor: SECONDARY_COLOR,
  },
  round: {
    height: 64,
    width: 64,
    borderRadius: 32,
    justifyContent: "center",
  },
  textLight: {
    color: LIGHT,
  },
  textDark: {
    color: DARK,
  },
  textDanger: {
    color: DANGER_COLOR,
  },
  textSecondary: {
    color: SECONDARY_COLOR,
  },
  border: {
    borderWidth: 1,
  },
  fab: {
    elevation: 2,
    position: "absolute",
    bottom: 8,
    right: 8,
  },
  bottom: {
    position: "absolute",
    bottom: 2,
  },
  fullWidth: {
    width: SCREEN_WIDTH,
  },

  messageContainer: {
    padding: 12,
    borderRadius: 16,
    marginVertical: 8,
  },
  sentMessage: {
    backgroundColor: PRIMARY_COLOR,
    alignSelf: "flex-end",
  },
  receivedMessage: {
    backgroundColor: SECONDARY_COLOR,
    alignSelf: "flex-start",
  },
  messageText: {
    color: LIGHT,
    fontSize: 16,
  },
  sentMessageText: {
    color: LIGHT,
  },
  messageTime: {
    color: LIGHT,
    fontSize: 12,
    marginTop: 4,
  },
  progressBarContainer: {
    width: "90%",
    borderRadius: 6,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    borderRadius: 6,
  },
  snackbar: {
    position: "absolute",
    bottom: 10,
    left: 8,
    right: 8,
    borderRadius: 8,
    padding: 8,
    flexDirection: "row",
    minHeight: 48,
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 2,
    zIndex: 1000,
  },
  snackMessage: {
    maxWidth: SCREEN_WIDTH / 1.6,
    fontSize: 16,
    color: LIGHT,
  },

  radioDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: PRIMARY_COLOR,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  radioInner: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: PRIMARY_COLOR,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "red",
    marginBottom: 20,
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 15,
    padding: 4,
    borderColor: SECONDARY_COLOR,
    borderWidth: 1,
  },
  profileInfo: {
    flex: 1,
  },
  rowItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: SCREEN_WIDTH - 16,
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  rowBullet: {
    flexDirection: "row",
    alignItems: "center",
  },
  ph1: {
    paddingHorizontal: 4,
  },
  ph2: {
    paddingHorizontal: 8,
  },
  ph3: {
    paddingHorizontal: 12,
  },
  ph4: {
    paddingHorizontal: 16,
  },
  ph5: {
    paddingHorizontal: 20,
  },
  pv1: {
    paddingVertical: 4,
  },
  pv2: {
    paddingVertical: 8,
  },
  pv3: {
    paddingVertical: 12,
  },
  pv4: {
    paddingVertical: 16,
  },
  pv5: {
    paddingVertical: 20,
  },
  p1: {
    padding: 4,
  },
  p2: {
    padding: 8,
  },
  mh1: {
    marginHorizontal: 4,
  },
  mh2: {
    marginHorizontal: 8,
  },
  mv1: {
    marginVertical: 4,
  },
  mv2: {
    marginVertical: 8,
  },
  mv3: {
    marginVertical: 12,
  },
  avatarContainer: {
    position: "relative",
    marginRight: 15,
  },
  onlineDot: {
    position: "absolute",
    bottom: 14,
    right: 14,
    borderWidth: 1,
    borderColor: LIGHT,
  },
  card: {
    borderRadius: 16,
    padding: 16,
    width: SCREEN_WIDTH - 40, //Apply this style to login screen textinput and button
    margin: 4,
    marginVertical: 8,
    elevation: 2,
    backgroundColor: LIGHT,
  },
  taskLabel: {
    borderRadius: 15,
    paddingVertical: 3,
    paddingHorizontal: 10,
    marginRight: 5,
    backgroundColor: "#f87171",
  },
  taskFooterItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerText: {
    marginHorizontal: 4,
    color: DARK,
    fontSize: 14,
  },
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  dropdownText: {
    marginRight: 5,
    fontSize: 16,
  },
  iconCard: {
    backgroundColor: "#f9f9f9",
    borderRadius: 16,
    padding: 16,
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    height: 100,
    minWidth: 120,
  },
  iconCardIcon: {
    marginBottom: 10,
  },
  iconCardText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: DARK,
  },
  leaveCard: {
    position: "relative",
    padding: 16,
    borderRadius: 8,
    backgroundColor: LIGHT,
    marginBottom: 16,
    elevation: 2,
  },
  approvedStatusContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: SUCCESS_COLOR, // Color of the Approved badge
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  status: {
    color: LIGHT,
    fontWeight: "bold",
  },

  scrollContainer: {
    flex: 1, // Ensures ScrollView fills the available space
    backgroundColor: LIGHT, // Apply your background color
  },
  scrollViewContent: {
    paddingVertical: 20, // Add padding for the content
    paddingHorizontal: 16, // Adjust horizontal padding
    alignItems: "center", // Ensures content is centered
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around", // Distribute tab buttons evenly
    alignItems: "center",
    width: "100%", // Ensure the row takes up full width
    marginBottom: 16, // Add spacing below the tabs
  },
  tabContainer: {
    marginTop: 16,
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%", // Take full width of the screen
    paddingHorizontal: 16, // Padding for content inside
  },
  tabButtonActive: {
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: PRIMARY_COLOR,
    paddingVertical: 8, // Ensure there's some padding around the text
  },
  tabButton: {
    color: "#888",
    paddingVertical: 8, // Same padding as active tab
    paddingHorizontal: 16,
  },
});

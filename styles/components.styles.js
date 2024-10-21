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
    alignItems: "center",
    marginHorizontal: 8,
  },
  textLarge: {
    fontSize: 18,
  },
  imageContainer: {
    flex: 1,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    alignItems: "center",
    justifyContent: "space-between",
    height: 0.1 * SCREEN_HEIGHT,
    marginVertical: 0.02 * SCREEN_HEIGHT,
    marginVertical: 0.02 * SCREEN_HEIGHT,
  },
  imageContainerImg: {
    width: 0.6 * SCREEN_WIDTH,
    height: 0.6 * SCREEN_WIDTH,
    marginTop: 20,
    marginTop: 20,
  },
  inputContainer: {
    width: SCREEN_WIDTH - 20,
  },
  textInput: {
    marginVertical: 8,
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
    borderWidth: 1,
  },
  primaryButton: {
    marginVertical: 8,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
    alignItems: "center",
  },
  btnText: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontWeight: "bold",
  },
  rightLink: {
    color: PRIMARY_COLOR,
    textAlign: "right",
    textDecorationLine: "underline",
    marginVertical: 12,
    textDecorationLine: "underline",
    marginVertical: 12,
  },
  headerStyle: {
    width: SCREEN_WIDTH,
    borderBottomColor: "#6c6c6c",
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
    fontWeight: "800",
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
    padding: 18,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
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
    width: SCREEN_WIDTH / 3.5,
  },
  btn: {
    marginVertical: 8,
    padding: 8,

    alignItems: "center",
    justifyContent: "space-between",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 6,
    flexDirection: "row",
    flexDirection: "row",
  },
  bgDark: {
    backgroundColor: DARK,
    backgroundColor: DARK,
  },
  bgInfo: {
    backgroundColor: INFO_COLOR,
    backgroundColor: INFO_COLOR,
  },
  bgDanger: {
    backgroundColor: DANGER_COLOR,
    backgroundColor: DANGER_COLOR,
  },
  bgWarning: {
    backgroundColor: WARNING_COLOR,
    backgroundColor: WARNING_COLOR,
  },
  bgSuccess: {
    backgroundColor: SUCCESS_COLOR,
    backgroundColor: SUCCESS_COLOR,
  },
  bgPrimary: {
    backgroundColor: PRIMARY_COLOR,
    backgroundColor: PRIMARY_COLOR,
  },
  bgPrimaryTransParent: {
    backgroundColor: PRIMARY_COLOR_TRANSPARENT,
    backgroundColor: PRIMARY_COLOR_TRANSPARENT,
  },
  bgSecondary: {
    backgroundColor: SECONDARY_COLOR,
    backgroundColor: SECONDARY_COLOR,
  },
  round: {
    height: 64,
    width: 64,
    borderRadius: 32,
    justifyContent: "center",
    justifyContent: "center",
  },
  textLight: {
    color: LIGHT,
    color: LIGHT,
  },
  textDark: {
    color: DARK,
    color: DARK,
  },
  textDanger: {
    color: DANGER_COLOR,
    color: DANGER_COLOR,
  },
  textSecondary: {
    color: SECONDARY_COLOR,
    color: SECONDARY_COLOR,
  },
  border: {
    borderWidth: 1,
    borderWidth: 1,
  },
  fab: {
    elevation: 2,
    position: "absolute",
    position: "absolute",
    bottom: 8,
    right: 8,
    right: 8,
  },
  bottom: {
    position: "absolute",
    bottom: 2,
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
    paddingHorizontal: 4,
  },
  ph2: {
    paddingHorizontal: 8,
    paddingHorizontal: 8,
  },
  ph3: {
    paddingHorizontal: 12,
    paddingHorizontal: 12,
  },
  ph4: {
    paddingHorizontal: 16,
    paddingHorizontal: 16,
  },
  ph5: {
    paddingHorizontal: 20,
    paddingHorizontal: 20,
  },
  pv1: {
    paddingVertical: 4,
    paddingVertical: 4,
  },
  pv2: {
    paddingVertical: 8,
    paddingVertical: 8,
  },
  pv3: {
    paddingVertical: 12,
    paddingVertical: 12,
  },
  pv4: {
    paddingVertical: 16,
    paddingVertical: 16,
  },
  pv5: {
    paddingVertical: 20,
    paddingVertical: 20,
  },
  p1: {
    padding: 4,
    padding: 4,
  },
  p2: {
    padding: 8,
    padding: 8,
  },
  mh1: {
    marginHorizontal: 4,
    marginHorizontal: 4,
  },
  mh2: {
    marginHorizontal: 8,
    marginHorizontal: 8,
  },
  mv1: {
    marginVertical: 4,
    marginVertical: 4,
  },
  mv2: {
    marginVertical: 8,
    marginVertical: 8,
  },
  mv3: {
    marginVertical: 12,
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
  // NotificationScreen,
  time: {
    fontSize: 12,
    color: "#020409",
    alignSelf: "center",
  },

  description: {
    fontSize: 14,
    color: "#666",
    fontWeight: "normal",
  },
  // HolidayListScreen
  Section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightSection: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 20,
  },
  iconWrapper: {
    backgroundColor: "#2b87b0",
    padding: 8,
    borderRadius: 5,
    marginRight: 20,
  },
  dateText: {
    fontSize: 14,
    color: "#020409",
  },
  title: {
    fontSize: 16,
    // fontWeight: "bold",
    color: "#020409",
  },
  day: {
    fontSize: 14,
    color: "#020409",
  },
  // Profile
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTabButton: {
    borderBottomColor: "#2b87b0",
  },
  tabText: {
    fontSize: 16,
  },
  activeTabText: {
    color: "#2b87b0",
    fontWeight: "bold",
  },
  content: {
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    color: "#888",
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  documentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  documentName: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
    color: "#020409",
  },
  // LandingPage
  // card: {
  //   padding: 16,
  //   borderRadius: 10,
  //   marginBottom: 16,
  //   backgroundColor: "#ffffff",
  // },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  progressText: {
    fontSize: 28,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 14,
    color: "#666",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 2,
  },
  addIcon: {
    marginLeft: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  miniCard: {
    width: "32%",
    padding: 16,
    alignItems: "center",
    borderRadius: 10,
  },
  cardText: {
    marginTop: 8,
    fontSize: 14,
    textAlign: "center",
  },
  taskCard: {
    width: "48%",
    padding: 16,
    borderRadius: 10,
  },
  taskContent: {
    justifyContent: "space-between",
  },
  taskText: {
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 8,
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
    marginBottom: 8,
  },
  // DateSelector
  dateSelector: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  dateItem: {
    marginHorizontal: 10,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  activeDate: {
    backgroundColor: "#54B4D3",
  },
  dateNumber: {
    fontSize: 18,
    color: "#020409",
  },
  dateText: {
    fontSize: 14,
    color: "#020409",
  },
  //ProjectTimeline
  taskList: {
    paddingHorizontal: 20,
  },
  taskCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
  },
  taskHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  //   taskTitle: {
  //     fontSize: 18,
  //     color: "#2c3e50",
  //     fontWeight: "bold",
  //   },

  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  progressLabel: {
    fontSize: 14,
    color: "#7f8c8d",
    marginRight: 10,
  },
  progressPercent: {
    marginLeft: 10,
    fontSize: 12,
    color: "#7f8c8d",
  },
  participantsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  participantText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#3498db",
  },
  // Attendancescreen
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
    marginTop: 10,
  },
  profileName: {
    fontSize: 18,
  },
  notificationIcon: {
    marginLeft: "auto",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 16,
  },
  attendanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  attendanceCard: {
    width: "48%",
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
    alignItems: "center",
    marginVertical: 8,
  },
  attendanceText: {
    fontSize: 14,
    marginTop: 8,
    fontWeight: "bold",
  },
  attendanceTime: {
    fontSize: 16,
    marginTop: 4,
    fontWeight: "bold",
  },
  attendanceStatus: {
    fontSize: 12,
    color: "#6e6e6e",
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 8,
  },
  activityInfo: {
    marginLeft: 12,
  },
  activityText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  activityTime: {
    fontSize: 12,
    color: "#6e6e6e",
  },
  activityStatus: {
    marginLeft: "auto",
    fontSize: 12,
    color: "#6e6e6e",
  },
  //FormScreen
  label: {
    //fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: "#ffffff",
  },
  // btn: {
  //   marginTop: 20,
  //   padding: 10,
  //   borderRadius: 5,
  // },
  // bgPrimary: {
  //   backgroundColor: "#2b87b0",
  // },
  // btnText: {
  //   textAlign: "center",
  // },
  // textLarge: {
  //   fontSize: 18,
  // },
  // textLight: {
  //   color: "#ffffff",
  // },
  // LineItemscreen
  scrollView: {
    padding: 4,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#ffffff",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  itemDetails: {
    marginLeft: 10,
  },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  // input: {
  //   borderColor: "#ccc",
  //   borderWidth: 1,
  //   padding: 8,
  //   borderRadius: 5,
  //   width: 80,
  // },
  unit: {
    marginLeft: 5,
  },
  saveButton: {
    backgroundColor: "#ccc",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  //Requisitionscreen
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 10,
  },

  rightContainer: {
    alignItems: "flex-end",
  },

  actionButton: {
    marginTop: 10,
    padding: 6,
    backgroundColor: "#2b87b022",
    borderRadius: 5,
  },
  actionButtonText: {
    color: "#2b87b0",
  },
  //PurchaseOrderScreen
  addIconContainer: {
    // width: 30,
    //height: 30,
    borderRadius: 15,
    backgroundColor: "#ffffff",
    //justifyContent: "center",
    //alignItems: "center",
  },

  // card: {
  //   padding: 4,
  //   marginBottom: 8,
  //   backgroundColor: "#ffffff",
  //   width: "93%",
  //   alignSelf: "center",
  //   borderRadius: 8,
  //   elevation: 5,
  //   marginRight: 16,
  // },

  cardRow: {
    flexDirection: "row",
    padding: 4,
  },

  itemInfo: {
    flex: 3,
    // marginLeft: 6,
  },

  itemDetails: {
    alignItems: "Center",
    flex: 1,
  },

  amountCard: {
    padding: 10,
    paddingRight: 20,
    backgroundColor: "#fff",
    borderRadius: 6,
  },
  amountDetails: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 2,
    marginLeft: 10,
  },

  //SearchableDropdown
  dropdownContainer: {
    padding: 8,
  },
  itemStyle: {
    padding: 4,
    marginTop: 4,
    // backgroundColor: "#2b87b022",
    //borderColor: "#020409",
    // borderWidth: 1,
    //borderRadius: 5,
  },
  itemTextStyle: {
    //color: "#020409",
  },
  itemsContainerStyle: {
    maxHeight: 100,
  },
  textInput: {
    // backgroundColor: "#2b87b022",
    // padding: 4,
    // borderColor: "gray",
    //borderRadius: 5,
    width: 310,
    color: "#020409",
    //marginRight: 18,
    // marginBottom: 4,
    //paddingLeft: 6,
    //marginLeft: -16,
  },
  //leavecard
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

  checkoutButton: {
    backgroundColor: "#2b87b0",
    borderRadius: 100,
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
    elevation: 5,
  },
  checkoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  timerCard: {
    backgroundColor: "#1B2940",
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  timerContent: {
    alignItems: "center",
  },
  locationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  locationText: {
    color: "#fff",
    fontSize: 14,
  },
  timeText: {
    fontSize: 36,
    color: "#50e3c2",
    marginVertical: 10,
  },
  workHoursText: {
    color: "#fff",
    fontSize: 12,
  },
  workHoursTimeText: {
    fontSize: 16,
    color: "#50e3c2",
    marginTop: 5,
  },
  activityCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 20,
    elevation: 3,
  },
  activityHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  activityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  activityTitle: {
    fontSize: 16,
  },
  activityTime: {
    fontSize: 14,
    color: "#020409",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#020409",
    marginLeft: 5,
  },
  mapContainer: {
    alignItems: "center",
    marginTop: 16,
    overflow: "hidden",
    borderRadius: 30,
  },
  map: {
    width: "98%",
    height: 200,
    borderRadius: 20,
  },
  message: {
    marginTop: 4,
    fontSize: 14,
    textAlign: "center",
  },
});

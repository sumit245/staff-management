import {
  DANGER_COLOR,
  INFO_COLOR,
  SUCCESS_COLOR,
  WARNING_COLOR,
} from "../styles/constant";

export const tasks = [
  // ======
  {
    backgroundColor: "#FFCCCB",
    title: "Dashboard design for admin",
    description: "Create the admin dashboard for the app",
    status: "High",
    date: "14 Oct 2022",
    commentsCount: 5,
    attachmentsCount: 2,
    teamMembers: [
      { image: "https://randomuser.me/api/portraits/men/1.jpg" },
      { image: "https://randomuser.me/api/portraits/women/1.jpg" },
    ],
  },
  {
    backgroundColor: "#D1E7DD",
    title: "Konom web application",
    description: "Develop the Konom web application",
    status: "Low",
    date: "14 Nov 2022",
    commentsCount: 2,
    attachmentsCount: 1,
    teamMembers: [
      { image: "https://randomuser.me/api/portraits/men/2.jpg" },
      { image: "https://randomuser.me/api/portraits/women/2.jpg" },
    ],
  },
  // ======

  {
    id: 1,
    title: "Task 1",
    description: "This is task 1",
    count: 24,
    status: "In Progress",
    backgroundColor: INFO_COLOR,
  },
  {
    id: 2,
    title: "Task 2",
    description: "This is task 2",
    count: 25,
    status: "Done",
    backgroundColor: SUCCESS_COLOR,
  },
  {
    id: 3,
    title: "Task 3",
    description: "This is task 3",
    count: 20,
    status: "In Review",
    backgroundColor: WARNING_COLOR,
  },
  {
    id: 4,
    title: "Task 4",
    description: "This is task 4",
    count: 5,
    status: "Cancelled",
    backgroundColor: DANGER_COLOR,
  },

  // =============
];

export const leaveReasons = [
  {
    id: 1,
    label: "Select leave type",
    value: "",
    enabled: false
  },
  {
    id: 2,
    label: "Sick Leave",
    value: "sl",
    enabled: true
  },
  {
    id: 3,
    label: "Annual Leave",
    value: "al",
    enabled: true
  }
]

export const leaveTypes = [{
  id: 1,
  type: "Single Day",
  icon: "clock"
}, {
  id: 2,
  type: "Multiple Days",
  icon: "clock"
}, {
  id: 3,
  type: "Hourly",
  icon: "clock"
}]

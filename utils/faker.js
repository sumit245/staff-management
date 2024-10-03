import {
  DANGER_COLOR,
  INFO_COLOR,
  SUCCESS_COLOR,
  WARNING_COLOR,
} from "../styles/constant";

export const tasks = [
  {
    id: 5,
    backgroundColor: "#FFCCCB",
    title: "Dashboard design for admin",
    description: "Create the admin dashboard for the app",
    status: "High",
    count: 12,
    date: "14 Oct 2022",
    commentsCount: 5,
    attachmentsCount: 2,
    teamMembers: [
      { image: "https://randomuser.me/api/portraits/men/1.jpg" },
      { image: "https://randomuser.me/api/portraits/women/1.jpg" },
    ],
  },
  {
    id: 6,
    backgroundColor: "#D1E7DD",
    title: "Konom web application",
    description: "Develop the Konom web application",
    status: "Low",
    count: 1,
    date: "14 Nov 2022",
    commentsCount: 2,
    attachmentsCount: 1,
    teamMembers: [
      { image: "https://randomuser.me/api/portraits/men/2.jpg" },
      { image: "https://randomuser.me/api/portraits/women/2.jpg" },
    ],
  },
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
];

export const leaveReasons = [
  {
    id: 1,
    label: "Select leave type",
    value: "",
    enabled: false,
  },
  {
    id: 2,
    label: "Sick Leave",
    value: "sl",
    enabled: true,
  },
  {
    id: 3,
    label: "Annual Leave",
    value: "al",
    enabled: true,
  },
];

export const leaveTypes = [
  {
    id: 1,
    type: "Single Day",
    icon: "clock",
  },
  {
    id: 2,
    type: "Multiple Days",
    icon: "clock",
  },
  {
    id: 3,
    type: "Hourly",
    icon: "clock",
  },
];

export const dummyMessages = [
  {
    id: "1",
    message: "Look at how chocho sleep in my arms!",
    isSent: false,
    time: "16.46",
  },
  { id: "2", message: "Can I come over?", isSent: true, time: "16.46" },
  {
    id: "3",
    message: "Of course, let me know if you’re on your way",
    isSent: false,
    time: "16.50",
  },
  { id: "4", message: "K, I’m on my way", isSent: true, time: "16.50" },
  {
    id: "5",
    message: "Good morning, did you sleep well?",
    isSent: false,
    time: "09.13",
  },
];

export const items = [
  { label: "JavaScript", value: "javascript" },
  { label: "Python", value: "python" },
  { label: "Java", value: "java" },
];

export const dummyData = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
  { id: "4", title: "Item 4" },
  { id: "5", title: "Item 5" },
];

export const cardData = [
  {
    id: 1,
    title: "Dashboard design for admin",
    priority: "High",
    status: "On Track",
    date: "14 Oct 2022",
    links: 5,
    comments: 5,
    avatars: [
      "https://randomuser.me/api/portraits/men/1.jpg",
      "https://randomuser.me/api/portraits/women/2.jpg",
    ],
  },
  {
    id: 2,
    title: "Mobile app redesign",
    priority: "Medium",
    status: "On Hold",
    date: "18 Oct 2022",
    links: 3,
    comments: 2,
    avatars: [
      "https://randomuser.me/api/portraits/men/3.jpg",
      "https://randomuser.me/api/portraits/women/4.jpg",
    ],
  },
  {
    id: 3,
    title: "Website Revamp",
    priority: "High",
    status: "In Progress",
    date: "20 Oct 2022",
    links: 8,
    comments: 12,
    avatars: [
      "https://randomuser.me/api/portraits/men/5.jpg",
      "https://randomuser.me/api/portraits/women/6.jpg",
    ],
  },
  {
    id: 4,
    title: "Marketing Campaign",
    priority: "Low",
    status: "Completed",
    date: "22 Oct 2022",
    links: 2,
    comments: 0,
    avatars: [
      "https://randomuser.me/api/portraits/men/7.jpg",
      "https://randomuser.me/api/portraits/women/8.jpg",
    ],
  },
];

export const data = [
  { id: "1", title: "Attendance ", icon: "time-outline" },
  { id: "2", title: "Salary ", icon: "document-text-outline" },
  { id: "3", title: "Leave records", icon: "calendar-outline" },
  { id: "4", title: "Settings", icon: "settings-outline" },
  { id: "5", title: "Reports", icon: "bar-chart-outline" },
  { id: "6", title: "Bag", icon: "bag-outline" },
];

export const contactsData = [
  {
    id: "1",
    name: "Dhruv",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    status: "Online",
    online: true,
  },
  {
    id: "2",
    name: "Shrishti ",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    status: "Online",
    online: true,
  },
  {
    id: "3",
    name: "Anants",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    status: "Last seen 1 hours ago",
    online: false,
  },
  {
    id: "4",
    name: "Naisha Singh",
    avatar: "",
    status: "Online",
    online: true,
  },
  {
    id: "5",
    name: "Raki Devon",
    avatar: "",
    status: "Online",
    online: true,
  },
  {
    id: "6",
    name: "Shanaya Akira",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    status: "Last seen 3 minutes ago",
    online: false,
  },
  {
    id: "8",
    name: "Naisha Singh",
    avatar: "",
    status: "Online",
    online: true,
  },
  {
    id: "9",
    name: "Raki Devon",
    avatar: "",
    status: "Online",
    online: true,
  },
  {
    id: "7",
    name: "Shanaya Akira",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    status: "Last seen 3 minutes ago",
    online: false,
  },
];

export const menuItems = [
  { label: "Account", icon: "person-outline" },
  { label: "Chats", icon: "chatbubble-outline" },
  { label: "Appearance", icon: "sunny-outline" },
  { label: "Notification", icon: "notifications-outline" },
  { label: "Privacy", icon: "shield-checkmark-outline" },
  { label: "Data Usage", icon: "folder-outline" },
  { label: "Help", icon: "help-circle-outline" },
];

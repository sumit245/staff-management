import {
  DANGER_COLOR,
  INFO_COLOR,
  SUCCESS_COLOR,
  WARNING_COLOR,
} from "../styles/constant";

export const tasks = [
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

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
  { label: "My Purchase", icon: "cart-outline" },
  { label: "Appearance", icon: "sunny-outline" },
  { label: "Notification", icon: "notifications-outline" },
  { label: "Privacy", icon: "shield-checkmark-outline" },
  { label: "Data Usage", icon: "folder-outline" },
  { label: "Help", icon: "help-circle-outline" },
];
export const notifications = [
  {
    id: "1",
    title: "You updated your profile picture",
    description: "You just updated your profile picture.",
    icon: "account",
    time: "Just Now",
  },
  {
    id: "2",
    title: "Password Changed",
    description: "You’ve completed changing the password.",
    icon: "lock-reset",
    time: "2 oct,22:22 Pm",
  },
  {
    id: "3",
    title: "Subham Applied for Leave",
    description: "Please accept my leave request.",
    icon: "account-circle",
    time: "23 sept",
  },
  {
    id: "4",
    title: "System Update",
    description: "Please update to the newest app for a better experience.",
    icon: "cellphone-information",
    time: "25 sept,21:22 Pm",
  },
];
export const holidays = [
  {
    id: "1",
    title: "Republic Day",
    date: "January 26, 2024",
    day: "Thursday",
    icon: "calendar",
  },
  {
    id: "2",
    title: "Holi",
    date: "March 26, 2024",
    day: "Friday",
    icon: "calendar",
  },
  {
    id: "3",
    title: "Independence Day",
    date: "August 15, 2024",
    day: "Tuesday",
    icon: "calendar",
  },
  {
    id: "4",
    title: "Raksha Bandhan",
    date: "August 20, 2024",
    day: "Wednesday",
    icon: "calendar",
  },
  {
    id: "5",
    title: "Janmashtami",
    date: "September 26, 2024",
    day: "Thursday",
    icon: "calendar",
  },
  {
    id: "6",
    title: "Diwali",
    date: "November 12, 2024",
    day: "Sunday",
    icon: "calendar",
  },
];
export const personalData = {
  fullName: "Bittu Kumar",
  email: "bittu230@gmail.com",
  phone: "+91 7945671265",
  address: "Delhi India",
};
export const professionalData = {
  employeeId: "7879987",
  designation: " UI/UX Designer",
  companyEmail: "bittu89@example.com",
  employeeType: "Permanent",
  department: "Design",
  reportingManager: "Ashish Kumar",
  companyExperience: "2 Year 5 Months",
  officeTime: "10:00 am to 07:00 pm",
};
export const documentData = [
  { id: "1", name: "Offer Letter", icon: "file-document-outline" },
  { id: "2", name: "Appointment Letter", icon: "file-document-outline" },
  { id: "3", name: "Bond Agreement", icon: "file-document-outline" },
  { id: "4", name: "Appraisal Letter", icon: "file-document-outline" },
  { id: "5", name: "Salary Slip", icon: "file-document-outline" },
];

export const activities = [
  { id: "1", title: "Capital Icon", time: "9:15 AM - 11:00 AM" },
  { id: "2", title: "Baroda Bank", time: "11:00 AM - 11:30 AM" },
];
export const profileImages = [
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/women/1.jpg",
];
export const miniCards = [
  { id: 1, icon: "time-outline", text: "Est: 20h" },
  { id: 2, icon: "calendar-outline", text: "Due: 25 Apr" },
  { id: 3, icon: "checkmark-circle-outline", text: "Tasks: 1/3" },
];
export const taskCards = [
  { id: 1, text: "Design Concept", progress: 0.7, bgColor: "#54B4D3" },
  { id: 2, text: "Development Phase", progress: 0.4, bgColor: "#2b87b0" },
];
export const cardtasks = [
  {
    id: 1,
    title: "Design system",
    time: "09:00 - 10:00",
    progress: 0.6,
    participants: 2,
    avatars: [
      "https://randomuser.me/api/portraits/men/32.jpg",
      "https://randomuser.me/api/portraits/women/44.jpg",
    ],
  },
  {
    id: 2,
    title: "Create prototype",
    time: "10:00 - 11:00",
    progress: 0.3,
    participants: 4,
    avatars: [
      "https://randomuser.me/api/portraits/men/36.jpg",
      "https://randomuser.me/api/portraits/women/40.jpg",
      "https://randomuser.me/api/portraits/men/37.jpg",
      "https://randomuser.me/api/portraits/women/50.jpg",
    ],
  },
  {
    id: 3,
    title: "Dashboard design",
    time: "11:00 - 12:00",
    progress: 0.5,
    participants: 4,
    avatars: [
      "https://randomuser.me/api/portraits/men/38.jpg",
      "https://randomuser.me/api/portraits/women/51.jpg",
      "https://randomuser.me/api/portraits/men/39.jpg",
      "https://randomuser.me/api/portraits/women/53.jpg",
    ],
  },
  {
    id: 4,
    title: "Offspace project",
    time: "12:00 - 01:00",
    progress: 0.7,
    participants: 3,
    avatars: [
      "https://randomuser.me/api/portraits/men/40.jpg",
      "https://randomuser.me/api/portraits/women/55.jpg",
      "https://randomuser.me/api/portraits/men/41.jpg",
    ],
  },
];
export const attendanceData = [
  {
    icon: "login",
    title: "Check In",
    time: "10:20 am",
    status: "On Time",
  },
  {
    icon: "logout",
    title: "Check Out",
    time: "07:00 pm",
    status: "Go Home",
  },
  {
    icon: "clock-outline",
    title: "Break Time",
    time: "00:30 min",
    status: "Avg Time 30 min",
  },
  {
    icon: "calendar-check-outline",
    title: "Total Days",
    time: "28",
    status: "Working Days",
  },
];
export const activityData = [
  {
    title: "Check In",
    time: "10:00 am",
    status: "On Time",
    icon: "login",
  },
  {
    title: "Break In",
    time: "12:30 pm",
    status: "On Time",
    icon: "pause-circle-outline",
  },
  {
    title: "Check Out",
    time: "07:00 pm",
    status: "On Time",
    icon: "logout",
  },
];
export const lineItems = [
  {
    id: "AS1001",
    description: "HP Deskjet 1010 Color Inkjet Printer",
    location: "MT-seattle Manufacturing",
    subInventory: "Seattle Manufacturing",
  },
  {
    id: "AS1002",
    description: "Logitech B100 Optical Wired USB Mouse",
    location: "MT-seattle Manufacturing",
    subInventory: "Seattle Manufacturing",
  },
];
// requisitionsData.js

export const requisitions = [
  {
    id: "PR - 10050019",
    location: "PL01 - Texas Houston Plant",
    date: "08/19/2020",
    amount: "₹ 24.40 ",
    checked: false,
  },
  {
    id: "PR - 10050018",
    location: "PL01 - Texas Houston Plant",
    date: "08/19/2020",
    amount: "₹ 254.40 ",
    checked: false,
  },
  {
    id: "PR - 10050017",
    location: "PL01 - Texas Houston Plant",
    date: "08/19/2020",
    amount: "₹ 100.00 ",
    checked: false,
  },
  {
    id: "PR - 10050016",
    location: "PL01 - Texas Houston Plant",
    date: "08/19/2020",
    amount: "₹ 100.00 ",
    checked: false,
  },
];
// PurchaseOrderScreen
// export const itemsData = [
//   {
//     id: "AS1001",
//     name: "HP Deskjet 1010 Color Inkjet Printer",
//     price: 15.0,
//     quantity: 2,
//     total: 30.0,
//   },
//   {
//     id: "AS1002",
//     name: "Logitech B100 Optical Wired USB Mouse",
//     price: 8.0,
//     quantity: 6,
//     total: 48.0,
//   },
// ];
// export const amountDetailsData = [
//   { label: "Amount", value: 78.0 },
//   { label: "Tax", value: 2.0 },
//   { label: "Freight", value: 2.0 },
//   { label: "Currency", value: "IND" },
//   { label: "Grand Total", value: 82.0 },
// ];
export const originalItems = [
  { id: 1, name: "JavaScript" },
  { id: 2, name: "Java" },
  { id: 3, name: "Ruby" },
  { id: 4, name: "React Native" },
  { id: 5, name: "PHP" },
  { id: 6, name: "Python" },
  { id: 7, name: "Go" },
  { id: 8, name: "Swift" },
];

// export const itemsData = [
//   {
//     id: 1,
//     productCode: "ABC123",
//     name: "Product A",
//     price: 100,
//     quantity: 2,
//     total: 200,
//   },
//   {
//     id: 2,
//     productCode: "XYZ789",
//     name: "Product B",
//     price: 150,
//     quantity: 1,
//     total: 150,
//   },
// ];

export const itemsData = [
  { id: "P001", name: "Product A", price: 120.5, quantity: 2, total: 241.0 },
  { id: "P002", name: "Product B", price: 80.25, quantity: 3, total: 240.75 },
  { id: "P003", name: "Product C", price: 50.0, quantity: 1, total: 50.0 },
  { id: "P004", name: "Product D", price: 150.75, quantity: 5, total: 753.75 },
  { id: "P005", name: "Product E", price: 99.99, quantity: 4, total: 399.96 },
];

export const amountDetailsData = [
  { label: "Subtotal", value: 1000 },
  { label: "Tax", value: 100 },
  { label: "Total", value: 1100 },
];

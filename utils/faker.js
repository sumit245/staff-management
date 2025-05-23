import {
  DANGER_COLOR,
  INFO_COLOR,
  SUCCESS_COLOR,
  WARNING_COLOR,
} from "../styles/constant";

export const tasks = [
  {
    id: 6,
    backgroundColor: "#FFCCCB",
    status: "Open Projects",
    page: "openProjectScreen",
    count: "2",
  },
  {
    id: 5,
    backgroundColor: "#D1E7DD",
    status: "In Review",
    page: "inReviewScreen",
    count: 2,
    commentsCount: 2,
  },
  {
    id: 1,
    title: "Task 1",
    description: "This is task 1",
    count: 28,
    status: "In Progress",
    page: "taskList",
    backgroundColor: INFO_COLOR,
  },
  {
    id: 2,
    title: "Task 2",
    description: "This is task 2",
    count: 31,
    status: "Done",
    page: "taskCardScreen",
    backgroundColor: SUCCESS_COLOR,
  },
  {
    id: 3,
    title: "Task 3",
    description: "This is task 3",
    status: "Events",
    page: "holidayListScreen",
    count: 7,
    backgroundColor: WARNING_COLOR,
  },
  {
    id: 4,
    title: "Task 4",
    description: "This is task 4",
    status: "Sticky Note(Private)",
    page: "myNotesScreen",
    backgroundColor: DANGER_COLOR,
  },
  {
    id: 5,
    title: "Task 5",
    description: "This is task 5",
    count: 12,
    status: "Total Project",
    backgroundColor: INFO_COLOR,
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
    message: "Come in cabin",
    isSent: false,
    time: "12:53:42 pm",
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

export const menuItems = [
  {
    label: "Events",
    page: "holidayListScreen",
    icon: "calendar-outline",
    page: "holidayListScreen",
  },
  { label: "Inventory", icon: "cart-outline", page: "requisitions" },
  { label: "My Projects", page: "openProjectScreen", icon: "grid-outline" },
  { label: "My Tasks", icon: "grid-outline", page: "taskList" },
  { label: "Conveyance", icon: "disc-outline", page: "conveyance" },
  { label: "My Notes", page: "myNotesScreen", icon: "reader-outline" },
  { label: "Settings", icon: "cog-outline", page: "internalSetting" },
  {
    label: "Reports",
    page: "myNotesScreen",
    icon: "pie-chart-outline",
    page: "reportsScreen",
  },
];
export const internal = [
  {
    label: "Notification",
    page: "notificationScreen",
    icon: "notifications-outline",
  },
  { label: "Privacy", page: "privacyPolicy", icon: "shield-checkmark-outline" },
  { label: "Data Usage", page: "", icon: "folder-outline" },
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

export const requisitions = [
  {
    id: "1",
    materialName: "Wire",
    category: "Electrical",
    specification: "2.5mm",
    checked: false,
    status: "Pending",
  },
  {
    id: "2",
    materialName: "Bolt",
    category: "Fasteners",
    specification: "1.5mm",
    status: "Approved",
    checked: false,
  },
];

export const originalItems = [
  { id: 1, name: "Robotics with Arduino" },
  { id: 2, name: "Motor Control in Robotics" },
  { id: 3, name: "Radio-Controlled Robots" },
  { id: 4, name: "Robotics Programming Basics" },
  { id: 5, name: "Autonomous Robot Design" },
  { id: 6, name: "Obstacle Avoidance Robotics" },
  { id: 7, name: "Sumo Robotics Challenge" },
  { id: 8, name: "Robot Navigation with Sensors" },
];

export const itemsData = [
  { id: "P001", name: "Product A", price: 120.5, quantity: 2, total: 241.0 },
  { id: "P002", name: "Product B", price: 80.25, quantity: 3, total: 240.75 },
  // { id: "P003", name: "Product C", price: 50.0, quantity: 1, total: 50.0 },
  // { id: "P004", name: "Product D", price: 150.75, quantity: 5, total: 753.75 },
  // { id: "P005", name: "Product E", price: 99.99, quantity: 4, total: 399.96 },
];

export const amountDetailsData = [
  { label: "Subtotal", value: 1000 },
  { label: "Tax", value: 100 },
  { label: "Total", value: 1100 },
];

export const projects = [
  {
    id: 1,
    title: "Robatic cell",
    status: "toDo",
    progress: 0.5,
    due: "25 Apr",
    est: "20 h",
  },
  {
    id: 2,
    title: "Coffee Vending Machine",
    status: "toDo",
    progress: 0.7,
    due: "28 Apr",
    est: "15 h",
  },
  {
    id: 3,
    title: "Automatic soap Dispensor machine jig",
    status: "toDo",
    progress: 0.7,
    due: "28 Apr",
    est: "15 h",
  },
];

export const handleTaskProgress = (
  tasks,
  projectId,
  setTasks,
  setActiveStatus
) => {
  const updatedTasks = tasks.map((task) =>
    task.id === projectId ? { ...task, status: "inProgress" } : task
  );
  setTasks(updatedTasks);
  setActiveStatus("inProgress");
};

export const staff = {
  id: 1,
  first_name: "Rakesh",
  last_name: "Sharma",
  user_type: "staff",
  is_admin: 0,
  role_id: 0,
  email: "rakesh.sharma@gmail.com",
  password: "12345678",
  image: "https://randomuser.me/api/portraits/men/1.jpg",
  status: "active",
  job_title: "Technical Assistant",
  salary: "20000",
  salary_term: "Monthly",
  Date_of_hire: "2024-08-27",
  disable_login: 0,
  note: [],
  address: "123 gali, jhajjar, Haryana",
  alternative_address: "",
  phone: "9909230912",
  alternative_phone: "",
  dob: "",
  gender: "male",
  sticky_note: [],
  skype: "",
  language: "",
  last_online: "2024-10-03 05:41:49",
  file: "file-pdf",
  size: "",
  uploaded_by: "rakesh sharma",
  created_date: "",
};

export const projectDataList = [
  {
    id: 1,
    name: "Robotic Cell",
    startDate: "2024-10-08",
    deadline: "2024-10-22",
    description: "A project focused on automating the cell assembly process.",
    manager: "Anand Dhariwal",
    teamMembers: ["Anand Dhariwal", "John Doe"],
  },
  {
    id: 2,
    name: "AI Analytics",
    startDate: "2024-09-01",
    deadline: "2024-12-15",
    description: "Developing AI-powered analytics tools for data insights.",
    manager: "Priya Sen",
    teamMembers: ["Priya Sen", "Alex Lee", "Maria Garcia"],
  },
  {
    id: 3,
    name: "Mobile App Development",
    startDate: "2024-11-01",
    deadline: "2025-01-15",
    description: "Building a cross-platform mobile application.",
    manager: "Raj Patel",
    teamMembers: ["Raj Patel", "Samir Khan", "Lucy Brown"],
  },
  {
    id: 4,
    name: "Website Redesign",
    startDate: "2024-08-15",
    deadline: "2024-10-30",
    description: "Revamping the company website with a new design.",
    manager: "Rita Das",
    teamMembers: ["Rita Das", "Tom Wilson", "Emma Clark"],
  },
  {
    id: 5,
    name: "IoT Integration",
    startDate: "2024-07-10",
    deadline: "2024-11-20",
    description: "Integrating IoT devices for smart office automation.",
    manager: "John Smith",
    teamMembers: ["John Smith", "Mark Kim", "Alice Wong"],
  },
];

export const reviewsData = [
  {
    id: "1",
    title: "Product A",
    status: "In Review",
    startDate: "2024-01-01",
    endDate: "2024-01-10",
    details: "Detailed review information for Product.",
  },
  {
    id: "2",
    title: "Product B",
    status: "Approved",
    startDate: "2024-02-01",
    endDate: "2024-02-05",
    details: "This product was approved quickly.",
  },
  {
    id: "3",
    title: "Product C",
    status: "Rejected",
    startDate: "2024-03-01",
    endDate: "2024-03-15",
    details: "Issues found in Product C.",
  },
  {
    id: "4",
    title: "Product D",
    status: "In Review",
    startDate: "2024-04-01",
    endDate: "2024-04-10",
    details: "Pending review for Product D.",
  },
];

export const task = [
  {
    id: 1,
    title: "Design in Solidworks",
    status: "done",
    deadline: "2024-10-13",
    start: "2024-10-08",
    project: "Robotic Cell",
    assignedTo: "Rakesh Sharma",
  },
  {
    id: 2,
    title: "Purchase Parts",
    status: "critical",
    deadline: "2024-08-28",
    start: "2024-08-28",
    project: "coffee Vending Machine",
    assignedTo: "Rakesh Sharma",
  },
  {
    id: 3,
    title: "Purchase Parts",
    status: "blocker",
    deadline: "2024-08-28",
    start: "2024-08-28",
    project: "Automatic Soap Dispensor MAchine Jig",
    assignedTo: "Rakesh Sharma",
  },
];
export const PRIVACY_POLICY = "lorem ipsum sit dolor amet";

export const todotask = [
  {
    id: 4,
    title: "Manufacturing",
    status: "to-do",
    deadline: "2024-10-22",
    start: "2024-10-08",
    project: "Robotic Cell",
    assignedTo: "Anand Dhariwal",
  },
  {
    id: 5,
    title: "Material Procurement",
    status: "to-do",
    deadline: "2024-10-20",
    start: "2024-10-08",
    project: "Robotic Cell",
    assignedTo: "Rohit Gupta ",
  },
];

export const dummyWorkers = [
  { id: "1", name: "Rakesh Sharma", job: "plumber", status: "" },
];

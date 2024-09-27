import { DANGER_COLOR, INFO_COLOR, SUCCESS_COLOR, WARNING_COLOR } from "../styles/constant";

export const tasks = [
    {
        id: 1,
        title: 'Task 1',
        description: 'This is task 1',
        count: 24,
        status: 'In Progress',
        backgroundColor: INFO_COLOR
    },
    {
        id: 2,
        title: 'Task 2',
        description: 'This is task 2',
        count: 25,
        status: 'Done',
        backgroundColor: SUCCESS_COLOR

    },
    {
        id: 3,
        title: 'Task 3',
        description: 'This is task 3',
        count: 20,
        status: 'In Review',
        backgroundColor: WARNING_COLOR
    },
    {
        id: 4,
        title: 'Task 4',
        description: 'This is task 4',
        count: 5,
        status: 'Cancelled',
        backgroundColor: DANGER_COLOR
    }
]
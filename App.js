import ContainerList from "./components/ContainerList";
import { useState, useEffect } from "react";
import { dummyData } from "./utils/faker";
import ApplyLeaveForm from "./screens/ApplyLeaveForm";
import LoginScreen from "./screens/LoginScreen";


export default function App() {
    const [state, setState] = useState(false)
    return (
        <LoginScreen />
    )
}

import ContainerList from "./components/ContainerList";
import { useState, useEffect } from "react";
import { dummyData } from "./utils/faker";


export default function App() {
    const [state, setState] = useState(false)
    return (
        <ContainerList data={dummyData} />
    )
}

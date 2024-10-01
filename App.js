import ContainerComponent from './components/ContainerComponent'
import MyRadioButton from './components/input/MyRadioButton'
import { items } from './utils/faker'
import { useState } from 'react'

export default function App() {
    const [checked, setChecked] = useState("")

    return (
        <ContainerComponent>
            <MyRadioButton options={items} selectedValue={checked} onValueChange={setChecked} title="Select Subject" />
        </ContainerComponent>
    )
}

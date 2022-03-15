import { useState } from "react";
const UseForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChange = (event) => {
        const {name, checked} = event.target
        setForm({...form, [name]: checked})
    }
    const clearFields = () => {
        setForm(initialState)
    }
    return {form, onChange, clearFields}
}
export default UseForm
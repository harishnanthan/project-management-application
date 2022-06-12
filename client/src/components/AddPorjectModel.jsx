import { useState } from "react"
import AddProjectForm from "./AddProjectForm"

export default function AddPorjectModel() {
    const [show, setShow] = useState(false)
    const submitHandler = () => setShow(prev => !prev)
    return (
        <>
            <button type="submit" onClick={submitHandler}>
                Add Project
            </button>
            {show && <AddProjectForm />}
        </>
    )
}

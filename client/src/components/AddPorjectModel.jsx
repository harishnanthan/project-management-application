import { useState } from "react"
import AddProjectForm from "./AddProjectForm"
import AddBoxIcon from '@mui/icons-material/AddBox';
export default function AddPorjectModel() {
    const [show, setShow] = useState(false)
    const submitHandler = () => setShow(prev => !prev)
    return (
        <>
            <button className="button-4" type="submit" onClick={submitHandler}>
                <AddBoxIcon />
                Add Project
            </button>
            {show && <AddProjectForm clickHandler={submitHandler} />}
        </>
    )
}

import { useState } from "react"
import AddClientForm from "./AddClientForm"
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'

export default function AddClientModel() {

    const [show, setShow] = useState(false)

    const submitHandler = () => {
        setShow((val) => !val)
    }

    return (
        <>
            <button className="button-4" type="submit" onClick={submitHandler}>
                <PersonAddAlt1Icon />
                Add Client
            </button>
            {show && <AddClientForm clickHandler={submitHandler} />}
        </>
    )
}

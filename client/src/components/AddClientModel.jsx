import { useState } from "react"
import AddClientForm from "./AddClientForm"

export default function AddClientModel() {

    const [show, setShow] = useState(false)

    const submitHandler = () => {
        setShow((val) => !val)
    }

    return (
        <>
            <button type="submit" onClick={submitHandler}>
                Add Client
            </button>
            {show && <AddClientForm />}
        </>
    )
}

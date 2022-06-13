import { useMutation } from "@apollo/client"
import { useState } from "react"
import { ADD_CLIENT } from "../mutations/clientMutations"
import { GET_CLIENTS } from "../queries/clientQueries"
import "../styles/Form.scss"
import ClearIcon from '@mui/icons-material/Clear';

export default function AddClientForm({ clickHandler }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    })

    function changeHandler(e) {
        const { name, value } = e.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    const [addClient] = useMutation(ADD_CLIENT, {
        variables: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone
        },
        refetchQueries: [
            { query: GET_CLIENTS }
        ]
    })

    function submitHandler(e) {
        e.preventDefault();
        addClient()
        setFormData({
            name: "",
            email: "",
            phone: ""
        })
    }

    return (
        <div className="form-container">
            <div className="close">
                <ClearIcon onClick={clickHandler} />
            </div>
            <form method="post" onSubmit={submitHandler}>
                <input type="text" placeholder="Name" name="name" value={formData.name} onChange={changeHandler} required={true} />
                <input type="email" placeholder="Email" name="email" value={formData.email} onChange={changeHandler} required={true} />
                <input type="tel" placeholder="Phone" name="phone" value={formData.phone} onChange={changeHandler} required={true} />
                <button className="button-4">Submit</button>
            </form>
        </div>
    )
}

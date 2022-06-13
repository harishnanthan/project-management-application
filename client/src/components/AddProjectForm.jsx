import { useMutation, useQuery } from "@apollo/client"
import { useState } from "react"
import { ADD_PROJECT } from "../mutations/projectMutation"
import { GET_CLIENTS, GET_PROJECTS } from "../queries/clientQueries"
import ClearIcon from '@mui/icons-material/Clear';
import "../styles/Form.scss"

export default function AddProjectForm({ clickHandler }) {

    const options = [
        { label: "NOT STARTED", value: "NOT_STARTED" },
        { label: "IN PROGRESS", value: "IN_PROGRESS" },
        { label: "COMPLETED", value: "COMPLETED" }
    ]

    const [formData, setFormData] = useState({
        name: "",
        desc: "",
        status: "NOT_STARTED",
        clientId: ""
    })

    // get clients for select
    const { loading, error, data } = useQuery(GET_CLIENTS)
    console.log(data)
    function changeHandler(e) {
        const { name, value } = e.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    const [addProject] = useMutation(ADD_PROJECT, {
        variables: {
            name: formData.name,
            description: formData.desc,
            status: formData.status,
            clientId: formData.clientId
        },
        refetchQueries: [
            { query: GET_PROJECTS }
        ]
    })

    function submitHandler(e) {
        e.preventDefault();
        addProject()
        setFormData({
            name: "",
            desc: "",
            status: "NOT_STARTED",
            clientId: ""
        })
    }

    return (
        <div className="form-container">
            <div className="close">
                <ClearIcon onClick={clickHandler} />
            </div>
            <form method="post" onSubmit={submitHandler}>
                <input type="text" placeholder="Project Name" name="name" value={formData.name} onChange={changeHandler} required={true} />
                <textarea placeholder="Project Description" name="desc" value={formData.email} onChange={changeHandler} required={true} />
                <label> Status
                    <select name="status" value={formData.status} onChange={changeHandler}>
                        {
                            options.map((option, key) => (
                                <option key={key} value={option.value}>{option.value}</option>
                            ))
                        }
                    </select>
                </label>
                <label>
                    <select name="clientId" value={formData.clientId} onChange={changeHandler}>
                        <option value="">Select client</option>
                        {
                            data.clients.map((option, key) => (
                                <option key={key} value={option.id}>{option.name}</option>
                            ))
                        }
                    </select>
                </label>

                <button className="button-4">Submit</button>
            </form>
        </div>
    )
}

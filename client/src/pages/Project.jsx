import { Link } from "react-router-dom"
import { useMutation } from "@apollo/client"
import { DELETE_PROJECT } from "../mutations/projectMutation"
import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import { GET_PROJECT } from "../queries/clientQueries"
import { useNavigate } from "react-router-dom"

export default function Project() {
    const { id } = useParams()
    console.log(id)
    let navigate = useNavigate()
    const { loading, error, data } = useQuery(GET_PROJECT, {
        variables: { id }
    })

    const [removeProject] = useMutation(DELETE_PROJECT, {
        variables: { id },
        onCompleted: () => {
            navigate("/")
        }
    })



    if (loading) return <p>Loading</p>
    if (error) return <p>Somting went wrong</p>

    return (
        <>
            {!loading && !error && <>
                {data.project.name}
                {data.project.description}
                {data.project.status ? data.client.status : " IN PROCESS"}
                <h3>Client Details</h3>
                {data.project.client.name}
                {data.project.client.phone}
                {data.project.client.email}
            </>}

            <button value="delete" onClick={removeProject} >
                Delete
            </button>
            <Link to="/">Home</Link>
        </>
    )
}

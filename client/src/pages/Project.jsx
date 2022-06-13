import { Link } from "react-router-dom"
import { useMutation } from "@apollo/client"
import { DELETE_PROJECT } from "../mutations/projectMutation"
import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import { GET_PROJECT } from "../queries/clientQueries"
import { useNavigate } from "react-router-dom"
import "../styles/SingleProject.scss"

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
        <div className="single-project-container">
            <div className="center">
                {!loading && !error && <>
                    <div className="project-details">
                        <div className="project-heading">
                            <h3>Project Details</h3>
                            <div className="btns">
                                <button value="delete" onClick={removeProject} >
                                    Delete
                                </button>
                                <button value="edit">
                                    Edit
                                </button>
                            </div>

                        </div>
                        <div className="project-title">
                            <h4>{data.project.name}</h4>
                            {data.project.description}
                        </div>
                        <div className="project-status">
                            <p>Status</p>
                            {data.project.status ? data.client.status : " IN PROCESS"}
                        </div>
                    </div>
                    <div className="client-details">
                        <h3>Client Details</h3>
                        <div className="client-name">
                            <h4>
                                {data.project.client.name}
                            </h4>
                        </div>
                        <div className="client-phone">
                            Phone {data.project.client.phone}
                        </div>
                        <div className="client-email">
                            Email {data.project.client.email}
                        </div>
                    </div>
                </>}
                <Link to="/">Back</Link>
            </div>
        </div>

    )
}

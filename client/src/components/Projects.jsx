import { GET_PROJECTS } from "../queries/clientQueries"
import { useQuery } from "@apollo/client"
import ProjectsTable from "./ProjectsTable"
import "../styles/Project.scss"

export default function Projects() {
    const { loading, error, data } = useQuery(GET_PROJECTS)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Something went wrong</p>
    return (
        <>
            {!loading && !error && <ProjectsTable data={data} />}
        </>
    )
}

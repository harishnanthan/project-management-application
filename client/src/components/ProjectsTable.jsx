import ProjectBody from "./ProjectBody"

export default function ProjectsTable({ data }) {
    return (
        <>
            {data.projects.map( val => <ProjectBody key={val.id} data={val} />)}
        </>


    )
}

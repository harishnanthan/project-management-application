import ProjectBody from "./ProjectBody"

export default function ProjectsTable({ data }) {
    return (
        <>
            <div className="project-container">
                {data.projects.map(val => <ProjectBody key={val.id} data={val} />)}
            </div>
        </>

    )
}

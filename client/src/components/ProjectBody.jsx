
export default function ProjectBody({ data }) {

    return (
        <div className="project-card">
            <div className="project-title-container">
                <span className="project-title">{data.name}</span>
                <a href={`/projects/${data.id}`}>view</a>
            </div>
            <div className="project-status">
                <span>Status : {data.status ? data.status : "IN PROCESS"}</span>
            </div>
        </div>
    )
}

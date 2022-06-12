
export default function ProjectBody({ data }) {

    return (
        <div>
            <span>Name : {data.name}</span> <br />
            <span>Status : {data.status ? data.status : "IN PROCESS"}</span>
            <a href={`/projects/${data.id}`}>view</a>
        </div>
    )
}

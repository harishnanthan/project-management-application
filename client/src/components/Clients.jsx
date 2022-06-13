import { useQuery } from "@apollo/client"
import ClinetsTable from "./ClinetsTable"
import { GET_CLIENTS } from "../queries/clientQueries"
import "../styles/Clients.scss"

export default function Clients() {

    const { loading, error, data } = useQuery(GET_CLIENTS)
    // console.log(data)

    if (loading) return <p>Loading</p>
    if (error) return <p>Somthing went wrong</p>

    return (
        <div className="client-container">
            {!loading && !error && <ClinetsTable data={data} />}
        </div>
    )
}

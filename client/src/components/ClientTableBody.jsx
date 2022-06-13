import { useMutation } from "@apollo/client"
import { DELETE_CLIENT } from "../mutations/clientMutations"
import { GET_CLIENTS, GET_PROJECTS } from "../queries/clientQueries"
import DeleteIcon from '@mui/icons-material/Delete';

export default function ClientTableBody({ data }) {
    const [removeClient] = useMutation(DELETE_CLIENT, {
        variables: { id: data.id },
        refetchQueries: [
            { query: GET_CLIENTS },
            { query: GET_PROJECTS }
        ]
    })

    return (
        <tr key={data.id}>
            <td>{data.name}</td>
            <td>{data.phone}</td>
            <td>{data.email}</td>
            <td>
                <button value="delete" className="button-4" onClick={removeClient} >
                    <DeleteIcon />
                    Delete
                </button>
            </td>
        </tr>
    )
}

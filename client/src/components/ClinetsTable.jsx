
import ClientTableBody from "./ClientTableBody"

export default function ClinetsTable({ data }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.clients.map((val) => {
                    return <ClientTableBody key={val.id} data={val} />
                })}
            </tbody>
        </table>
    )
}

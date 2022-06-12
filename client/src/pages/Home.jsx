import Clients from "../components/Clients";
import AddClientModel from "../components/AddClientModel";
import Projects from "../components/Projects";
import AddPorjectModel from "../components/AddPorjectModel";

export default function Home() {
    return (
        <div>
            <AddClientModel />
            <Clients />
            <AddPorjectModel />
            <Projects />
        </div>
    )
}

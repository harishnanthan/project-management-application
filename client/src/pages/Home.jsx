import Clients from "../components/Clients";
import AddClientModel from "../components/AddClientModel";
import Projects from "../components/Projects";
import AddPorjectModel from "../components/AddPorjectModel";
import "../styles/Home.scss"

export default function Home() {
    return (
        <div>
            <div className="flex top-btn">
                <AddClientModel />
                <AddPorjectModel />
            </div>
            <Projects />
            <Clients />
        </div>
    )
}

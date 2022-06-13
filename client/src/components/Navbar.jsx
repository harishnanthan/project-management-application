import "../styles/Navbar.scss"
import Logo from "../images/logo.png"
export default function Navbar() {
    return (
        <nav>
            <div className="nav-bar">
                <img src={Logo} alt="logo-img" />
                Project Management Application
            </div>
        </nav>
    )
}

import Logo from "../images/logo.png"
export default function Navbar() {
    return (
        <nav>
            <div>
                <img src={Logo} alt="logo-img" />
                Project Management Application
            </div>
        </nav>
    )
}

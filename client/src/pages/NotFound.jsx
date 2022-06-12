import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <div>Sorry, This page doesn't exists</div>
            <Link to="/">Go back to home</Link>
        </>
    )
}

import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <>
            <nav className="flex justify-between items-center gap-2 p-4">
                <Link to="/">Home</Link> 
                <Link to="/about">About</Link> 
                <Link to="/contact">Contact</Link> 
                <Link to="/feature">Feature</Link>
            </nav>
        </>
    )
}

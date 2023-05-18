import { Link, Outlet } from "react-router-dom";

export default function HostLayout() {
    return (
        <>
            <nav className="host__navigation">
                <Link to="/host">Dashboard</Link>
                <Link to="/host/income">Income </Link>
                <Link to="/host/review">Reviews</Link>
            </nav>
            <Outlet />
        </>
    )
}
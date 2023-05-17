import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-container">
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Live adventurous life by joining the Tripper movement. Rent the perfect TruckLoad/Van/Camping Wagen to make your road trip perfect.</p>
            <Link to="vans">Find your van</Link>
        </div>
    )
}

export default Home;
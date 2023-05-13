import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Vans() {

    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("http://localhost:3010/vans")
            .then(res => res.json())
            .then(data => setVans(data))
    }, [])

    const vanElements = vans?.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <a className="cta-btn">{van.type}</a>
            </Link>
        </div>
    ))

    return (
        <div className="van-list-container">
            <h1>Explore our Van's.</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}

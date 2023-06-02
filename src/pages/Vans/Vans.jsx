import React, { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {

    const [searchParams, setSearchParams] = useSearchParams();

    const typeFilter = searchParams.get("type")
    console.log(typeFilter)

    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("http://localhost:3010/vans")
            .then(res => res.json())
            .then(data => setVans(data))
    }, [])

    const displayedVans = typeFilter ? (vans.filter(van => van.type === typeFilter)) : (vans)
    return (
        <div className="van-list-container">
            <h1>Explore our Van's.</h1>
            <div className="van-list">
                {displayedVans?.map(van => (
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
                ))}
            </div>
        </div>
    )
}

import { set } from "lodash";
import React, { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import styled from "styled-components";

export default function Vans() {

    const StyledButton = styled.button`
    margin: 1.4rem 20px;
    background-color: #bdbdbd;
    color: #636363;
    text-decoration: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-weight: bold;
    outline: none;
    border: none;
    font-size: 1.2rem;
    margin-top: 20px;
    &:hover {
        text-decoration-line: underline;
    }
    `;

    const [searchParams, setSearchParams] = useSearchParams();
    const [vans, setVans] = useState([])

    const typeFilter = searchParams.get("type")


    useEffect(() => {
        fetch("http://localhost:3010/vans")
            .then(res => res.json())
            .then(data => setVans(data))
    }, [])

    const displayedVans = typeFilter ? (vans.filter(van => van.type === typeFilter)) : (vans)
    return (
        <div className="van-list-container">
            <h1>Explore our Van's.</h1>
            <div className="filterBtn" style={{ marginTop: "2rem" }}>
                <StyledButton onClick={() => setSearchParams({ type: "Simple" })} className="simpleTag">Simple</StyledButton>
                <StyledButton onClick={() => setSearchParams({ type: "Rugged" })} className="ruggedTag">Rugged</StyledButton>
                <StyledButton onClick={() => setSearchParams({ type: "Luxury" })} className="luxuryTag">Luxury</StyledButton>
                <StyledButton onClick={() => setSearchParams({})} className="clear-filters">Clear Filter</StyledButton>
            </div>
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

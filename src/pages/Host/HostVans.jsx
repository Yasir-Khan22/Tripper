import React from "react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import styled from "styled-components"

const Link_SC = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    margin-bottom: 15px;
    padding-block: 35px;
    padding-left: 40px;
`
const StyledImage = styled.img`
    height: 120px;
    border-radius: 5px;
    margin-right: 17px;
`
const HeadingOne = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    margin-block: 25px;
    margin-inline: 25px;
`

export default function HostVans() {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("http://localhost:3010/vans")
            .then(res => res.json())
            .then(data => setVans(data))
    }, [])

    const hostVansEls = vans.map(van => (
        <Link
            to={`/host/vans/${van.id}`}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <Link_SC key={van.id}>
                <StyledImage src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.type}</h3>
                    <h2>{van.name}</h2>
                    <p>${van.price}/day</p>
                </div>
            </Link_SC>
        </Link>
    ))

    return (
        <section>
            <HeadingOne>Your listed vans</HeadingOne>
            <div className="host-vans-list">
                {
                    vans.length > 0 ? (
                        <section>
                            {hostVansEls}
                        </section>

                    ) : (
                        <h2>Loading...</h2>
                    )
                }
            </div>
        </section>
    )
}
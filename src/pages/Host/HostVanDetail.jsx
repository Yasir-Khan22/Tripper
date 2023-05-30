import { Container } from "postcss";
import { useState, useEffect } from "react";
import { NavLink, Link, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";

const SectionSC = styled.section`
padding-inline: 25px ;
padding-block: 25px;
`
const StyledImage = styled.img`
    width: 50%;
    border-radius: 5px;
    margin-right: 17px;
`
const StyledDiv = styled.div`
    padding-block: 100px;
    margin-inline: 20px;
`

const Section = styled.div`
   margin: 1rem 2rem;
    padding-block: 1rem;
    padding-inline: 20px;
    display: flex;
    justify-content: center;
`

const Navbar = styled.nav`
    display: flex;
    color: #000;
    gap: 5rem;
   margin-right: 10%;
   margin-left: 10%;

`

export default function HostVanDetail() {
    const { id } = useParams();
    const [currentVan, SetCurrentVan] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3010/vans/${id}`)
            .then(res => res.json())
            .then(data => SetCurrentVan(data))
    }, [])

    if (!currentVan) {
        return <h2>Loading...</h2>
    }

    return (

        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >
                &larr; <span>Back To all Vans</span></Link>
            <div>
                <Section>
                    <StyledImage src={currentVan.imageUrl} width={150} />
                    <StyledDiv>
                        <p>{currentVan.type}</p>
                        <h2>{currentVan.name}</h2>
                        <p>${currentVan.price}/Day</p>
                    </StyledDiv>
                </Section>

                <Navbar>
                    <NavLink className="navbar-link"
                        to="."
                    >Detail</NavLink>
                    <NavLink className="navbar-link"
                        to="pricing"
                    >Pricing</NavLink>
                    <NavLink className="navbar-link"
                        to="photos"
                    >Photos</NavLink>
                </Navbar>

                <Outlet context={{ currentVan: currentVan }} />
            </div>
        </section>
    )
}
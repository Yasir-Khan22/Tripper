import { useState, useEffect } from "react";
import { NavLink, Link, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";



const SectionSC = styled.section`
border: 2px solid black;
padding-inline: 25px ;
padding-block: 25px;
`

const StyledImage = styled.img`
    width: 150px;
    border-radius: 5px;
    margin-right: 17px;
`

const Container = styled.div`
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
`

const Section = styled.div`
    margin: 1rem 2rem;
    padding-block: 1rem;
    padding-inline: 20px;
`

const Navbar = styled.nav`
    display: flex;
    color: #000;
    gap: 5rem;
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
            <Container>
                <Section>
                    <StyledImage src={currentVan.imageUrl} width={150} />
                    <StyledDiv>
                        <p>{currentVan.type}</p>
                        <h2>{currentVan.name}</h2>
                        <p>${currentVan.price}</p>
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

                <Outlet />
            </Container>
        </section>
    )
}
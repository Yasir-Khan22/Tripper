import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
        <SectionSC>
            <StyledImage src={currentVan.imageUrl} width={150} />
            <h2>{currentVan.name}</h2>
            <p>{currentVan.price}</p>
            <p>{currentVan.type}</p>
        </SectionSC>
    )
}
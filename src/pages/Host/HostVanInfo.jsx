import styled from "styled-components"
import { useOutletContext } from "react-router-dom"

const StyledDiv = styled.div`
margin-left: 10%;
margin-right: 10%;
font-size: 1.2rem;
padding-block: 1.3rem;
`

const StyledH4 = styled.h4`
margin-block:1.2rem; 
 span {
    font-size: 16px;
    color: #898989;
    padding-inline: 2px;
 }
`
export default function HostVanInfo() {

    const { currentVan } = useOutletContext();
    return (
        <StyledDiv>
            <StyledH4>Name: <span>{currentVan.name}</span></StyledH4>
            <StyledH4>Category: <span>{currentVan.type}</span></StyledH4>
            <StyledH4>Description: <span>{currentVan.description}</span></StyledH4>
            <StyledH4>Visibility: <span>Public</span></StyledH4>
        </StyledDiv>
    )
}

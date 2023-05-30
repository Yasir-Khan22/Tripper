import styled from "styled-components"
import { useOutletContext } from "react-router-dom"

const StyledDiv = styled.div`
padding: 1rem 1.3rem;
img {
    max-width: 15%;
    margin-left:8% ;
    border-radius: 10px;
}
`
export default function HostVanPhotos() {
    const { currentVan } = useOutletContext();

    return (
        <StyledDiv>
            <img src={currentVan.imageUrl} alt="" />
        </StyledDiv>
    )
}
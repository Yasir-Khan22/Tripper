import styled from "styled-components"
import { useOutletContext } from "react-router-dom"

const StyledDiv = styled.div`
padding: 1rem 1.3rem;
p {
    margin-left: 8%;
}
`
export default function HostVanPricing() {
    const { currentVan } = useOutletContext();
    return (
        <StyledDiv>
            <p>${currentVan.price}/Day</p>
        </StyledDiv>
    )
}
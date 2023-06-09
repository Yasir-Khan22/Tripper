import { Link } from "react-router-dom";
import styled from "styled-components";


const StyledLink = styled(Link)`
    font-size: 1.3rem;
    display: inline-block;
    width: 90%;
    margin-left: 11px;
    margin-top: 30px;
    color: white;
    background: #312d2d;
    padding: 10px 20px;
    text-align: center;
    border-radius: 5px;
    text-decoration: none;
`

const StyledDiv = styled.div`
   display: grid;
    place-items: center;
    height: 100vh;
    justify-content: space-around;
    align-content: center;
`

export default function NotFound() {
    return (
        <StyledDiv>
            <h1>Sorry, the page you are looking for is not found.</h1>
            <StyledLink to="/">Back to Home</StyledLink>
        </StyledDiv>
    )
}
import React from "react";
import styled from "styled-components";


const Footer_SC = styled.footer`
 margin-top: 20px;
 background: #000;
 color: #c7c3c3;
 height: 50px;
 text-align: center;
 font-size: 2rem;
 display: flex;
 align-items: center;
 justify-content: center;

`
export default function Footer() {
    return (
        <Footer_SC><section>&#169; 2022 Tripper</section></Footer_SC>
    )
}
import React from "react";
import styled from "@emotion/styled";
import { Container } from "../Styles/Common";

const FooterContainer = styled.div`
    height: 50px;
    background-color: #004f2d;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Container />
        </FooterContainer>
    );
};

export default Footer;

import styled from "@emotion/styled";
import { Link } from "gatsby";
import React from "react";
import Background from "../images/background.jpg";
import { Container } from "../Styles/Common";

const TopHeader = styled.div`
    height: 30px;
    background-color: #004f2d;
`;

const BottomHeader = styled.div`
    ::before {
        content: "";
        background-image: url(${Background});
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.5;
        z-index: -1;
    }

    position: relative;
    height: 230px;
    padding-top: 20px;
`;

const BottomHeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

const MainHeading = styled.h1`
    color: #004f2d;
    font-style: italic;
    text-shadow: 3px 2px 4px rgba(0, 0, 0, 0.4);
`;

const Nav = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0px;
    overflow: hidden;
    padding: 10px 10px 0px;
`;

const NavItem = styled((props) => <Link {...props} />)`
    background: #f3f3f3;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: #004f2d;
    min-width: 100px;
    height: 50px;
    padding: 10px 5px;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 3px 1px 6px rgba(0, 0, 0, 0.4);
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);

    :first-child {
        margin-left: 0px;
    }

    :last-child {
        margin-right: 0px;
    }

    &.active {
        color: #f3f3f3;
        background-color: #004f2d;
        box-shadow: none;
        text-shadow: none;
    }
`;

const Header = (props) => {
    return (
        <div>
            <TopHeader>
                <Container></Container>
            </TopHeader>
            <BottomHeader>
                <Container>
                    <BottomHeaderContent>
                        <MainHeading>Haynes Greenhouse</MainHeading>
                        <Nav>
                            <NavItem to="/" activeClassName="active">
                                Home
                            </NavItem>
                            <NavItem to="/About" activeClassName="active">
                                About
                            </NavItem>
                            <NavItem to="/Shop" activeClassName="active">
                                Shop
                            </NavItem>
                        </Nav>
                    </BottomHeaderContent>
                </Container>
            </BottomHeader>
        </div>
    );
};

export default Header;

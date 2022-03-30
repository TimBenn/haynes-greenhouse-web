import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import Header from "./Header";

import "@fontsource/lora";
import "@fontsource/roboto";
import Footer from "./Footer";

const LayoutContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Container = styled.div`
    max-width: 960px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    display: flex;
    flex: 1;
`;

const Layout = (props) => {
    return (
        <LayoutContainer>
            <Global
                styles={css`
                    * {
                        box-sizing: border-box;
                        line-height: 1em;
                    }

                    body {
                        margin: 0;
                        padding: 0;
                        font-family: "Roboto";
                        background-color: #f3f3f3;
                    }

                    h1,
                    h2,
                    h3,
                    h4,
                    h5,
                    h6 {
                        font-family: "Lora";
                        margin: 0;
                    }

                    p {
                        margin: 0;
                    }

                    h1 {
                        font-size: 3.5em;
                    }
                `}
            />
            <Header />
            <Container>{props.children}</Container>
            <Footer />
        </LayoutContainer>
    );
};

export default Layout;

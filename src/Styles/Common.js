import styled from "@emotion/styled";

const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
};

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
};

export const Container = styled.div`
    width: 100%;
    max-width: 960px;
    height: 100%;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
`;

export const FlexContainer = styled.div`
    display: flex;
    flex: 1;
    margin-top: 50px;
`;

export const MainHeading = styled.h2`
    color: #004f2d;
`;

export const SecondaryHeading = styled.h3`
    color: #004f2d;
`;

export const SectionHeading = styled.p`
    margin-top: 10px;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    color: #004f2d;
`;

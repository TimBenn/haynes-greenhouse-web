import styled from "@emotion/styled";
import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import { FlexContainer, SectionHeading, device } from "../Styles/Common";

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    flex: 1;

    @media ${device.tablet} {
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
    }
`;

const Pricing = styled.div`
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 3;
    border: 4px solid #004f2d;
    border-radius: 10px;

    @media ${device.tablet} {
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 1;
        grid-row-end: 3;
    }
`;

const News = styled.div`
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 4;
    grid-row-end: 6;
    border: 4px solid #004f2d;
    border-radius: 10px;

    @media ${device.tablet} {
        grid-column-start: 3;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 4;
    }
`;

const IndexPage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`;
    const posts = data.allMarkdownRemark.nodes;

    return (
        <Layout location={location} title={siteTitle}>
            {/* <FlexContainer>
                <GridContainer>
                    <Pricing>
                        <SectionHeading>Pricing</SectionHeading>
                    </Pricing>
                    <News>
                        <SectionHeading>News</SectionHeading>
                    </News>
                </GridContainer>
            </FlexContainer> */}
            <ol style={{ listStyle: `none` }}>
                {posts.map((post) => {
                    const title = post.frontmatter.title || post.fields.slug;

                    return (
                        <li key={post.fields.slug}>
                            <article className="post-list-item" itemScope itemType="http://schema.org/Article">
                                <header>
                                    <h2>
                                        <Link to={post.fields.slug} itemProp="url">
                                            <span itemProp="headline">{title}</span>
                                        </Link>
                                    </h2>
                                    <small>{post.frontmatter.date}</small>
                                </header>
                                <section>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: post.frontmatter.description || post.excerpt,
                                        }}
                                        itemProp="description"
                                    />
                                </section>
                            </article>
                        </li>
                    );
                })}
            </ol>
        </Layout>
    );
};

export default IndexPage;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            nodes {
                fields {
                    slug
                }
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    description
                }
            }
        }
    }
`;

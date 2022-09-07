import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import MobileNav from "./MobileNav";
const Wrapper = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  padding: 6px 0px;
  top: 0px;
  position: sticky;
  z-index: 100;
  /* Font Options */
  font-size: ${(props) =>
    props.customtheme.fontLabel
      ? `${props.customtheme.fontLabel.mobile}px`
      : ""};
  color: ${(props) =>
    props.customtheme.fontLabel
      ? props.customtheme.fontLabel.fontColor.hex
      : ""};

  /* Background Color */
  background-color: ${(props) =>
    props.customtheme.backgroundColor
      ? `rgba(${props.customtheme.backgroundColor.rgb.r},${props.customtheme.backgroundColor.rgb.g},${props.customtheme.backgroundColor.rgb.b},${props.customtheme.backgroundColor.rgb.a})`
      : ""};
  /* Border */
  border: ${(props) =>
    props.customtheme.borderOptions
      ? `${props.customtheme.borderOptions.borderWeight}px solid ${props.customtheme.borderOptions.borderColor.hex}`
      : ""};

  /* Tablet */
  @media only screen and (min-width: 600px) {
    font-size: ${(props) =>
      props.customtheme.font
        ? `${props.customtheme.font.tablet}px`
        : ""};
  }
  /* Desktop */
  @media only screen and (min-width: 900px) {
    font-size: ${(props) =>
      props.customtheme.font
        ? `${props.customtheme.font.desktop}px`
        : ""};
  }
`;
const Logo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  justify-content: center;
  margin-right: auto;
  padding-left: 16px;
`;
const LinkWrapper = styled.div`
  display: none;
`;
const MobileLinkWrapper = styled.div`
  padding-left: 16px;
`;
function Header() {
  const data = useStaticQuery(graphql`
    {
      sanityHeaderMain {
        _rawTheme
        companyName
        links {
          text
          link
        }
        logo {
          alt
          picData {
            asset {
              gatsbyImageData
            }
          }
        }
        mobileIcon {
          alt
          picData {
            asset {
              gatsbyImageData
            }
          }
        }
        _rawMobileTheme
      }
    }
  `);
  return (
    <Wrapper
      customtheme={data.sanityHeaderMain ? data.sanityHeaderMain : ""}
    >
      <Logo>
        {data.sanityHeaderMain.logo ? (
          <GatsbyImage
            image={data.sanityHeaderMain.logo.picData.asset.gatsbyImageData}
            alt={data.sanityHeaderMain.logo.alt}
          />
        ) : null}
        <h3>{data.sanityHeaderMain.companyName}</h3>
      </Logo>
      <LinkWrapper>
        {data.sanityHeaderMain.links.map((link, i) => {
          return (
            <Link to={link.link} key={i}>
              {link.text}
            </Link>
          );
        })}
      </LinkWrapper>
      <MobileNav
        image={data.sanityHeaderMain.mobileIcon}
        theme={data.sanityHeaderMain._rawMobileTheme}
      >
        <MobileLinkWrapper>
          {data.sanityHeaderMain.links.map((link, i) => {
            return (
              <Link to={link.link} key={i}>
                {link.text}
              </Link>
            );
          })}
        </MobileLinkWrapper>
      </MobileNav>
    </Wrapper>
  );
}

export default Header;

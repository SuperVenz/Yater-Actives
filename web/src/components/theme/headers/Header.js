import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import MobileNav from "./MobileNav";
import { useState } from "react";

const Wrapper = styled.nav`
  position: sticky;
  top: 0px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  z-index: 55;
  padding-top: 10px;
  padding-bottom: 8px;
  /* Font Options */
  font-size: ${(props) =>
    props.customtheme.fontLabel
      ? `${props.customtheme.fontLabel.mobile}px`
      : "inherit"};
  color: ${(props) =>
    props.customtheme.fontLabel
      ? props.customtheme.fontLabel.fontColor.hex
      : "inherit"};

  /* Background Color */
  background-color: ${(props) =>
    props.customtheme.backgroundColor
      ? `rgba(${props.customtheme.backgroundColor.rgb.r},${props.customtheme.backgroundColor.rgb.g},${props.customtheme.backgroundColor.rgb.b},${props.customtheme.backgroundColor.rgb.a})`
      : "white"};
  /* Border */
  border-bottom: ${(props) =>
    props.customtheme.borderOptions
      ? `${props.customtheme.borderOptions.borderWeight}px solid ${props.customtheme.borderOptions.borderColor.hex}`
      : "inherit"};

  /* Tablet */
  @media only screen and (min-width: 600px) {
    font-size: ${(props) =>
      props.customtheme.font
        ? `${props.customtheme.font.tablet}px`
        : "inherit"};
  }
  /* Desktop */
  @media only screen and (min-width: 900px) {
    font-size: ${(props) =>
      props.customtheme.font
        ? `${props.customtheme.font.desktop}px`
        : "inherit"};
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
const MobileIconWrapper = styled.div``;

const MobileIcon = styled(GatsbyImage)`
  z-index: 49;
  margin-right: 16px;
`;

function Header() {
  const [active, setActive] = useState(false);

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
      customtheme={
        data.sanityHeaderMain._rawTheme.theme
          ? data.sanityHeaderMain._rawTheme.theme
          : "inherit"
      }
    >
      <Logo>
        {data.sanityHeaderMain.logo ? (
          <GatsbyImage
            image={data.sanityHeaderMain.logo.picData.asset.gatsbyImageData}
            alt={data.sanityHeaderMain.logo.alt}
          />
        ) : null}
        <h3>
          {data.sanityHeaderMain.companyName
            ? data.sanityHeaderMain.companyName
            : ""}
        </h3>
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
      <MobileIconWrapper
        onClick={() => setActive(!active)}
        onKeyDown={() => setActive(!active)}
      >
        <MobileIcon
          image={data.sanityHeaderMain.mobileIcon.picData.asset.gatsbyImageData}
          alt={data.sanityHeaderMain.mobileIcon.alt}
        />
      </MobileIconWrapper>
      <MobileNav theme={data.sanityHeaderMain._rawMobileTheme} active={active}>
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

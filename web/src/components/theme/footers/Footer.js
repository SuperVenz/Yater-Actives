import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Wrapper = styled.div`
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

  /*Hover Color */
  &:hover {
    background-color: ${(props) =>
      props.customtheme.hoverTheme
        ? props.customtheme.hoverTheme.hoverBackground.hex
        : ""};
    color: ${(props) =>
      props.customtheme.hoverTheme
        ? props.customtheme.hoverTheme.fontHover.hex
        : ""};
  }

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
const LogoImg = styled(GatsbyImage)`  
  width: 40%;
  height: auto;

  @media only screen and (min-width: 600px) {
    width: auto;
  height: auto;

 
     }
  `
const SocialMedia = styled.div`
display: flex;
justify-content: center;
padding-bottom: 60px;

`;
const Logo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  padding-top: 30px;
  padding-bottom: 25px;

`;
const SocialIcon = styled(GatsbyImage)`

`;
const PageDirectory = styled.div`
display: flex;
/* justify-content: center; */
font-size: 28px;
line-height: 2em;
border-bottom: 1px solid gold;
height: auto;
width: 95%;
margin-left: auto;
margin-right: auto;





`;
const LinkList = styled.div`
display: flex;
flex-flow: column nowrap;
/* align-items: center; */
font-size: 22px;
padding-left: 10px;
cursor: pointer;
a{
  text-decoration: none !important;
  color: black;

}



`;

const CompanyTag = styled.div`
text-align: center;
padding-bottom: 30px;

`
function Footer(props) {
  const data = useStaticQuery(graphql`
    {
      sanityFooterMain {
        _rawFootertheme
        pages {
          link
          text
        }
        resourceLinkTitle
        pageLinkTitle
        resources {
          text
          link
        }
        services {
          link
          text
        }
        servicesLinkTitle
      }
      sanitySiteInfo {
        logo {
          alt
          picData {
            asset {
              gatsbyImageData
            }
          }
        }
        socialMedia {
          icon {
            picData {
              asset {
                gatsbyImageData
              }
            }
          }
          label
          link
        }
        companyName
        companyEmail
        phoneNumber
      }
    }
  `);
  return (
    <Wrapper
      customtheme={data.sanityFooterMain ? data.sanityFooterMain : ""}
    >
    
      <PageDirectory>
        <LinkList>
          {/* <h3>{data.sanityFooterMain.pageLinkTitle}</h3> */}
          {data.sanityFooterMain.pages.map((pages, i) => {
            return (
              <Link to={pages.link} key={i}>
                {pages.text}
              </Link>
            );
          })}
        </LinkList>
        </PageDirectory>
        <PageDirectory>
        <LinkList>
          {/* <h3>{data.sanityFooterMain.servicesLinkTitle}</h3> */}
          {data.sanityFooterMain.services.map((pages, i) => {
            return (
              <Link to={pages.link} key={i}>
                {pages.text}
              </Link>
            );
          })}
        </LinkList>
        </PageDirectory>
        <PageDirectory>
        <LinkList>
          {/* <h3>{data.sanityFooterMain.resourceLinkTitle}</h3> */}
          {data.sanityFooterMain.resources.map((pages, i) => {
            return (
              <Link to={pages.link} key={i}>
                {pages.text}
              </Link>
            );
          })}
        </LinkList>
      </PageDirectory>
      <Logo>
      <LogoImg
           image={data.sanitySiteInfo.logo.picData.asset.gatsbyImageData}
            alt={data.sanitySiteInfo.logo.alt}

        />
        {console.log(data.sanitySiteInfo)}
        </Logo>
      <SocialMedia>
          {data.sanitySiteInfo.socialMedia.map((social, i) => {
            return (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon
                  image={social.icon.picData.asset.gatsbyImageData}
                  alt={social.icon.alt}
                />
              </a>
            );
          })}
        </SocialMedia>
        <CompanyTag> @YaterActive | All Rights Reserved | Made by</CompanyTag>
    </Wrapper>
  );
}

export default Footer;

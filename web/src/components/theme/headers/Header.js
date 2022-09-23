import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import MobileNav from './MobileNav'
import { useState } from 'react'

const Wrapper = styled.nav`
  position: sticky;
  top: 0px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  z-index: 55;
  padding-top: 10px;
  width: auto;
  padding-bottom: 8px;
  border-bottom: 1px solid gold;
  

  /* Font Options */
  font-size: ${props =>
    props.customtheme.fontLabel
      ? `${props.customtheme.fontLabel.mobile}px`
      : ''};
  color: ${props =>
    props.customtheme.fontLabel
      ? props.customtheme.fontLabel.fontColor.hex
      : ''};

  /* Background Color */
  background-color: ${props =>
    props.customtheme.backgroundColor
      ? `rgba(${props.customtheme.backgroundColor.rgb.r},${props.customtheme.backgroundColor.rgb.g},${props.customtheme.backgroundColor.rgb.b},${props.customtheme.backgroundColor.rgb.a})`
      : 'white'};
  /* Border */
  border-bottom: ${props =>
    props.customtheme.borderOptions
      ? `${props.customtheme.borderOptions.borderWeight}px solid ${props.customtheme.borderOptions.borderColor.hex}`
      : ''};

  /* Tablet */
  @media only screen and (min-width: 600px) {
    font-size: ${props =>
      props.customtheme.font ? `${props.customtheme.font.tablet}px` : ''};
  }
  /* Desktop */
  @media only screen and (min-width: 900px) {
    
    font-size: ${props =>
      props.customtheme.font ? `${props.customtheme.font.desktop}px` : ''};
  }
`
const Logo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  justify-content: center;
  margin-right: 14%;
  margin-left: auto;

  @media only screen and (min-width: 600px) {
    margin-right: auto;
    padding-right: auto;
  }

  @media only screen and (min-width: 900px) {
    margin-right: 0px;
  margin-left: 0px;  
  }
`
const LinkWrapper = styled.div`
  display: none;

  
    /* Font Options */
    font-size: ${props =>
      props.customtheme.fontLabel
        ? `${props.customtheme.fontLabel.mobile}px`
        : ''};
    color: ${props =>
      props.customtheme.fontLabel
        ? props.customtheme.fontLabel.fontColor.hex
        : ''};

    /* Tablet */
    @media only screen and (min-width: 600px) {
      font-size: ${props =>
        props.customtheme.font ? `${props.customtheme.font.tablet}px` : ''};
    }
    /* Desktop */
    @media only screen and (min-width: 900px) {
      display:flex;
      gap: 80px;
      margin-right: auto;
      margin-left: auto;
      padding-right: 60px;


      a {
        text-decoration: none;
        text-transform: uppercase;
        color: black;
        font-size: ${props =>
          props.customtheme.font ? `${props.customtheme.font.desktop}px` : ''};
      }
    }
  
`
const MobileLinkWrapper = styled.div`
  padding-left: 16px;
  display: flex;
  flex-flow: column nowrap;
`
const MobileIconWrapper = styled.div`
  @media only screen and (min-width: 600px) {
    padding-right: 26px;
  }
  @media only screen and (min-width: 900px) {
    display: none;
  }
`

const MobileIcon = styled(GatsbyImage)`
  z-index: 49;
  margin-right: 20px;
  height: 35px;
  width: 35px;
  @media only screen and (min-width: 900px) {
    margin-right: 0px;
  }
`

const LogoImg = styled(GatsbyImage)`
  width: 50%;
  height: auto;
`

const Links = styled(Link)`
  padding-top: 20px;
  text-decoration: none;

`

function Header () {
  const [active, setActive] = useState(false)

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
  `)

  return (
    <Wrapper
      customtheme={
        data.sanityHeaderMain._rawTheme ? data.sanityHeaderMain._rawTheme : ''
      }
    >
      <Logo>
        {data.sanityHeaderMain.logo ? (
          <LogoImg
            image={data.sanityHeaderMain.logo.picData.asset.gatsbyImageData}
            alt={data.sanityHeaderMain.logo.alt}
          />
        ) : null}
        <h3>{data.sanityHeaderMain.companyName}</h3>
      </Logo>
      <LinkWrapper
        customtheme={data.sanityHeaderMain._rawMobileTheme}
        active={active}
      >
        {data.sanityHeaderMain.links.map((link, i) => {
          return (
            <Link to={link.link} key={i}>
              {link.text}
            </Link>
          )
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
              <Links to={link.link} key={i}>
                {link.text}
              </Links>
            )
          })}
        </MobileLinkWrapper>
      </MobileNav>
    </Wrapper>
  )
}

export default Header

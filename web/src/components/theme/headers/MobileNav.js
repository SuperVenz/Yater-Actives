import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
const Wrapper = styled.div`
  margin-right: 16px;
  border-bottom: 1px solid #000;
  @media only screen and (min-width: 900px) {
    display: none;
  }
`;
const Active = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-top: 24px;
  position: fixed;
  left: 0px;
  z-index: 55;
  height: 100%;
  width: 100%;

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

  a {
    text-decoration: none;
    /* keep this */
    /* Font Options */
    font-size: ${(props) =>
      props.customtheme.font
        ? `${props.customtheme.font.mobile}px`
        : ""};
    color: ${(props) =>
      props.customtheme.font
        ? props.customtheme.font.fontColor.hex
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
  }
  display: ${(props) => (props.active ? "display" : "none")};
`;
const MobileIcon = styled(GatsbyImage)`
height: auto;
width: 20%;
display: flex;
margin-left: auto;
`

const MobileIconWrapper = styled.div``;
function MobileNav({ image, children, theme }) {
  const [active, setActive] = useState(false);
  return (
    <Wrapper>
      <MobileIconWrapper
        onClick={() => setActive(!active)}
        onKeyDown={() => setActive(!active)}
      >
        <MobileIcon
          image={image.picData.asset.gatsbyImageData}
          alt={image.alt}
        />
      </MobileIconWrapper>
      <Active customtheme={theme ? theme : ""} active={active}>
        {children}
      </Active>
    </Wrapper>
  );
}

export default MobileNav;

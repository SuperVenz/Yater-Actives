import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  position: relative;
  @media only screen and (min-width: 900px) {
    display: none;
  }
`;
const Active = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;
  padding-top: 24px;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
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

function MobileNav({ children, theme, active }) {
  return (
    <Wrapper>
      <Active customtheme={theme ? theme : ""} active={active}>
        {children}
      </Active>
    </Wrapper>
  );
}

export default MobileNav;

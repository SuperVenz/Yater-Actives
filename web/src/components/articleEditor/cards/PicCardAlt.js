import React from "react";
import styled from "styled-components";
import BasicEditor from "../../ultilitys/BasicEditor";
import PortablePic from "../../ultilitys/PortablePic";
import { useStaticQuery, graphql } from "gatsby";
const Wrapper = styled.div``;
const PicCardAltWrapper = styled.div`
  /* keep this */
  /* Font Options */
  font-size: ${(props) =>
    props.customtheme.font ? `${props.customtheme.font.mobile}px` : ""};
  color: ${(props) =>
    props.customtheme.font ? props.customtheme.font.fontColor.hex : ""};
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
const PicWrapper = styled.div``;
// Data is the array containing  the cards
function PicCardAlt({ data }) {
  const sanity = useStaticQuery(graphql`
    {
      sanityPicCardAltTheme {
        _rawTheme
      }
    }
  `);
  return (
    <Wrapper>
      {data.cardArray.map((picCardAlt, i) => {
        return (
          <PicCardAltWrapper
            key={i}
            customtheme={
              sanity.sanityPicCardAltTheme
                ? sanity.sanityPicCardAltTheme._rawTheme
                : ""
            }
          >
            <h3>{picCardAlt.title}</h3>
            <PicWrapper>
              <PortablePic data={picCardAlt.pic} />
            </PicWrapper>
            <BasicEditor data={picCardAlt.textEditor} />
          </PicCardAltWrapper>
        );
      })}
    </Wrapper>
  );
}

export default PicCardAlt;

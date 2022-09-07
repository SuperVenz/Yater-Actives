import React from "react";
import styled from "styled-components";
import BasicEditor from "../../ultilitys/BasicEditor";
import PortablePic from "../../ultilitys/PortablePic";
import { useStaticQuery, graphql } from "gatsby";

const Wrapper = styled.div``;
// Main Card Wrapper
const PicCardWrapper = styled.div`
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
// Wrapper for the image
const PicWrapper = styled.div``;
function PicCard({ data }) {
  const sanity = useStaticQuery(graphql`
    {
      sanityPicCardTheme {
        _rawTheme
      }
    }
  `);
  return (
    <Wrapper>
      {data.cardArray.map((picCard, i) => {
        return (
          <PicCardWrapper
            customtheme={
              sanity.sanityPicCardTheme
                ? sanity.sanityPicCardTheme._rawTheme
                : ""
            }
            key={i}
          >
            <h3>{picCard.title}</h3>
            <PicWrapper>
              <PortablePic data={picCard.pic} />
            </PicWrapper>
            <BasicEditor data={picCard.textEditor} />
          </PicCardWrapper>
        );
      })}
    </Wrapper>
  );
}

export default PicCard;

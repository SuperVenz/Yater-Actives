import React from "react";
import styled from "styled-components";
import BasicEditor from "../../ultilitys/BasicEditor";
import PortablePic from "../../ultilitys/PortablePic";
import { useStaticQuery, graphql } from "gatsby";
const Wrapper = styled.div``;
const ServiceCardWrapper = styled.div`
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
function ServiceCard({ data }) {
  const sanity = useStaticQuery(graphql`
    {
      sanityServiceCardTheme {
        _rawTheme
      }
    }
  `);
  return (
    <Wrapper>
      {data.cardArray.map((serviceCard, i) => {
        return (
          <ServiceCardWrapper
            customtheme={
              sanity.sanityServiceCardTheme
                ? sanity.sanityServiceCardTheme._rawTheme
                : ""
            }
            key={i}
          >
            <h3>{serviceCard.title}</h3>
            <PicWrapper>
              <PortablePic data={serviceCard.pic} />
            </PicWrapper>
            <BasicEditor data={serviceCard.textEditor} />
          </ServiceCardWrapper>
        );
      })}
    </Wrapper>
  );
}

export default ServiceCard;

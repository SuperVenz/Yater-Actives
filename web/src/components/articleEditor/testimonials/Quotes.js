import React from "react";
import styled from "styled-components";
import BasicEditor from "../../ultilitys/BasicEditor";
import PortablePic from "../../ultilitys/PortablePic";
import { useStaticQuery, graphql } from "gatsby";

const Wrapper = styled.div``;
const QuotesWrapper = styled.div`
  /* keep this */
  /* Font Options */
  font-size: ${(props) =>
    props.customtheme.font ? `${props.customtheme.font.mobile}px` : ""};
  color: ${(props) =>
    props.customtheme.font ? props.customtheme.font.fontColor.hex : ""};
  /* Background Color */
  background-color: ${(props) =>
    props.customtheme.backgroundColor
      ? props.customtheme.backgroundColor.hex
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
const PersonName = styled.h4``;
const PicWrapper = styled.div``;
function Quotes({ data }) {
  const sanity = useStaticQuery(graphql`
    {
      sanityQuotesTheme {
        _rawTheme
      }
    }
  `);
  return (
    <Wrapper>
      {data.testimonialArray.map((quotes, i) => {
        return (
          <QuotesWrapper
            customtheme={
              sanity.sanityQuotesTheme
                ? sanity.sanityQuotesTheme._rawTheme
                : ""
            }
            key={i}
          >
            <PicWrapper>
              <PortablePic data={quotes.profilePic} />
            </PicWrapper>
            <PersonName>{quotes.personsName}</PersonName>
            <BasicEditor data={quotes.textEditor} />
          </QuotesWrapper>
        );
      })}
    </Wrapper>
  );
}

export default Quotes;

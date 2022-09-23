import React from "react";
import styled from "styled-components";
import BasicEditor from "../../ultilitys/BasicEditor";
import PortablePic from "../../ultilitys/PortablePic";
import { useStaticQuery, graphql } from "gatsby";

const Wrapper = styled.div`
padding-bottom: 50px;
padding-top: 20px;


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
      : "transparent"};
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
const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  line-height: 3em;
 text-align: center;

  p{
    line-height: 1.5em;
  }
  @media only screen and (min-width: 600px) {
    flex-flow: column nowrap;
    flex-direction: ${(props) => (props.invert ? "column-reverse" : "column")};
  }
    /* Desktop */
    @media only screen and (min-width: 900px) {

  }
`;
const PicWrapper = styled.div`
`;
const PText = styled.div`
padding-top: 50px;
`;
function PicArticle({ data }) {
  const sanity = useStaticQuery(graphql`
    {
      sanityPicArticleTheme {
        _rawTheme
      }
    }
  `);
  return (
    <Wrapper
      customtheme={
        sanity.sanityPicArticleTheme
          ? sanity.sanityPicArticleTheme._rawTheme
          : ""
      }
    >
      {data.title ? <h2>{data.title}</h2> : null}
      <Content invert={data.invertAsset ? data.invertAsset : false}>
        <PicWrapper>
          <PortablePic data={data.pic} />
        </PicWrapper>
        <PText>
        <BasicEditor data={data.textEditor} />
        </PText>
      </Content>
    </Wrapper>
  );
}

export default PicArticle;

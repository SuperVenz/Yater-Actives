import React from "react";
import styled from "styled-components";
import BasicEditor from "../ultilitys/BasicEditor";
import ShopPic from "../ultilitys/ShopPic";
import { useStaticQuery, graphql } from "gatsby"


const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
// Main Card Wrapper
const ProductCardWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 80%;
  /* padding: 10px 5%; */
  margin-bottom: 20px;
  /* box-shadow: 0px 4px 4px 0px #00000040; */

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
const ProductWrapper = styled.div``;


const ProductCard = ({data, query}) => {
  const shopData = useStaticQuery(graphql`
  query ($ref_id: String) {
    sanityProduct(_id: {eq: $ref_id}) {
      _rawDefaultProductVariant
      _rawBody
      _rawSlug
    }
  }
`)
// const href_id =data.cardArray[0].product._ref;
  return (
    <Wrapper>

      {shopData.sanityProduct._rawDefaultProductVariant.images.map((picture,i) =>{
        <ShopPic data={picture}/>
      })}

       <BasicEditor data={shopData._rawBody} />
         </Wrapper>
  )
}

export default ProductCard
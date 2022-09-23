import React from "react";
import styled from "styled-components"; 
import {  graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Layout from "../components/LayoutTwo";
const LayoutWrapper = styled(Layout)``;
const ProductUIContainer = styled.div`

` 

const ProductWrapper = styled.div`
 display: grid;
  grid-template-columns: repeat(2, 1fr);
  
  @media only screen and (min-width: 600px) {
   
    grid-template-columns: repeat(4, 1fr);
    padding-left: 40px;
 }

`
const ProductCard = styled(Link)`
 
display: flex;
flex-flow: column nowrap;
align-items: center;
margin-top: 20px;
cursor: pointer;
text-decoration: none;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

@media only screen and (min-width: 900px) {
   
width: 70%;
}
`
const ProductCardContent = styled.div`

display: flex;
flex-flow: column nowrap;
align-items: center;
text-align: left;

`
const ImageCon = styled.div`
border: 1px solid #A9A9A9;
border-radius: 25px;
height: 250px;
width: 180px;
display: flex;
align-items: center;
justify-content: center;
transition: 0.4s cubic-bezier(0.85, 0.82, 0.165, 1);
&:hover{
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}


`;
const ProductImage = styled(GatsbyImage)`

width: 90%;
height: auto;


`
const ProductTitle = styled.p`
font-size: 14px;
font-weight: 600;
padding-top: 10px;
width: 90%;

`

const ProductPrice = styled.p`
font-size: 14px;
font-weight: 500;
padding-top: 10px;
width: 90%;

`

const PageTitle = styled.h1`
font-size: 28px;
padding-top: 20px;
padding-left: 10px;

`


export const query = graphql`
  query {
    allSanityProduct {
      nodes {
        slug {
        current
      }
        defaultProductVariant {
          title
          price
          images {
            alt
            picData {
              asset {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`

const Product = ({data}) => {
    
  return (
    <LayoutWrapper>
        <ProductUIContainer>
            <PageTitle>Products</PageTitle>
    <ProductWrapper>{data.allSanityProduct.nodes.map((node, i) =>{
        
            return(
          <ProductCard to={node.slug.current}>
            <ProductCardContent>
            {node.defaultProductVariant.images.map((payload)=>{
                     

                return(
                    <ImageCon>
                    <ProductImage
                    key={i}
                     image={payload.picData.asset.gatsbyImageData}
                     alt={payload.alt}
                    />
                    </ImageCon>
              ) 
            })}
           
           <ProductTitle>{node.defaultProductVariant.title}</ProductTitle>

           <ProductPrice>{'$'+node.defaultProductVariant.price}</ProductPrice>
           </ProductCardContent>

           </ProductCard>
                
            )

    })}</ProductWrapper>
    </ProductUIContainer>
    </LayoutWrapper>
  )
}

export default Product
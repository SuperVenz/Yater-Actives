import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";



const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;


`;


const Row = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: center;

@media only screen and (min-width: 600px) {
   
  padding-left: 100px;
}
@media only screen and (min-width: 900px) {
  display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 10px;
   margin-right: auto;
   margin-left: auto;
   padding-left: 0px;

}

`
// Wrapper for the image
const ProductWrapperOne = styled.div`



`;
const ProductWrapperTwo = styled.div`
 


`;
const ProductWrapperThree = styled.div`
 
 @media only screen and (min-width: 900px) {
  padding-top: 32px;

 
} 

`;
const ProductWrapperFour = styled.div`
 
 display: none;
 @media only screen and (min-width: 900px) {
display: block;
/* top: 0px; */
padding-bottom: 88px;


}

 

`;


const ProductPicOne = styled(GatsbyImage)`
/* height: auto; */
object-fit: fill;


`
const ProductPicTwo = styled(GatsbyImage)`
object-fit: fill;



`
const ProductPicThree = styled(GatsbyImage)`
height: auto;
object-fit: fill;

`
const ProductPicFour = styled(GatsbyImage)`
height: auto;
object-fit: fill;




`
const Content = styled.div`
display: flex;
flex-flow: column nowrap;
padding-bottom: 10px;
padding-top: 10px;

@media only screen and (min-width: 600px) {
  padding-bottom: 50px;
padding-top: 50px;

 
     }

     @media only screen and (min-width: 900px) {
padding-top: 20px;

}


`


const ProductName = styled.h4`

`;
const ProductPrice = styled.p`
padding-bottom: 40px;

@media only screen and (min-width: 900px) {
  padding-bottom: 10px;

}

`;


const Card = styled.div`

border: 1px solid #A9A9A9;
height: 270px;
display: flex;
align-items: center;
justify-content: center;
transition: 0.4s cubic-bezier(0.85, 0.82, 0.165, 1);
&:hover{
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}



@media only screen and (min-width: 600px) {
 overflow: hidden;
 height: auto;
 width: auto;

     }

     @media only screen and (min-width: 900px) {
height: 320px;
width: auto;

}

`

const ProductCard = ({data}) => {
  const ref_id =data.cardArray[1].product._ref.substring(1);

  const shopData = useStaticQuery(graphql`
  query GetProducts {
    productOne: sanityProduct {
      slug{
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
    productTwo: sanityProduct(defaultProductVariant: {title: {eq: "Nonslip Zinc Cream"}}) {
      slug{
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
    productThree: sanityProduct(defaultProductVariant: {title: {eq: "De-Puff Eye + HydraGlo Serum Combo"}}) {
      slug{
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
    imgOne: sanityImageAsset(
        url: {eq: "https://cdn.sanity.io/images/ox2k64am/production/626fa8149b457681d8a2f7e74900864e5368a598-593x593.webp"}
      ) {
        gatsbyImageData
        filesize
        filename
      }
  }
 
`
)
console.log(ref_id)


  return (
    <Wrapper>
   
      <Row>
      <ProductWrapperFour>
          <Card>
      
        <ProductPicFour
        image={shopData.imgOne.gatsbyImageData}
        alt={'photo'}

        />
             </Card>
            <Content>
<ProductName></ProductName>
<ProductPrice></ProductPrice>
</Content>
       </ProductWrapperFour>

          <ProductWrapperOne>
          <Card>
      {shopData.productOne.defaultProductVariant.images.map((picture) =>{
      return(
  <Link to={`/product/`+ shopData.productOne.slug.current}>
        <ProductPicOne
        image={picture.picData.asset.gatsbyImageData}
        alt={picture.alt}

        />
        </Link>
            )})}
             </Card>
            <Content>
<ProductName>{shopData.productOne.defaultProductVariant.title}</ProductName>
<ProductPrice>{'$'+shopData.productOne.defaultProductVariant.price}</ProductPrice>
</Content>
       </ProductWrapperOne>
      
       
       <ProductWrapperTwo>
       <Card>
      {shopData.productTwo.defaultProductVariant.images.map((picture) =>{
      return(
        <Link to={`/product/`+ shopData.productTwo.slug.current}>

        <ProductPicTwo
        image={picture.picData.asset.gatsbyImageData}
        alt={picture.alt}

        />
        </Link>
            )})}
             </Card>
      
            <Content>
<ProductName>{shopData.productTwo.defaultProductVariant.title}</ProductName>
<ProductPrice>{'$'+shopData.productTwo.defaultProductVariant.price}</ProductPrice>
</Content>
       </ProductWrapperTwo>
      
      
       <ProductWrapperThree>
       <Card>
      {shopData.productThree.defaultProductVariant.images.map((picture) =>{
      return(
        <Link to={`/product/`+ shopData.productThree.slug.current}>

        <ProductPicThree
        key={[0]}
        image={picture.picData.asset.gatsbyImageData}
        alt={picture.alt}

        />
        </Link>
            )})}
               </Card>
            <Content>
<ProductName>{shopData.productThree.defaultProductVariant.title}</ProductName>
<ProductPrice>{'$'+shopData.productThree.defaultProductVariant.price}</ProductPrice>
</Content>
       </ProductWrapperThree>
    
   </Row>
         </Wrapper>
  )
}

export default ProductCard
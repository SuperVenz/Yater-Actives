import React from "react";
import { useState } from "react";
import styled from "styled-components"; 
import {  graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Layout from "../components/LayoutTwo";
// import getStripe from "../components/ultilitys/stripe";
import {change2} from '../components/ultilitys/keyframes'
import { loadStripe } from "@stripe/stripe-js"

export const IMAGE_CHANGE_ANIM_DURATION = 250;


export const breakpoints = {
  mobile: 400,
  phablet: 550,
  tablet: 750,
  desktop: 1000,
  hd: 1300
};

export const spacing = {
  '3xs': 2,
  '2xs': 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 40,
  '3xl': 48
};

export const radius = {
  default: 2,
  large: 4
};

export const colors = {
  brandDarker: '#221133',
  brandDark: '#442266',
  brand: '#663399',
  brandBright: '#e0d6eb',
  brandLight: '#f5f3f7',
  brandLighter: '#fbfafc',
  lightest: '#ffffff',
  darkest: '#4d4058',
  text: '#333333',
  textMild: '#555555',
  textLight: '#7e718a',
  textLighter: '#aaaaaa',
  lilac: `#8c65b3`,
  accent: `#ffb238`,
  error: `#ec1818`,
  lemon: `#ffdf37`
};

export const PrimaryButton = styled.button`
  background: ${colors.brand};
  color: ${colors.lightest};
  display: flex;
  font-size: 1.25rem;
  justify-content: center;
  @media (hover: hover) {
    &:hover {
      background: ${colors.brandDark};
    }
  }
`;


const InfoLinks = styled(`div`)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: ${spacing.lg}px;
  width: 100%;
`;

export const Input = styled(`input`)`
  background-color: ${colors.lightest};
  border: 1px solid ${colors.brandBright};
  border-radius: ${radius.default}px;
  color: ${colors.text};
  display: block;
  font-size: 1.1rem;
  padding: ${spacing.sm}px ${spacing.md}px;
  width: 100%;
  :focus {
    box-shadow: 0 0 0 3px ${colors.accent};
    outline: 0;
    transition: box-shadow 0.15s ease-in-out;
  }
`;

export const Select = styled(Input.withComponent('select'))`
  appearance: none;
  /* stylelint-disable */

  /* stylelint-enable */
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 8px 10px;
  padding-right: ${spacing.xl}px !important;
`;

export const Fieldset = styled(`fieldset`)`
  border: none;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0;
  padding: 0;
`;

export const Label = styled(`label`)`
  color: ${colors.textLight};
  display: flex;
  font-size: 1rem;
  padding: ${spacing.xs}px;
`;

export const Submit = styled(PrimaryButton)`
  font-size: 1.25rem;
  margin-top: ${spacing.md}px;
  width: 100%;
`;


const QtyFieldset = styled(Fieldset)`
  flex-basis: 65px;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: ${spacing.md}px;
  ${Label} {
    text-align: center;
  }
  ${Input} {
    padding: ${spacing.sm}px ${spacing.sm}px;
    text-align: center;
  }
`;

const Form = styled(`form`)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${spacing['2xl']}px ${spacing.md}px 0;
  @media (min-width: ${breakpoints.tablet}px) {
    padding: ${spacing['2xl']}px ${spacing.xl}px 0;
  }
  @media (min-width: ${breakpoints.desktop}px) {
    justify-content: flex-start;
  }
`;

const LayoutWrapper = styled(Layout)`

`;


const Info = styled.div`


margin-left: auto;
margin-right: auto;
position: relative;
width: 90%;
padding: 0px !important;


`;

const Container = styled.div`
width: 100%;
position: relative;
overflow:hidden;
background-color: white;
padding-bottom: 5vh;



`;



const Wrapper = styled.div`
padding-top: 20px;

@media only screen and (min-width: 600px) {
  margin-right: 40px;

}
@media only screen and (min-width: 900px) {
  display: flex;
  flex-direction: row;
  width: 80%;

}

`

const Con = styled.div`
padding-top: 20px;


@media only screen and (min-width: 900px) {
  display: flex;
  flex-direction: column;

}

`
const Con2 = styled.div`


@media only screen and (min-width: 900px) {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
}

`
const Title= styled.h2`
font-size: 20px;
padding-left: 18px;
z-index: 2;
text-align: left;
margin: 0;
padding-bottom: 10px;
font-weight: 500;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

@media only screen and (min-width: 600px) {
  padding-left: 38px;

}

`; 

const Price= styled.h2`
font-size: 18px;
padding-left: 18px;
z-index: 2;
text-align: left;
margin: 0;
padding-bottom: 40px;
font-weight: 300;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

@media only screen and (min-width: 600px) {
  padding-left: 38px;

}

`; 
 
const ImgContainer = styled(`a`)`
/* width: 90%;
margin-left: auto;
margin-right: auto;
display: block;
padding: 0px !important;

@media only screen and (min-width: 900px) {
  width: 50%;

} */
display: block;
  position: relative;

  &.change {
    animation: ${change2} ${IMAGE_CHANGE_ANIM_DURATION}ms ease-out forwards;
  }
  @media (min-width: ${breakpoints.desktop}px) {
    cursor: zoom-in;
  }
`;

const Image = styled.div`
height: 75%;
z-index: 2;
`;

const Desc = styled.p`
 
 font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

margin: 0px;
font-size: 16px;
letter-spacing: .5px;
line-height: 1.5em;
margin-left: auto;
margin-right: auto;
text-align: left;

@media only screen and (min-width: 900px) {
text-align: center;
width: 100%;
margin-right: 150px;
}

`
;

const BtnCon = styled.div`
padding-top: 30px;
padding-bottom: 50px;

`
;


const Button = styled.button`
background: #000000 ;
white-space: nowrap;
padding: 10px 32px;
color: #fff;
font-size: 16px;
outline: none;
border: none;
/* min-width: 100px; */
cursor: pointer;
text-decoration: none;
transition: 0.3s !important;
border-radius: 30px ;
width: 100%;
height: 60px;

&:hover {
    background: #d7cd0c;
    transform: translateY(-2px);
    
  
  
}

@media only screen and (min-width: 900px) {
  width: 50%;
  margin-left: auto;
  margin-right: auto;

}

`

export const query = graphql`
  query ProductQuery ($current: String!){
    sanityProduct(slug: {current: {eq: $current}}) {
      id
      title
      slug {
        current
      }
      defaultProductVariant {
        unit_amount
        images {
          picData {
            asset {
              gatsbyImageData
            }
          }
          alt
        }
        price
      }
      body {
        textContent {
          children {
            text
          }
        }
      }
      variants {
        images {
          picData {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)
  }
  return stripePromise
}

const Product = ({data}) => {


  const [loading, setLoading] = useState(false);
  const [productName, setProductName] =useState();
  const [message, setMessage] = useState("");

  const [price, setPrice] =useState();
  const[quantity, setQuantity]=useState();


  React.useEffect(async() => {
 setPrice( data.sanityProduct.defaultProductVariant.price)
 setProductName(data.sanityProduct.title)
 setQuantity(data.sanityProduct.defaultProductVariant.unit_amount)
 const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
 
  }, [])

  // const redirectToCheckout = async event => {
  //   event.preventDefault()
  //   setLoading(true)

  //   const stripe = await getStripe()

  //   const actualPrice = price * quantity;

  //   const checkoutOptions ={
  //       mode: "payment",
  //         lineItems: [{ actualPrice, quantity, productName }],
  //         successUrl: `http://localhost:8000/`,
  //         cancelUrl: `http://localhost:8000/`,
  //     }
  //   const { error } = await stripe.redirectToCheckout(checkoutOptions)

  //   if (error) {
  //     console.warn("Error:", error)
  //     setLoading(false)
  //   }

  
  // }


  //   const actualPrice = price * quantity;
  // const checkoutOptions ={
  //   mode: "payment",
  //     lineItems: [{ actualPrice, quantity, productName }],
  //     successUrl: `http://localhost:8000/`,
  //     cancelUrl: `http://localhost:8000/`,
  // }

  // const redirectToCheckout = async () => {
  //   const stripe = await getStripe()
  //   const results = await stripe.redirectToCheckout(checkoutOptions)
  // }


  const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)

const ServerCheckout = () => {
  const redirectToCheckout = async () => {
    const stripe = await stripePromise
    const response = await fetch(`/.netlify/functions/checkout`) // Call Function
    const data = await response.json(); // Get Data

    await stripe.redirectToCheckout({
      sessionId: data.id, // Id sent by server to connect to checkout
    })
  }}

  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );

  return  message ? (
    <Message message={message} />
  ) : (
    <LayoutWrapper>
      <Form onSubmit={ ServerCheckout}>
    <Container>
 <Wrapper>
  <Con>
    <Title> {productName}</Title>
    <Price> {'$ '+ price}</Price>

 <ImgContainer>
     {data.sanityProduct.defaultProductVariant.images.map((payload,i)=> {
        return(
   
      <Image key={i}>
        
              <GatsbyImage 
              key={i}
              image={payload.picData.asset.gatsbyImageData}
              imgStyle={{ objectFit: 'scale-down'}}
              />
          
              </Image>              
     
                      )})}
               </ImgContainer>  
                    
               </Con>
               <Con2>
               
  <Info>    
 



       {data.sanityProduct.body.textContent.map((payload,i)=> {
        return(
    
      <Desc key={i}>
        
        {payload.children.map((payload,i)=> {
        return(
    
      <Desc key={i}>
        
        {payload.text}
          
              </Desc>
            
                      )})}
          
              </Desc>
            
                      )})}
                        <QtyFieldset>
              <Label htmlFor="quantity">Qty.</Label>
              <Input
                type="number"
                inputmode="numeric"
                id="quantity"
                name="quantity"
                min="1"
                step="1"
                 value={quantity}
                 onChange={event => setQuantity(event.target.value)}

              />
            </QtyFieldset>
                      <BtnCon>
      <Button onClick={ServerCheckout}> Purchase</Button>
      </BtnCon>
   
      </Info>
      </Con2>
      </Wrapper>
    </Container>
    <InfoLinks>
              <Link to="/product-details?fromProduct#materials-fit">
                <span>Materials &amp; Fit</span>
              </Link>
              &nbsp; • &nbsp;
              <Link to="/product-details?fromProduct#care-instructions">
                <span>Care instructions</span>
              </Link>
            </InfoLinks>
    </Form>
    </LayoutWrapper>
  )
}

export default Product
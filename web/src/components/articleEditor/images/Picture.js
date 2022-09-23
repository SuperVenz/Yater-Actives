import React from "react";
import styled from "styled-components";
import PortablePic from "../../ultilitys/PortablePic";
const Wrapper = styled.div`
padding-bottom: 20px;
@media only screen and (min-width: 600px) {
  padding-bottom: 50px;

  padding-left: 100px;

 
     }
     @media only screen and (min-width: 900px) {
margin-left: auto;
margin-right: auto;
display: none;

/* img{
  width: 480px;
  height: auto;
  object-fit: contain;
} */
 
     }
`;

function Picture({ data }) {
  return (
    <Wrapper>
      <PortablePic data={data.pic} />
    </Wrapper>
  );
}

export default Picture;

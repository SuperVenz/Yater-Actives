import React from "react";
import styled from "styled-components";
import BasicEditor from "../../ultilitys/BasicEditor";
import BackgroundWrapper from "../../ultilitys/BackgroundWrapper";
const Con = styled.div`
overflow: contain;
@media only screen and (min-width: 600px) {
  padding-left: 62px;

 

    }
`
const Container = styled.div`
width: 360px;
height: 300px;


@media only screen and (min-width: 600px) {
  padding-left: 62px;

   width: 768px;
   height: 360px;


    }
  /* Desktop */
  @media only screen and (min-width: 900px) {
    padding-right: 62px;

    width: 1280px;
   height: 360px;
  }
`

const Wrapper = styled(BackgroundWrapper)`

/* Border */
  border: ${(props) =>
    props.customtheme.borderOptions
      ? `${props.customtheme.borderOptions.borderWeight}px solid ${props.customtheme.borderOptions.borderColor.hex}`
      : ""};
`;

const BtnCon = styled.div`
display: flex;
justify-content: center;
padding-bottom: 50px;
`

function HeroMain({ data }) {
  return (
    <Con>
    <Wrapper
      customtheme={data.theme ? data.theme : ""}
      data={data.backgroundPic}
    ><Container> </Container>
    <BtnCon>
      <BasicEditor data={data.textEditor ? data.textEditor : ""}
       />
   </BtnCon>     

    </Wrapper>
    </Con>
  );
}

export default HeroMain;

import React from "react";
import styled from "styled-components";
import BackgroundWrapper from "../../ultilitys/BackgroundWrapper";
import BasicEditor from "../../ultilitys/BasicEditor";
const Top = styled.div`
padding-top: 40px;
padding-bottom: 40px;

`
const Wrapper = styled(BackgroundWrapper)`

  /* Border */
  border: ${(props) =>
    props.customtheme.borderOptions
      ? `${props.customtheme.borderOptions.borderWeight}px solid ${props.customtheme.borderOptions.borderColor.hex}`
      : ""};

      /* Background Color */
  background-color: ${(props) =>
    props.customtheme.backgroundColor
      ? `rgba(${props.customtheme.backgroundColor.rgb.r},${props.customtheme.backgroundColor.rgb.g},${props.customtheme.backgroundColor.rgb.b},${props.customtheme.backgroundColor.rgb.a})`
      : ""};
`;
const Content = styled.div`
padding-bottom: 20px;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  width: 100%;
  transition: .5s ease;
  display: flex;
  text-align: center;
`
function HeroBanner({ data }) {
  return (
    <Top>
    <Wrapper
      customtheme={data.theme ? data.theme : ""}
      data={data.backgroundPic}
      
    >
      <Content>
      <BasicEditor data={data.textEditor ? data.theme : ""} />
      </Content>
    </Wrapper>
    </Top>
  );
}

export default HeroBanner;

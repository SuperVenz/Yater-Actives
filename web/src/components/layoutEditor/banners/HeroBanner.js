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
`;
function HeroBanner({ data }) {
  return (
    <Top>
    <Wrapper
      customtheme={data.theme ? data.theme : ""}
      data={data.backgroundPic}
    >
      <BasicEditor data={data.textEditor} />
    </Wrapper>
    </Top>
  );
}

export default HeroBanner;

import React from "react";
import BackgroundWrapper from "../../ultilitys/BackgroundWrapper";
import BasicEditor from "../../ultilitys/BasicEditor";
import styled from "styled-components";
const Wrapper = styled(BackgroundWrapper)`
  /* Background Color */
  background-color: ${(props) =>
    props.customtheme.backgroundColor
      ? `rgba(${props.customtheme.backgroundColor.rgb.r},${props.customtheme.backgroundColor.rgb.g},${props.customtheme.backgroundColor.rgb.b},${props.customtheme.backgroundColor.rgb.a})`
      : ""};
  /* Border */
  border: ${(props) =>
    props.customtheme.borderOptions
      ? `${props.customtheme.borderOptions.borderWeight}px solid ${props.customtheme.borderOptions.borderColor.hex}`
      : ""};
`;
function InfoBanner({ data }) {
  return (
    <Wrapper
      customtheme={data.theme ? data.theme : ""}
      data={data.backgroundPic}
    >
      <BasicEditor data={data.textEditor} />
    </Wrapper>
  );
}

export default InfoBanner;

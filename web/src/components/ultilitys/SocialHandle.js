import React from "react";
import styled from "styled-components";
import PortablePic from "./PortablePic";
const Wrapper = styled.div`
  margin: 10px 0px;
`;
const StyledLink = styled.a`
  height: 100%;
  background-color: inherit;
  cursor: pointer;
`;
const Label = styled.p``;
function SocialHandle({ data }) {
  return (
    <Wrapper>
      {data.map((socialHandle, i) => {
        return (
          <StyledLink
            key={i}
            href={socialHandle.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {socialHandle.icon ? (
              <PortablePic data={socialHandle.icon} />
            ) : null}
            <Label>{socialHandle.label ? socialHandle.label : ""}</Label>
          </StyledLink>
        );
      })}
    </Wrapper>
  );
}

export default SocialHandle;

import React from "react";
import styled from "styled-components";
import BasicEditor from "../../ultilitys/BasicEditor";
import PortablePic from "../../ultilitys/PortablePic";
import { useStaticQuery, graphql } from "gatsby";

const Wrapper = styled.div``;
const StatisticWrapper = styled.div`
  /* keep this */
  /* Font Options */
  font-size: ${(props) =>
    props.customtheme.font ? `${props.customtheme.font.mobile}px` : ""};
  color: ${(props) =>
    props.customtheme.font ? props.customtheme.font.fontColor.hex : ""};
  /* Background Color */
  background-color: ${(props) =>
    props.customtheme.backgroundColor
      ? props.customtheme.backgroundColor.hex
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
const Statistic = styled.h2``;
const PicWrapper = styled.div``;

// Acceps Array
function Statistics({ data }) {
  const sanity = useStaticQuery(graphql`
    {
      sanityStatisticsMainTheme {
        _rawTheme
      }
    }
  `);
  return (
    <Wrapper>
      {data.statisticsArray.map((statistic, i) => {
        return (
          <StatisticWrapper
            key={i}
            customtheme={
              sanity.sanityStatisticsMainTheme
                ? sanity.sanityStatisticsMainTheme._rawTheme
                : ""
            }
          >
            <Statistic>{statistic.statNumber}</Statistic>
            <BasicEditor data={statistic.textEditor} />
            <PicWrapper>
              <PortablePic data={statistic.icon} />
            </PicWrapper>
          </StatisticWrapper>
        );
      })}
    </Wrapper>
  );
}

export default Statistics;

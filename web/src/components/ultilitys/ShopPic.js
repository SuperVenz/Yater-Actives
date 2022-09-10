import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
const Pic = styled(GatsbyImage)`
`;
const sanityConfig = {
  projectId: process.env.GATSBY_SANITY_ID,
  dataset: process.env.GATSBY_SANITY_DATASET,
};
function ShopPic({ data }) {
  const imageData = getGatsbyImageData(
    data.asset._ref,
    {},
    sanityConfig
  );
  return<div>
  <Pic alt={data.alt} image={imageData} />;
{JSON.stringify(data)}
  </div> 
}

export default ShopPic;

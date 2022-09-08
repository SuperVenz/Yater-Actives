import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import LayoutEditor from "./ultilitys/LayoutEditor";
import Footer from "./theme/footers/Footer";
import Header from "./theme/headers/Header";
import Reset from "../style/Reset";
const Css = createGlobalStyle`
  padding-left: 5px;
  padding-right: 15px;
h1{
     color: ${(props) => props.theme._rawH1Theme.fontColor.hex};   
     font-size:${(props) => `${props.theme._rawH1Theme.mobile}px`};
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

   @media only screen and (min-width: 600px) {
     font-size:${(props) => `${props.theme._rawH1Theme.tablet}px`};
   }
   @media only screen and (min-width: 900px) {
        font-size:${(props) => `${props.theme._rawH1Theme.desktop}px`};
   }
      @media only screen and (min-width: 1200px) {
   };
};
h2{
   color: ${(props) => props.theme._rawH2Theme.fontColor.hex};   
     font-size:${(props) => `${props.theme._rawH2Theme.mobile}px`};

   @media only screen and (min-width: 600px) {
     font-size:${(props) => `${props.theme._rawH2Theme.tablet}px`};
   }
   @media only screen and (min-width: 900px) {
        font-size:${(props) => `${props.theme._rawH2Theme.desktop}px`};
   }
      @media only screen and (min-width: 1200px) {
   };
}
h3{
  color: ${(props) => props.theme._rawH3Theme.fontColor.hex};   
     font-size:${(props) => `${props.theme._rawH3Theme.mobile}px`};

   @media only screen and (min-width: 600px) {
     font-size:${(props) => `${props.theme._rawH3Theme.tablet}px`};
   }
   @media only screen and (min-width: 900px) {
        font-size:${(props) => `${props.theme._rawH3Theme.desktop}px`};
   }
      @media only screen and (min-width: 1200px) {
   };
}
h4{
   color: ${(props) => props.theme._rawH4Theme.fontColor.hex};   
     font-size:${(props) => `${props.theme._rawH4Theme.mobile}px`};

   @media only screen and (min-width: 600px) {
     font-size:${(props) => `${props.theme._rawH4Theme.tablet}px`};
   }
   @media only screen and (min-width: 900px) {
        font-size:${(props) => `${props.theme._rawH4Theme.desktop}px`};
   }
      @media only screen and (min-width: 1200px) {
   };
}
p,span{
color: ${(props) => props.theme._rawTextTheme.fontColor.hex};   
     font-size:${(props) => `${props.theme._rawTextTheme.mobile}px`};

   @media only screen and (min-width: 600px) {
     font-size:${(props) => `${props.theme._rawTextTheme.tablet}px`};
   }
   @media only screen and (min-width: 900px) {
        font-size:${(props) => `${props.theme._rawTextTheme.desktop}px`};
   }
      @media only screen and (min-width: 1200px) {
   };
  }
`;
function Layout({ page }) {
  const data = useStaticQuery(graphql`
    {
      sanitySiteTheme {
        siteTheme {
          _rawBackgroundColor
          _rawBorderOptions
          _rawH1Theme
          _rawH2Theme
          _rawH3Theme
          _rawH4Theme
          _rawHighlightColor
          _rawTextTheme
        }
      }
    }
  `);
  return (
    <ThemeProvider
      theme={
        data.sanitySiteTheme.siteTheme
          ? data.sanitySiteTheme.siteTheme
          : ""
      }
    >
      <Reset />
      <Css />
      <Header />
      <LayoutEditor data={page} />
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;

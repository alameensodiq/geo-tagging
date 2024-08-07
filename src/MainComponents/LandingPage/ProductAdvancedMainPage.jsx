import React from "react";
import styled from "styled-components";
import LandingNavbar from "./LandingNavbar";
import FirstProductMainPage from "./FirstProductMainPage";
import image1 from "../../assets/Dashboard.png";
import image2 from "../../assets/image2.png";
import card1 from "../../assets/couple.png";
import card2 from "../../assets/secondcouple.png";
import realtime from "../../assets/dailycard.png";
import analytics from "../../assets/dashboardcard.png";
import customized from "../../assets/insightcard.png";
import SecondProductMainPage from "./SecondProductMainPage";
import Footer from "./Footer";
import ThirdProductMainPage from "./ThirdProductMainPage";
import FourthProductMainPage from "./FourthProductMainPage";
import FifthProductMainPage from "./FifthProductMainPage";

const ProductAdvancedMainPage = () => {
  return (
    <Flex>
      <LandingNavbar />
      <>
        <FirstProductMainPage
          first="HOME / FEATURES / ADVANCED ANALYTICS"
          second="The global Campaign platform you deserve"
          third=""
          fourth="Gain deeper insights into user behavior and campaign performance"
          topimage={image1}
          topimage2={""}
          wide
        />
        <SecondProductMainPage
          button="Advanced Analytics"
          statement1="Modern analysis reviews  by"
          statement2="and"
          statement4="managers"
          statement3="representatives"
        />
        <ThirdProductMainPage
          master1={card1}
          master2={card2}
          title1="Project Analysis"
          firststatement1="Identifying which geographic areas and"
          firststatement2="business representative are contributing"
          firststatement3="most to campaign success."
          firststatement4=""
          title2="Report Analysis"
          secondstatement1="Enable comprehensive evaluation of the data"
          secondstatement2="collected from the campaign to understand its"
          secondstatement3="performance, identify trends, and derive actionable"
          secondstatement4="insights."
        />
        <FourthProductMainPage
          track="The performance analysis that "
          wit="improves"
          clarity="engagement"
          cardfirst={analytics}
          cardsecond={realtime}
          cardthird={customized}
        />
        <FifthProductMainPage />
        <Footer />
      </>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ProductAdvancedMainPage;

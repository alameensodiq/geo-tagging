import React from "react";
import styled from "styled-components";
import LandingNavbar from "./LandingNavbar";
import LastIndustryMainLastDiv from "./LastIndustryMainLastDiv";
import FirstProductMainPage from "./FirstProductMainPage";
import image1 from "../../assets/idcard.png";
import possible from "../../assets/possible.png";
import smile from "../../assets/smile.png";
import possible2 from "../../assets/possible2.png";
import smile2 from "../../assets/smile2.png";
import possible3 from "../../assets/possible3.png";
import smile3 from "../../assets/smile3.png";
import possible4 from "../../assets/possible4.png";
import smile4 from "../../assets/smile4.png";
import SecondProductMainPage from "./SecondProductMainPage";
import Footer from "./Footer";

const ResourcesMainPage = () => {
  return (
    <Flex>
      <LandingNavbar />
      <>
        <FirstProductMainPage
          first="HOME / FEATURES / CUSTOMER STORIES"
          second="Customer stories"
          third=""
          fourth="Take inspiration from our clients who are changing the face of campaign work in the future"
          topimage={image1}
          topimage2={""}
        />
        <SecondProductMainPage
          button="Customer insights"
          statement1="Discover how De - Faucon powers"
          statement2=""
          statement3="Campaign"
        />
        <div className="images">
          <div className="image">
            <img src={possible} className="possible" alt="possible" />
            <img src={smile} className="smile" alt="smile" />
          </div>
          <div className="image">
            <img src={smile2} className="smile" alt="smile" />
            <img src={possible2} className="possible" alt="possible" />
          </div>
          <div className="image">
            <img src={possible3} className="possible" alt="possible" />
            <img src={smile3} className="smile" alt="smile" />
          </div>
          <div className="image">
            <img src={smile4} className="smile" alt="smile" />
            <img src={possible4} className="possible" alt="possible" />
          </div>
        </div>
        <LastIndustryMainLastDiv />
        <Footer />
      </>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  .images {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-inline: 65px;
    padding-block: 50px;
    .image {
      display: flex;
      flex-direction: row;
      gap: 20px;
      padding-inline: 60px;
      .possible {
        width: 72%;
        height: 380px;
      }
      .smile {
        width: 28%;
        height: 380px;
      }
    }
  }
`;

export default ResourcesMainPage;

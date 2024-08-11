import React from "react";
import styled from "styled-components";
import LandingNavbar from "./LandingNavbar";
import FirstProductMainPage from "./FirstProductMainPage";
import image1 from "../../assets/meeting.png";
import possible from "../../assets/mission.png";
import board from "../../assets/board.png";
import smile from "../../assets/vision.png";
import smile2 from "../../assets/values.png";
import SecondProductMainPage from "./SecondProductMainPage";
import Footer from "./Footer";
import Marquee from "react-fast-marquee";
import { ReactComponent as Sliding } from "../../assets/Sliding.svg";
import LastCustomerDiv from "./LastCustomerDiv";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutMainPage = () => {
  return (
    <Flex>
      <LandingNavbar />
      <>
        <FirstProductMainPage
          first="HOME / FEATURES / ABOUT US"
          second="About us"
          third=""
          fourth="We make managing a global campaign team easy, so businesses don’t need to think twice"
          topimage={image1}
          wide
          remove
          topimage2={""}
        />
        <SecondProductMainPage
          button="About us"
          statement1=""
          statement2="Work with the"
          statement3="world"
        />
        <div className="images" data-aos="fade-right">
          <div className="possiblediv">
            <div className="image">
              <img src={possible} className="possible" alt="possible" />
              <img src={smile} className="smile" alt="smile" />
            </div>
            <div className="image">
              <img src={smile2} className="values" alt="values" />
            </div>
          </div>
          <div className="right">
            <span className="campaign">
              Meet our <span className="grow">Leaders</span>
            </span>
            <div className="details">
              <span className="detail">
                Our leaders are dedicated to people, product excellence, and
                making a
              </span>
              <span className="detail">positive impact in the workplace.</span>
            </div>
          </div>
          <div className="boarddiv">
            <img src={board} alt="board" className="board" />
          </div>
          <div className="bottom">
            <span className="trusted">
              Leading global companies choose De-Faucon for all their Campaign
              needs
            </span>
            <div className="sliding">
              <Marquee
                style={{ gap: "70px" }}
                direction="left"
                speed={120}
                loop={0}
                delay={20}
              >
                <Sliding />
              </Marquee>
            </div>
          </div>
        </div>
        <LastCustomerDiv other />
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
    gap: 150px;
    padding-inline: 65px;
    padding-block: 50px;
    .possiblediv {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .image {
        display: flex;
        flex-direction: row;
        gap: 20px;
        padding-inline: 60px;
        .possible {
          width: 49%;
          height: 380px;
        }
        .smile {
          width: 49%;
          height: 380px;
        }
        .values {
          width: 100%;
          height: 380px;
        }
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;

      .campaign {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 38px;
        font-weight: 600;
        line-height: 53px;
        letter-spacing: -0.03em;
        color: #28385c;
        .grow {
          color: #dd4a5d;
        }
      }
      .details {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        .detail {
          color: #667085;
          font-size: 16px;
          font-weight: 400;
          line-height: 20px;
          text-align: center;
        }
      }
    }
    .boarddiv {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      .board {
        width: 95%;
        height: 400px;
      }
    }
    .bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      .trusted {
        font-size: 17px;
        font-weight: 400;
        line-height: 24.2px;
        text-align: left;
        color: #5a6376cc;
      }
      .sliding {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 60%;
      }
    }
  }
`;

export default AboutMainPage;

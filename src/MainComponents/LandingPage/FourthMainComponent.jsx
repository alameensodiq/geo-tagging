import React from "react";
import styled from "styled-components";
import { ReactComponent as Service } from "../../assets/serviceicon.svg";
import { ReactComponent as Book } from "../../assets/book.svg";
import { ReactComponent as CampaignRep } from "../../assets/CampaignRep.svg";
import { ReactComponent as Campaigncreate } from "../../assets/Campaigncreate.svg";
import { ReactComponent as ArrowRight } from "../../assets/ArrowRight.svg";
import FeaturesCard from "../../Reusable/FeaturesCard";
import FourMainCard from "./FourMainCard";

const FourthMainComponent = () => {
  return (
    <Flex>
      <div className="cover">
        <FeaturesCard reduce row={3}>
          <FourMainCard
            number={1}
            name={"Book a Call."}
            image={<Book />}
            statement1={"Book a call with our  consultants. We’ll"}
            statement2={"set you up with a free account ready to"}
            statement3={"suit your team’s needs"}
          />
          <FourMainCard
            number={2}
            name={"Create a Campaign"}
            image={<Campaigncreate />}
            statement1={"Create a campaign with your De - Faucon"}
            statement2={"corporate account. We’ll set you up to"}
            statement3={"create, edit, suspend, and manage"}
            statement4={"promotional campaigns."}
          />
          <FourMainCard
            number={3}
            name={"Add your Representatives."}
            image={<CampaignRep />}
            statement1={"Add your representatives with your De -"}
            statement2={"Faucon corporate account. Onboard"}
            statement3={"effortlessly with our self-serve"}
            statement4={"platform."}
          />
        </FeaturesCard>
        <div className="demo">
          <button className="book">
            Book a Demo <ArrowRight />
          </button>
        </div>
        <div className="down">
          <button className="ourservices">
            {" "}
            <Service />
            Our Features
          </button>
          <div className="right">
            <span>Manage your Campaigns by tracking your</span>
            <span className="campaign">
              Representatives on <span className="grow">De - Faucon.</span>
            </span>
          </div>
        </div>
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 65px;
  overflow-x: hidden;
  .cover {
    border-bottom: 1px solid #ededed;
    display: flex;
    flex-direction: column;
    padding-block: 40px;
    width: 100%;
    gap: 80px;
    .demo {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      .book {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 143px;
        height: 43px;
        padding: 13px 12px 13px 12px;
        gap: 8px;
        border: 1px solid #1a87d7;
        border-radius: 25px;
        opacity: 0px;
        background: #1a87d7;
        font-size: 12px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0.02em;
        color: #ffffff;
        outline: none;
        cursor: pointer;
        box-shadow: 0px 0px 0px 1px #1a87d7;
        /* box-shadow: 0px 1px 1px 0px #0000001a; */
      }
    }
    .down {
      display: flex;
      flex-direction: column;
      padding-inline: 65px;
      /* padding-top: 60px; */
      align-items: center;
      justify-content: center;
      height: 40vh;
      gap: 10px;
      .ourservices {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5px;
        width: 126px;
        height: 32px;
        padding: 6.56px 13.8px 7.44px 10.2px;
        border-radius: 29.07px;
        border: 1.16px 0px 0px 0px;
        opacity: 0px;
        font-size: 13px;
        font-weight: 500;
        line-height: 18.15px;
        color: #28385c;
        background: linear-gradient(
          83.05deg,
          rgba(121, 170, 205, 0.08) 17.7%,
          rgba(61, 85, 103, 0.08) 104.55%
        );
        border: 1.16px solid #ededed;
      }
      .right {
        display: flex;
        flex-direction: column;
        font-size: 45px;
        font-weight: 600;
        line-height: 63px;
        letter-spacing: -0.03em;
        color: #28385c;
        .campaign {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 10px;
          .grow {
            color: #dd4a5d;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    padding-inline: 65px;
    overflow-x: hidden;
    .cover {
      border-bottom: 1px solid #ededed;
      display: flex;
      flex-direction: column;
      padding-block: 40px;
      width: 100%;
      gap: 80px;
      .demo {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .book {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 143px;
          height: 43px;
          padding: 13px 12px 13px 12px;
          gap: 8px;
          border: 1px solid #1a87d7;
          border-radius: 25px;
          opacity: 0px;
          background: #1a87d7;
          font-size: 12px;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.02em;
          color: #ffffff;
          outline: none;
          cursor: pointer;
          box-shadow: 0px 0px 0px 1px #1a87d7;
          /* box-shadow: 0px 1px 1px 0px #0000001a; */
        }
      }
      .down {
        display: flex;
        flex-direction: column;
        padding-inline: 65px;
        /* padding-top: 60px; */
        align-items: center;
        justify-content: center;
        height: 40vh;
        gap: 10px;
        .ourservices {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 5px;
          width: 126px;
          height: 32px;
          padding: 6.56px 13.8px 7.44px 10.2px;
          border-radius: 29.07px;
          border: 1.16px 0px 0px 0px;
          opacity: 0px;
          font-size: 13px;
          font-weight: 500;
          line-height: 18.15px;
          color: #28385c;
          background: linear-gradient(
            83.05deg,
            rgba(121, 170, 205, 0.08) 17.7%,
            rgba(61, 85, 103, 0.08) 104.55%
          );
          border: 1.16px solid #ededed;
        }
        .right {
          display: flex;
          flex-direction: column;
          font-size: 35px;
          font-weight: 600;
          line-height: 53px;
          letter-spacing: -0.03em;
          color: #28385c;
          .campaign {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 10px;
            .grow {
              color: #dd4a5d;
            }
          }
        }
      }
    }
  }
`;

export default FourthMainComponent;

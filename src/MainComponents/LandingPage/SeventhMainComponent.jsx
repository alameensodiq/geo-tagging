import React from "react";
import styled from "styled-components";
import curve from "../../assets/curve.png";
import { ReactComponent as Service } from "../../assets/serviceicon.svg";
import { ReactComponent as ArrowCircleRight } from "../../assets/ColoredArrowRight.svg";

const SeventhMainComponent = () => {
  return (
    <Flex>
      <div className="firstcontent">
        <div className="down">
          <button className="ourservices">
            {" "}
            <Service />
            Customer Stories
          </button>
          <div className="right">
            <span className="campaign">
              <span className="grow">Success stories</span> from
            </span>
            <span>around the world</span>
          </div>
          <div className="reviews">
            <span>
              User reviews have proven to outperform any other assessments
            </span>
            <span>
              in the campaign management world. That’s why we’re proud of{" "}
            </span>
            <span>what our reviewers have to say.</span>
          </div>
          <div className="left">
            <button className="book">
              Read More Success Stories <ArrowCircleRight />
            </button>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="content1">
          <span className="ribbon">''</span>
          <span className="tracking">
            <span className="state">
              "The real-time tracking and adjustment capabilities of this
            </span>
            <span className="state">
              platform are fantastic. We can tweak our campaigns on the
            </span>
            <span className="state">
              fly based on location data, ensuring our ads stay relevant
            </span>
            <span className="state">
              This has allowed us to quickly respond to shifts in consumer
            </span>
            <span className="state">
              behavior and significantly enhance our campaign
            </span>
            <span className="state">performance."</span>
            <div className="details">
              <span className="name">Mayowa Peters</span>
              <span className="title">RETAIL STORE MANAGER</span>
            </div>
          </span>
        </div>
        <div className="content1">
          <span className="ribbon2">''</span>
          <span className="tracking">
            <span className="state">
              "This platform has drastically improved our local
            </span>
            <span className="state">
              engagement. By focusing our tracking our representatives.
            </span>
            <span className="state">
              The location-specific promotions are particularly effective,
            </span>
            <span className="state">
              driving more customers to our branches. The analytics
            </span>
            <span className="state">
              provided are detailed and help us fine-tune our marketing
            </span>
            <span className="state">strategies for even better results."</span>
            <div className="details">
              <span className="name">Tolani Adams</span>
              <span className="title">MARKETING DIRECTOR</span>
            </div>
          </span>
        </div>
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 170px;
  padding-inline: 65px;
  background-image: url(${curve});
  background-size: cover;
  background-repeat: no-repeat;
  .firstcontent {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: flex-start;
    gap: 40px;
    .down {
      display: flex;
      flex-direction: column;
      /* padding-top: 60px; */
      align-items: flex-start;
      justify-content: center;
      height: 40vh;
      gap: 20px;
      .ourservices {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5px;
        width: 156px;
        height: 32px;
        padding: 6.56px 13.8px 7.44px 10.2px;
        border-radius: 29.07px;
        border: 1.16px 0px 0px 0px;
        opacity: 0px;
        font-size: 13px;
        font-weight: 500;
        line-height: 18.15px;
        color: #ffffff;
        background: #28385c;
        border: 1.16px solid #ffffff;
      }
      .right {
        display: flex;
        flex-direction: column;
        font-size: 45px;
        font-weight: 600;
        line-height: 50px;
        letter-spacing: -0.03em;
        color: #ffffff;
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
      .reviews {
        display: flex;
        flex-direction: column;
        font-size: 18px;
        font-weight: 400;
        line-height: 31px;
        color: #ffffff;
      }
      .left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 120px;
        .book {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 233px;
          height: 43px;
          padding: 13px 12px 13px 12px;
          gap: 8px;
          border: 1px solid #ffffff;
          border-radius: 20px;
          opacity: 0px;
          background: #ffffff;
          font-size: 12px;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.02em;
          color: #27375b;
          outline: none;
          cursor: pointer;
          box-shadow: 0px 0px 0px 1px #27375b;
          /* box-shadow: 0px 1px 1px 0px #0000001a; */
        }
      }
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding-inline: 40px;
    gap: 20px;
    .content1 {
      display: flex;
      flex-direction: column;
      width: 100%;
      position: relative;
      padding-block: 20px;
      padding-left: 50px;
      align-items: center;
      height: auto;
      .ribbon {
        background: #f3827c;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-top: 25px;
        font-size: 53.69px;
        font-weight: 500;
        line-height: 65.53px;
        letter-spacing: 0.02em;
        color: #000000;
        width: 55px;
        border-radius: 10px;
        top: 0px;
        height: 48px;
        position: absolute;
      }
      .ribbon2 {
        background: #1a87d7;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-top: 25px;
        font-size: 53.69px;
        font-weight: 500;
        line-height: 65.53px;
        letter-spacing: 0.02em;
        color: #000000;
        width: 55px;
        border-radius: 10px;
        top: 0px;
        height: 48px;
        position: absolute;
      }
      .tracking {
        border-radius: 25px;
        opacity: 0px;
        padding-block: 25px;
        padding-inline: 50px;
        display: flex;
        flex-direction: column;
        background: #ffffff;
        .state {
          font-size: 14px;
          font-weight: 500;
          line-height: 24.59px;
          text-align: left;
          color: #6e7782;
        }
        .details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          padding-top: 20px;
          .name {
            font-size: 16px;
            font-weight: 600;
            line-height: 21.78px;
            color: #2b3b5e;
          }
          .title {
            font-size: 14px;
            font-weight: 500;
            line-height: 19.36px;
            color: #27375b;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 130px;
    padding-inline: 65px;
    background-image: url(${curve});
    background-size: cover;
    background-repeat: no-repeat;
    .firstcontent {
      display: flex;
      flex-direction: column;
      width: 50%;
      align-items: flex-start;
      gap: 40px;
      .down {
        display: flex;
        flex-direction: column;
        /* padding-top: 60px; */
        align-items: flex-start;
        justify-content: center;
        height: 40vh;
        gap: 20px;
        .ourservices {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 5px;
          width: 156px;
          height: 32px;
          padding: 6.56px 13.8px 7.44px 10.2px;
          border-radius: 29.07px;
          border: 1.16px 0px 0px 0px;
          opacity: 0px;
          font-size: 13px;
          font-weight: 500;
          line-height: 18.15px;
          color: #ffffff;
          background: #28385c;
          border: 1.16px solid #ffffff;
        }
        .right {
          display: flex;
          flex-direction: column;
          font-size: 35px;
          font-weight: 600;
          line-height: 50px;
          letter-spacing: -0.03em;
          color: #ffffff;
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
        .reviews {
          display: flex;
          flex-direction: column;
          font-size: 14px;
          font-weight: 400;
          line-height: 31px;
          color: #ffffff;
        }
        .left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-top: 80px;
          .book {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 233px;
            height: 43px;
            padding: 13px 12px 13px 12px;
            gap: 8px;
            border: 1px solid #ffffff;
            border-radius: 20px;
            opacity: 0px;
            background: #ffffff;
            font-size: 12px;
            font-weight: 500;
            line-height: 20px;
            letter-spacing: 0.02em;
            color: #27375b;
            outline: none;
            cursor: pointer;
            box-shadow: 0px 0px 0px 1px #27375b;
            /* box-shadow: 0px 1px 1px 0px #0000001a; */
          }
        }
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      width: 50%;
      padding-inline: 40px;
      gap: 10px;
      .content1 {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: relative;
        padding-block: 20px;
        padding-left: 50px;
        align-items: center;
        height: auto;
        .ribbon {
          background: #f3827c;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding-top: 25px;
          font-size: 53.69px;
          font-weight: 500;
          line-height: 65.53px;
          letter-spacing: 0.02em;
          color: #000000;
          width: 55px;
          border-radius: 10px;
          top: 0px;
          height: 48px;
          position: absolute;
        }
        .ribbon2 {
          background: #1a87d7;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding-top: 25px;
          font-size: 53.69px;
          font-weight: 500;
          line-height: 65.53px;
          letter-spacing: 0.02em;
          color: #000000;
          width: 55px;
          border-radius: 10px;
          top: 0px;
          height: 48px;
          position: absolute;
        }
        .tracking {
          border-radius: 25px;
          opacity: 0px;
          padding-block: 25px;
          padding-inline: 50px;
          display: flex;
          flex-direction: column;
          background: #ffffff;
          .state {
            font-size: 10px;
            font-weight: 500;
            line-height: 24.59px;
            text-align: left;
            color: #6e7782;
          }
          .details {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            padding-top: 20px;
            .name {
              font-size: 16px;
              font-weight: 600;
              line-height: 21.78px;
              color: #2b3b5e;
            }
            .title {
              font-size: 14px;
              font-weight: 500;
              line-height: 19.36px;
              color: #27375b;
            }
          }
        }
      }
    }
  }
`;

export default SeventhMainComponent;

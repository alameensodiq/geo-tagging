import React from "react";
import styled from "styled-components";
import last from "../../assets/last.png";
import dive from "../../assets/divein.png";
import guy from "../../assets/guy.png";
import { ReactComponent as ArrowCircleRight } from "../../assets/darkright.svg";
import { ReactComponent as Degreat } from "../../assets/de.svg";
import { ReactComponent as Avatars } from "../../assets/Avatars.svg";

const ThirdLastIndustry = () => {
  return (
    <Flex>
      <div className="lastly">
        <div className="down">
          <div className="right">
            <span>More than 6,000+ businesses have</span>
            <span className="campaign">
              benefited from
              <span className="grow">De - Faucon</span>
            </span>
          </div>
        </div>
      </div>
      <div className="guycover">
        <div className="jegedediv">
          <Degreat />
          <div className="great">
            <span>De-Great can be confident knowing their tutors </span>
            <span>are in classrooms and helping students instead</span>
            <span>of missing shifts</span>
          </div>
          <div className="avatars">
            <Avatars />
            <div className="namediv">
              <span className="name">David Jegede</span>
              <span className="title">Co - owner at De Great school</span>
            </div>
          </div>
          <div className="cards">
            <div className="card1">
              <span className="top">₦22M</span>
              <span className="middle">Profit Generated</span>
              <span className="bottom">91%</span>
            </div>
            <div className="card2">
              <span className="top">61%</span>
              <div className="middle">
                <span>Greater efficiency vs</span>
                <span>in-house marketing</span>
              </div>
            </div>
            <div className="card3">
              <span className="top">5x</span>
              <div className="middle">
                <span>Generated in 60 Days</span>
              </div>
            </div>
          </div>
        </div>
        <img src={guy} alt="guy" className="guy" />
      </div>
      <div className="divediv">
        {/* <img src={dive} alt="dive" className="dive" /> */}
        <div className="down">
          <div className="right">
            <span>Ready to dive in?</span>
          </div>
          <div className="state">
            <span>Streamline your operations and experience the future</span>
            <span>tracking and management with De-Faucon</span>
          </div>
          <button className="book">
            Book a Demo <ArrowCircleRight />
          </button>
        </div>
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: "50px";
  padding-bottom: "30px";
  padding-inline: 65px;
  gap: 30px;
  background-color: #1a87d7;
  background-image: url(${last});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .lastly {
    display: flex;
    flex-direction: row;
    justify-content: center;
    .down {
      display: flex;
      flex-direction: column;
      /* padding-top: 60px; */
      align-items: center;
      justify-content: center;
      height: 40vh;
      gap: 5px;
      .ourservices {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5px;
        width: 226px;
        height: 32px;
        padding: 6.56px 13.8px 7.44px 10.2px;
        border-radius: 29.07px;
        border: 1.16px 0px 0px 0px;
        opacity: 0px;
        font-size: 13px;
        font-weight: 500;
        line-height: 18.15px;
        color: #ffffff;
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
        align-items: center;
        font-size: 35px;
        font-weight: 600;
        line-height: 53px;
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
    }
    .left {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding-top: 180px;
      .book {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 163px;
        height: 43px;
        padding: 13px 12px 13px 12px;
        gap: 8px;
        border: 1px solid #27375b;
        border-radius: 25px;
        opacity: 0px;
        background: #27375b;
        font-size: 12px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0.02em;
        color: #ffffff;
        outline: none;
        cursor: pointer;
        box-shadow: 0px 0px 0px 1px #27375b;
        /* box-shadow: 0px 1px 1px 0px #0000001a; */
      }
    }
  }
  .divediv {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-bottom: 60px;
    .down {
      display: flex;
      flex-direction: column;
      /* padding-top: 60px; */
      align-items: center;
      justify-content: center;
      height: 40vh;
      gap: 25px;
      background-image: url(${dive});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      .ourservices {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5px;
        width: 226px;
        height: 32px;
        padding: 6.56px 13.8px 7.44px 10.2px;
        border-radius: 29.07px;
        border: 1.16px 0px 0px 0px;
        opacity: 0px;
        font-size: 13px;
        font-weight: 500;
        line-height: 18.15px;
        color: #ffffff;
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
        align-items: center;
        font-size: 35px;
        font-weight: 600;
        line-height: 53px;
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
      .state {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 13px;
        font-weight: 500;
        line-height: 23px;
        letter-spacing: -0.03em;
        color: #ffffff;
      }
      .book {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 143px;
        height: 43px;
        padding: 13px 12px 13px 12px;
        gap: 8px;
        border: 1px solid #ffffff;
        border-radius: 25px;
        opacity: 0px;
        background: #ffffff;
        font-size: 12px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0.02em;
        color: #27375b;
        outline: none;
        cursor: pointer;
        /* box-shadow: 0px 1px 1px 0px #0000001a; */
      }
    }
    .dive {
      width: 40%;
    }
  }
  .guycover {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-inline: 150px;
    .jegedediv {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 40px;
      .great {
        display: flex;
        flex-direction: column;
        gap: 3px;
        font-size: 20px;
        font-weight: 400;
        line-height: 31.56px;
        text-align: left;
        color: #ffffff;
      }
      .avatars {
        display: flex;
        flex-direction: row;
        gap: 10px;
        .namediv {
          display: flex;
          flex-direction: column;
          gap: 5px;
          .name {
            font-size: 14px;
            font-weight: 600;
            line-height: 20.57px;
            text-align: left;
            color: #ffffff;
          }
          .title {
            font-size: 13px;
            font-weight: 400;
            line-height: 21.86px;
            text-align: left;
            color: #ffffff;
          }
        }
      }
      .cards {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 15px;
        .card1 {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 152.57px;
          height: 150px;
          padding: 36px 30.61px 14.84px 28.29px;
          border-radius: 21.43px;
          opacity: 0px;
          background: #dd4a5d;
          color: #ffffff;
          .top {
            font-size: 30.57px;
            font-weight: 400;
            line-height: 21.3px;
            text-align: left;
          }
          .middle {
            font-size: 10.86px;
            font-weight: 400;
            line-height: 15.56px;
            text-align: left;
          }
          .bottom {
            width: 42.86px;
            height: 14.29px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            font-size: 10px;
            gap: 1.43px;
            border-radius: 3.57px;
            opacity: 0px;
            color: #dd4a5d;
            background: #ffffff;
          }
        }
        .card2 {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 152.57px;
          height: 150px;
          padding: 36px 30.61px 14.84px 28.29px;
          border-radius: 21.43px;
          opacity: 0px;
          background: #1a87d7;
          color: #ffffff;
          .top {
            font-size: 30.57px;
            font-weight: 400;
            line-height: 21.3px;
            text-align: left;
          }
          .middle {
            display: flex;
            flex-direction: column;
            gap: 2px;
            font-size: 8.86px;
            font-weight: 400;
            line-height: 15.56px;
            text-align: left;
          }
          .bottom {
            width: 42.86px;
            height: 14.29px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            font-size: 10px;
            gap: 1.43px;
            border-radius: 3.57px;
            opacity: 0px;
            color: #dd4a5d;
            background: #ffffff;
          }
        }
        .card3 {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 152.57px;
          height: 150px;
          padding: 36px 30.61px 14.84px 28.29px;
          border-radius: 21.43px;
          opacity: 0px;
          background: #7c65e0;
          color: #ffffff;
          .top {
            font-size: 30.57px;
            font-weight: 400;
            line-height: 21.3px;
            text-align: left;
          }
          .middle {
            display: flex;
            flex-direction: column;
            gap: 2px;
            font-size: 8.86px;
            font-weight: 400;
            line-height: 15.56px;
            text-align: left;
          }
          .bottom {
            width: 42.86px;
            height: 14.29px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            font-size: 10px;
            gap: 1.43px;
            border-radius: 3.57px;
            opacity: 0px;
            color: #dd4a5d;
            background: #ffffff;
          }
        }
      }
    }
    .guy {
      width: 40%;
      height: 540px;
    }
  }
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    padding-top: "20px";
    padding-bottom: "30px";
    padding-inline: 65px;
    gap: 30px;
    background-color: #27375b;
    background-image: url(${last});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .lastly {
      display: flex;
      flex-direction: row;
      justify-content: center;
      .down {
        display: flex;
        flex-direction: column;
        /* padding-top: 60px; */
        align-items: center;
        justify-content: center;
        height: 40vh;
        gap: 5px;
        .ourservices {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 5px;
          width: 226px;
          height: 32px;
          padding: 6.56px 13.8px 7.44px 10.2px;
          border-radius: 29.07px;
          border: 1.16px 0px 0px 0px;
          opacity: 0px;
          font-size: 13px;
          font-weight: 500;
          line-height: 18.15px;
          color: #ffffff;
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
          align-items: center;
          font-size: 35px;
          font-weight: 600;
          line-height: 53px;
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
      }
      .left {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding-top: 180px;
        .book {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 163px;
          height: 43px;
          padding: 13px 12px 13px 12px;
          gap: 8px;
          border: 1px solid #27375b;
          border-radius: 25px;
          opacity: 0px;
          background: #27375b;
          font-size: 12px;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.02em;
          color: #ffffff;
          outline: none;
          cursor: pointer;
          box-shadow: 0px 0px 0px 1px #27375b;
          /* box-shadow: 0px 1px 1px 0px #0000001a; */
        }
      }
    }
    .divediv {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding-bottom: 60px;
      .down {
        display: flex;
        flex-direction: column;
        /* padding-top: 60px; */
        align-items: center;
        justify-content: center;
        height: 40vh;
        gap: 25px;
        background-image: url(${dive});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        .ourservices {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 5px;
          width: 226px;
          height: 32px;
          padding: 6.56px 13.8px 7.44px 10.2px;
          border-radius: 29.07px;
          border: 1.16px 0px 0px 0px;
          opacity: 0px;
          font-size: 13px;
          font-weight: 500;
          line-height: 18.15px;
          color: #ffffff;
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
          align-items: center;
          font-size: 35px;
          font-weight: 600;
          line-height: 53px;
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
        .state {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 13px;
          font-weight: 500;
          line-height: 23px;
          letter-spacing: -0.03em;
          color: #ffffff;
        }
        .book {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 143px;
          height: 43px;
          padding: 13px 12px 13px 12px;
          gap: 8px;
          border: 1px solid #ffffff;
          border-radius: 25px;
          opacity: 0px;
          background: #ffffff;
          font-size: 12px;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.02em;
          color: #27375b;
          outline: none;
          cursor: pointer;
          /* box-shadow: 0px 1px 1px 0px #0000001a; */
        }
      }
      .dive {
        width: 40%;
      }
    }
    .guycover {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-inline: 80px;
      gap: 40px;
      .jegedediv {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 40px;
        .great {
          display: flex;
          flex-direction: column;
          gap: 3px;
          font-size: 20px;
          font-weight: 400;
          line-height: 31.56px;
          text-align: left;
          color: #ffffff;
        }
        .avatars {
          display: flex;
          flex-direction: row;
          gap: 10px;
          .namediv {
            display: flex;
            flex-direction: column;
            gap: 5px;
            .name {
              font-size: 14px;
              font-weight: 600;
              line-height: 20.57px;
              text-align: left;
              color: #ffffff;
            }
            .title {
              font-size: 13px;
              font-weight: 400;
              line-height: 21.86px;
              text-align: left;
              color: #ffffff;
            }
          }
        }
        .cards {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          gap: 15px;
          .card1 {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 152.57px;
            height: 150px;
            padding: 36px 30.61px 14.84px 28.29px;
            border-radius: 21.43px;
            opacity: 0px;
            background: #dd4a5d;
            color: #ffffff;
            .top {
              font-size: 30.57px;
              font-weight: 400;
              line-height: 21.3px;
              text-align: left;
            }
            .middle {
              font-size: 10.86px;
              font-weight: 400;
              line-height: 15.56px;
              text-align: left;
            }
            .bottom {
              width: 42.86px;
              height: 14.29px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              font-size: 10px;
              gap: 1.43px;
              border-radius: 3.57px;
              opacity: 0px;
              color: #dd4a5d;
              background: #ffffff;
            }
          }
          .card2 {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 152.57px;
            height: 150px;
            padding: 36px 30.61px 14.84px 28.29px;
            border-radius: 21.43px;
            opacity: 0px;
            background: #1a87d7;
            color: #ffffff;
            .top {
              font-size: 30.57px;
              font-weight: 400;
              line-height: 21.3px;
              text-align: left;
            }
            .middle {
              display: flex;
              flex-direction: column;
              gap: 2px;
              font-size: 8.86px;
              font-weight: 400;
              line-height: 15.56px;
              text-align: left;
            }
            .bottom {
              width: 42.86px;
              height: 14.29px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              font-size: 10px;
              gap: 1.43px;
              border-radius: 3.57px;
              opacity: 0px;
              color: #dd4a5d;
              background: #ffffff;
            }
          }
          .card3 {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 152.57px;
            height: 150px;
            padding: 36px 30.61px 14.84px 28.29px;
            border-radius: 21.43px;
            opacity: 0px;
            background: #7c65e0;
            color: #ffffff;
            .top {
              font-size: 30.57px;
              font-weight: 400;
              line-height: 21.3px;
              text-align: left;
            }
            .middle {
              display: flex;
              flex-direction: column;
              gap: 2px;
              font-size: 8.86px;
              font-weight: 400;
              line-height: 15.56px;
              text-align: left;
            }
            .bottom {
              width: 42.86px;
              height: 14.29px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              font-size: 10px;
              gap: 1.43px;
              border-radius: 3.57px;
              opacity: 0px;
              color: #dd4a5d;
              background: #ffffff;
            }
          }
        }
      }
      .guy {
        width: 40%;
        height: 540px;
      }
    }
  }
`;

export default ThirdLastIndustry;

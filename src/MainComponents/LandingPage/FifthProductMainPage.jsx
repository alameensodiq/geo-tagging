import React, { useState } from "react";
import styled from "styled-components";
import frequent from "../../assets/frequent.png";
import group from "../../assets/group.png";
import { ReactComponent as Minus } from "../../assets/minus-circle.svg";
import { ReactComponent as Plus } from "../../assets/plus-circle.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const FifthProductMainPage = ({ white }) => {
  const [open, setOpen] = useState(false);
  return (
    <Flex white={white} data-aos="fade-right">
      <div className="questions">
        <span className="frequent">Frequently asked questions</span>
        <span className="answers">Answers to all possible questions</span>
        <div className="container">
          <div className="toppings">
            <span className="trial">Is there a free trial available?</span>
            {open ? (
              <Minus
                style={{ cursor: "pointer" }}
                onClick={() => setOpen(false)}
              />
            ) : (
              <Plus
                style={{ cursor: "pointer" }}
                onClick={() => setOpen(true)}
              />
            )}
          </div>
          {open && (
            <div className="freecontainer">
              <span className="free">
                Yes, you can try us for free for 3 days. If you want, we’ll
                provide you with a free, personalized
              </span>
              <span className="free">
                30-minute onboarding call to get you up and running as soon as
                possible.
              </span>
            </div>
          )}
        </div>
        <div className="container">
          <div className="toppings">
            <span className="trial">
              Why is Representative tracking Important?
            </span>
            {open ? (
              <Minus
                style={{ cursor: "pointer" }}
                onClick={() => setOpen(false)}
              />
            ) : (
              <Plus
                style={{ cursor: "pointer" }}
                onClick={() => setOpen(true)}
              />
            )}
          </div>
          {open && (
            <div className="freecontainer">
              <span className="free">
                Yes, you can try us for free for 3 days. If you want, we’ll
                provide you with a free, personalized
              </span>
              <span className="free">
                30-minute onboarding call to get you up and running as soon as
                possible.
              </span>
            </div>
          )}
        </div>
        <div className="container">
          <div className="toppings">
            <span className="trial">
              How Many Representative Can You Track with De-Faucon?
            </span>
            {open ? (
              <Minus
                style={{ cursor: "pointer" }}
                onClick={() => setOpen(false)}
              />
            ) : (
              <Plus
                style={{ cursor: "pointer" }}
                onClick={() => setOpen(true)}
              />
            )}
          </div>
          {open && (
            <div className="freecontainer">
              <span className="free">
                Yes, you can try us for free for 3 days. If you want, we’ll
                provide you with a free, personalized
              </span>
              <span className="free">
                30-minute onboarding call to get you up and running as soon as
                possible.
              </span>
            </div>
          )}
        </div>
        <div className="container">
          <div className="toppings">
            <span className="trial">
              How do I create a campaign tracking for my representative?
            </span>
            {open ? (
              <Minus
                style={{ cursor: "pointer" }}
                onClick={() => setOpen(false)}
              />
            ) : (
              <Plus
                style={{ cursor: "pointer" }}
                onClick={() => setOpen(true)}
              />
            )}
          </div>
          {open && (
            <div className="freecontainer">
              <span className="free">
                Yes, you can try us for free for 3 days. If you want, we’ll
                provide you with a free, personalized
              </span>
              <span className="free">
                30-minute onboarding call to get you up and running as soon as
                possible.
              </span>
            </div>
          )}
        </div>
        <div className="container">
          <div className="toppings">
            <span className="trial">
              Can De-Faucon help tracking meal and rest breaks?
            </span>
            {open ? (
              <Minus
                style={{ cursor: "pointer" }}
                onClick={() => setOpen(false)}
              />
            ) : (
              <Plus
                style={{ cursor: "pointer" }}
                onClick={() => setOpen(true)}
              />
            )}
          </div>
          {open && (
            <div className="freecontainer">
              <span className="free">
                Yes, you can try us for free for 3 days. If you want, we’ll
                provide you with a free, personalized
              </span>
              <span className="free">
                30-minute onboarding call to get you up and running as soon as
                possible.
              </span>
            </div>
          )}
        </div>
        <div className="not-container">
          <div className="toppings">
            <span className="trial">
              Will De-Faucon work with my other systems?
            </span>
            {open ? (
              <Minus
                style={{ cursor: "pointer" }}
                onClick={() => setOpen(false)}
              />
            ) : (
              <Plus
                style={{ cursor: "pointer" }}
                onClick={() => setOpen(true)}
              />
            )}
          </div>
          {open && (
            <div className="freecontainer">
              <span className="free">
                Yes, you can try us for free for 3 days. If you want, we’ll
                provide you with a free, personalized
              </span>
              <span className="free">
                30-minute onboarding call to get you up and running as soon as
                possible.
              </span>
            </div>
          )}
        </div>
      </div>
    </Flex>
  );
};
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 140px;
  background-color: #28385c;
  padding-bottom: 320px;
  padding-inline: 65px;
  background-image: ${(props) =>
    props.white ? `url(${group})` : `url(${frequent})`};
  background-size: cover;
  background-repeat: no-repeat;
  gap: 40px;
  .questions {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    color: #ffffff;
    .frequent {
      font-size: 36px;
      font-weight: 600;
      line-height: 44px;
      letter-spacing: -0.02em;
      text-align: center;
    }
    .answers {
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
      text-align: center;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eaecf0;
    width: 100%;
    .toppings {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .trial {
        font-size: 16.33px;
        font-weight: 500;
        line-height: 31.63px;
        text-align: left;
        color: linear-gradient(90deg, #ffffff 11.44%, #f3827c 50.09%);
      }
    }
    .freecontainer {
      display: flex;
      flex-direction: column;
      gap: 2px;
      .free {
        font-size: 14.07px;
        font-weight: 400;
        line-height: 27.11px;
        text-align: left;
        color: #ffffff;
      }
    }
  }
  .not-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 15px;
    width: 100%;
    .toppings {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .trial {
        font-size: 16.33px;
        font-weight: 500;
        line-height: 31.63px;
        text-align: left;
        color: linear-gradient(90deg, #ffffff 11.44%, #f3827c 50.09%);
      }
    }
    .freecontainer {
      display: flex;
      flex-direction: column;
      gap: 2px;
      .free {
        font-size: 14.07px;
        font-weight: 400;
        line-height: 27.11px;
        text-align: left;
        color: #ffffff;
      }
    }
  }
`;

export default FifthProductMainPage;

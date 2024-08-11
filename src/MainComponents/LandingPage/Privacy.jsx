import React from "react";
import styled from "styled-components";
import Product from "../../assets/productfirst.png";
import { ReactComponent as ArrowCircleRight } from "../../assets/ArrowCircleRight.svg";
import FeaturesCard from "../../Reusable/FeaturesCard";
import PricingCard from "./PricingCard";
import Aos from "aos";
import "aos/dist/aos.css";

const Privacy = ({
  first,
  second,
  third,
  fourth,
  topimage,
  topimage2,
  wide,
  remove,
  card
}) => {
  return (
    <Flex topimage2={topimage2} wide={wide} data-aos="fade-right">
      <span className="first">PRIVACY POLICY</span>
      <div className="div">
        <span className="second">
          Your privacy is important to us at De - Faucon. We respect your
          privacy regarding any
        </span>
        <span className="second">
          information we may collect from you across our website.
        </span>
      </div>
      <div className="main">
        <span className="heading">1. De - Fucon's Data Collection:</span>
        <div className="sub">
          <span className="title">
            . De - Faucon, operating the mobile app, collects various data to
            improve services
          </span>
          <span className="title">
            . Information is gathered through feedback, online forms, surveys,
            social media interactions, and third-party sources like Google
          </span>
          <span className="title">Analytics.</span>
          <span className="title">
            . Collected information includes Personal Data (e.g., name, email,
            phone number), Usage Data (device information), and cookies
          </span>
          <span className="title">for site activity tracking</span>
        </div>
      </div>
      <div className="main">
        <span className="heading">2. Data Usage:</span>
        <div className="sub">
          <span className="title">
            . Data is used for service maintenance, user notifications, customer
            support, analysis, and issue detection
          </span>
          <span className="title">
            . De - Faucon does not sell personal info but might share aggregated
            non-identifiable data.
          </span>
          <span className="title">
            . Data may be transferred globally with stringent security measures
            in place.
          </span>
        </div>
      </div>
      <div className="main">
        <span className="heading">3. User Privacy Rights:</span>
        <div className="sub">
          <span className="title">
            . Users have rights regarding data access, correction, deletion, and
            objection to processing
          </span>
        </div>
      </div>
      <div className="main">
        <span className="heading">4. Security Measures:</span>
        <div className="sub">
          <span className="title">
            . Security measures are implemented to safeguard user data
          </span>
          <span className="title">
            . Third-party service providers assist in service analysis.
          </span>
        </div>
      </div>
      <div className="main">
        <span className="heading">
          5. External Links and Children's Privacy:
        </span>
        <div className="sub">
          <span className="title">
            . The policy addresses links to external sites and Children's
            Privacy.
          </span>
        </div>
      </div>
      <div className="main">
        <span className="heading">6. Complaint Resolution:</span>
        <div className="sub">
          <span className="title">
            . Procedures for resolving complaints and disputes are outlined.
          </span>
        </div>
      </div>
      <div className="main">
        <span className="heading">7. Policy Updates and Compliance:</span>
        <div className="sub">
          <span className="title">
            . Periodic policy updates ensure compliance with NDPR and GDPR
            regulations.
          </span>
        </div>
      </div>
      <div className="main">
        <span className="heading">8. Contact Information:</span>
        <div className="sub">
          <span className="title">
            . Contact details are provided for any queries or concerns regarding
            the Privacy Policy.
          </span>
        </div>
      </div>
      <div className="main">
        <span className="heading">Contact De - Faucon:</span>
        <div className="sub">
          <span className="title">. Email: support@defaucon.ng</span>
          <span className="title">. Website: www.defaucon.ng</span>
          <span className="title">. Phone: ++2348182504430</span>
        </div>
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 140px;
  padding-bottom: 140px;
  padding-inline: 65px;
  gap: 30px;
  /* background-image: url(${Product});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
  align-items: center;
  .first {
    font-size: 35px;
    font-weight: 700;
    line-height: 56.7px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #28385c;
  }
  .div {
    display: flex;
    flex-direction: column;
    align-items: center;
    .second {
      font-size: 17px;
      font-weight: 400;
      line-height: 30.05px;
      text-align: center;
      color: #28385c;
    }
  }
  .details {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: 400;
    line-height: 40px;
    text-align: left;
    color: #121212;
    width: 80%;
    .detail {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 3px;
      .colored {
        color: #1a87d7;
      }
    }
  }
  .main {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    width: 80%;
    .heading {
      font-size: 16px;
      font-weight: 500;
      line-height: 31.25px;
      text-align: left;
      color: #1a87d7;
    }
    .sub {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .title {
        font-size: 16px;
        font-weight: 400;
        line-height: 40px;
        text-align: left;
        color: #1a1a1a;
        text-transform: lowercase;
      }
    }
    .web {
      font-size: 14px;
      font-weight: 400;
      line-height: 32px;
      text-align: justified;
      color: #1a1a1a;
    }
    .webs {
      display: flex;
      flex-direction: column;
      .web {
        font-size: 14px;
        font-weight: 400;
        line-height: 32px;
        text-align: justified;
        color: #1a1a1a;
      }
    }
  }
`;

export default Privacy;

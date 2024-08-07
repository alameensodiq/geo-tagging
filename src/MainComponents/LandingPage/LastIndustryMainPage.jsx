import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import LandingNavbar from "./LandingNavbar";
import FirstIndustryComponent from "./FirstIndustryComponent";
import pics from "../../assets/construction.png";
import { ReactComponent as Pics1 } from "../../assets/retaillogo.svg";
import { ReactComponent as Hotel } from "../../assets/hotelsymbol.svg";
import { ReactComponent as Logsymbol } from "../../assets/logsymbol.svg";
import { ReactComponent as Healthsymbol } from "../../assets/healthsymbol.svg";
import { ReactComponent as Constructsymbol } from "../../assets/constructsymbol.svg";
import { ReactComponent as Agricsymbol } from "../../assets/agricsymbol.svg";
import { ReactComponent as Edusymbol } from "../../assets/edusymbol.svg";
import { ReactComponent as Securitysymbol } from "../../assets/securitysymbol.svg";
import { ReactComponent as Callsymbol } from "../../assets/callsymbol.svg";

import pics2 from "../../assets/schedules.png";
import SecondProductMainPage from "./SecondProductMainPage";
import LastIndustryCard from "./LastIndustryCard";
import FeaturesCard from "../../Reusable/FeaturesCard";
import DecoratedLastIndustryCard from "./DecoratedLastIndustryCard";
import ThirdLastIndustry from "./ThirdLastIndustry";

const LastIndustryMainPage = () => {
  return (
    <Flex>
      <LandingNavbar />
      <>
        <FirstIndustryComponent
          retailer="HOME / INDUSTRY"
          divcover="Create a flourishing"
          divcover2="workplace and lower costs,"
          divcover3="regardless of your industry."
          statement="See how our platform works with your business, industry and goals"
          reduce
          pictures={pics}
        />
        <SecondProductMainPage
          button="Industry"
          statement1="Discover how De - Faucon can keep you"
          statement2="ahead of the competition in your"
          statement3="industry"
        />
        <div className="wrap">
          <FeaturesCard reduce row={4}>
            <LastIndustryCard
              name="Retail"
              content1="Focus on growing sales instead of"
              content2="struggling with complex schedules"
              content3="and timesheets"
              Imagelogo={<Pics1 />}
            />
            <LastIndustryCard
              name="Healthcare"
              content1="Prioritize patient care by giving"
              content2="your staff 24/7 access to shifts and"
              content3="schedules on any device."
              Imagelogo={<Healthsymbol />}
            />
            <LastIndustryCard
              name="Education"
              content1="Easily manage staff and"
              content2="substitutions to ensure smooth"
              content3="school days without any"
              content4="interruptions"
              Imagelogo={<Edusymbol />}
            />
            <LastIndustryCard
              name="Security"
              content1="Streamline scheduling and time"
              content2="tracking to ensure every job is"
              content3="covered and accounted for"
              content4="efficiently."
              Imagelogo={<Securitysymbol />}
            />
            <LastIndustryCard
              name="Agriculture"
              content1="Effortlessly scale your team to"
              content2="meet the fluctuating demands of "
              content3="seasonal peaks."
              Imagelogo={<Agricsymbol />}
            />
            <LastIndustryCard
              name="Construction"
              content1="Efficiently manage staff and billing"
              content2="across multiple sites and projects,"
              content3="ensuring streamlined operations "
              content4="regardless of complexity."
              Imagelogo={<Constructsymbol />}
            />
            <LastIndustryCard
              name="Logistic"
              content1="When every second counts, we"
              content2="minimize administrative time,"
              content3="enabling maximum efficiency."
              content4=""
              Imagelogo={<Logsymbol />}
            />
            <LastIndustryCard
              name="Hotel"
              content1="Make sure your staff members are"
              content2="where they need to be at the"
              content3="appropriate times with meticulous"
              content4="preparation."
              Imagelogo={<Hotel />}
            />
            <LastIndustryCard
              name="Call Center"
              content1="you can focus on what matters"
              content2="most—talking to customers, Let"
              content3="De-Faucon power the day-to-day"
              content4="admin tasks"
              Imagelogo={<Callsymbol />}
            />
            <DecoratedLastIndustryCard
              name="Regardless of your industry"
              content1="Our platform works with your "
              content2="business, industry and goals."
            />
          </FeaturesCard>
        </div>
        <ThirdLastIndustry />
        <Footer />
      </>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  .wrap {
    display: flex;
    flex-direction: column;
    padding-block: 40px;
    padding-inline: 80px;
  }
`;
export default LastIndustryMainPage;

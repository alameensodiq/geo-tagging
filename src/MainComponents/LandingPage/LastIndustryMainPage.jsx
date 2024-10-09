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
import { ReactComponent as Bio } from "../../assets/bio.svg";
import { ReactComponent as Notepad } from "../../assets/notepad.svg";
import { ReactComponent as Standclock } from "../../assets/standclock.svg";
import { ReactComponent as Alarm } from "../../assets/alarm.svg";

import pics2 from "../../assets/schedules.png";
import Groupcard from "../../assets/Groupcard.png";
import SecondProductMainPage from "./SecondProductMainPage";
import LastIndustryCard from "./LastIndustryCard";
import FeaturesCard from "../../Reusable/FeaturesCard";
import DecoratedLastIndustryCard from "./DecoratedLastIndustryCard";
import ThirdLastIndustry from "./ThirdLastIndustry";
import LastIndustryMainLastDiv from "./LastIndustryMainLastDiv";
import FirstProductMainPage from "./FirstProductMainPage";
import FakeThirdLastIndustry from "./FakeThirdLastIndustry";

const LastIndustryMainPage = () => {
  return (
    <Flex>
      <LandingNavbar />
      <>
        {/* <FirstIndustryComponent
          retailer="HOME / INDUSTRY"
          divcover1="Create a flourishing"
          divcover2="workplace and lower costs,"
          divcover3="regardless of your industry."
          statement="See how our platform works with your business, industry and goals"
          reduce
          pictures={pics}
        /> */}
        <FirstProductMainPage
          first="HOME / PRODUCT OVERVIEW"
          second="Product Overview"
          third=""
          fourth="De-faucon is a digital application, poised to track resumption time, punctuality rate, availability at duty post and end of day report of employees"
          fifth="assigned to remote locations or 3rd party sites.The application is positioned to cater to some of the peculiarities of blue-collar business sector,"
          sixth="creating visibility and awareness to whereabouts of employees in remote locations or duty post"
          topimage={Groupcard}
          topimage2={""}
        />
        <SecondProductMainPage
          button="Key Feature"
          statement1="Improve Efficiency and Accountability"
          statement2="with"
          statement3="De - Faucon."
        />
        <div className="wrap">
          <FeaturesCard reduce row={3}>
            <LastIndustryCard
              name="Geo-location tagging"
              content1="Create boundaries around specific"
              content2="locations"
              content3=""
              Imagelogo={<Alarm />}
            />
            <LastIndustryCard
              name="Multiple Project Management"
              content1="Coordinate campaigns across"
              content2="various channels"
              content3=""
              Imagelogo={<Notepad />}
            />
            <LastIndustryCard
              name="Punctuality Rate tracking"
              content1="Track progress and measure"
              content2="success with accurate"
              content3="punctuality data"
              content4=""
              Imagelogo={<Standclock />}
            />
            <LastIndustryCard
              name="Bio-Metrics Verification"
              content1="Ensure that representatives can"
              content2="access platform on mobile devices"
              content3=""
              content4=""
              Imagelogo={<Bio />}
            />
            <LastIndustryCard
              name="Advanced Analytics"
              content1="Discover hidden patterns and"
              content2="trends with advanced analytics"
              content3=""
              Imagelogo={<Notepad />}
            />
            {/* <LastIndustryCard
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
            /> */}
          </FeaturesCard>
        </div>
        <FakeThirdLastIndustry />
        <LastIndustryMainLastDiv />
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

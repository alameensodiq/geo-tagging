import React from "react";
import styled from "styled-components";

const FeaturesGrid = ({
  children,
  info,
  row,
  state,
  top,
  dashboard,
  dashboardmin,
  dashboarder,
  dashboarderer,
  unequal,
  reportunequal,
  nopad,
  superoverview,
  overviewthree,
  overviewreport,
  sub,
  big,
  bigger,
  account,
  dashboardy
}) => {
  return (
    <Flex
      big={big}
      bigger={bigger}
      sub={sub}
      dashboarder={dashboarder}
      overviewreport={overviewreport}
      overviewthree={overviewthree}
      reportunequal={reportunequal}
      nopad={nopad}
      $row={row}
      info={info}
      top={top}
      dashboardy={dashboardy}
      dashboard={dashboard}
      dashboarderer={dashboarderer}
      dashboardmin={dashboardmin}
      unequal={unequal}
      account={account}
    >
      {children}
    </Flex>
  );
};

const Flex = styled.div`
  width: 100%;
  padding-block: ${(props) =>
    props.top ? "50px" : props.info ? "20px" : "0px"};
  padding-left: ${(props) =>
    props.dashboard
      ? "0px"
      : props?.dashboarderer
      ? "0px"
      : props.dashboardmin
      ? "0px"
      : props.info
      ? "0px"
      : props?.sub
      ? "10px"
      : props?.dashboarder
      ? "0px"
      : props?.dashboardy
      ? "10px"
      : "70px"};
  padding-right: ${(props) =>
    props.dashboard
      ? "0px"
      : props?.dashboarderer
      ? "0px"
      : props.dashboardmin
      ? "0px"
      : props.info
      ? "0px"
      : props?.sub
      ? "40px"
      : props?.dashboarder
      ? "0px"
      : props?.dashboardy
      ? "10px"
      : "70px"};
  display: grid;
  row-gap: 30px;
  max-width: 100%;
  column-gap: 20px;
  grid-template-columns: ${(props) =>
    props.unequal
      ? "56% 42%"
      : props.reportunequal
      ? "49% 49%"
      : props.overviewthree
      ? "37.09% 22.1% 37.09%"
      : props?.sub
      ? "33.02% 33.02% 33.02%"
      : props?.big
      ? "40% 60%"
      : props?.bigger
      ? "58.07% 40.09%"
      : `repeat(${props.$row}, 1fr)`};

  @media screen and (max-width: 1200px) {
    width: 100%;
    max-width: 100%;
    display: grid;
    padding-inline: 0px;
    /* grid-gap: 1.6%; */
    margin-bottom: 20px;
    grid-template-columns: ${(props) =>
      props.overviewthree
        ? "1fr 1fr"
        : props.overviewreport
        ? "1fr"
        : props?.account
        ? "1fr"
        : props?.dashboard
        ? "1fr"
        : props?.dashboarderer
        ? "1fr"
        : props?.dashboardmin
        ? "1fr 1fr"
        : "1fr 1fr"};
  }
  @media screen and (max-width: 900px) {
    /* padding-inline: 20px; */
    grid-gap: 1.6%;
    margin-bottom: 20px;
    grid-template-columns: 1fr;
  }
`;

export default FeaturesGrid;

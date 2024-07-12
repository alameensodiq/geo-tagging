import React from 'react';
import styled from 'styled-components';

const FeaturesGrid = ({children, info, row, state, top, 
  dashboard, unequal, reportunequal, nopad, superoverview, overviewthree
, overviewreport, sub, big }) => {
  return (
    <Flex big={big}  sub={sub} overviewreport={overviewreport} overviewthree={overviewthree} reportunequal={reportunequal} nopad={nopad} $row={row} info={info} top={top} dashboard={dashboard} unequal={unequal}>
        {children}
    </Flex>
  )
}


const Flex = styled.div`
width: 100%;
padding-block: ${(props) => props.top ? '50px' : props.info ? '20px' : '0px'};
padding-left: ${(props) => props.dashboard ? '5px' : props.info ? '0px' : props?.sub ? '10px' : '70px'};
padding-right: ${(props) => props.dashboard ? '5px' : props.info ? '0px' : props?.sub ? '40px' : '70px'};
display: grid;
row-gap: 30px;
max-width: 100%;
column-gap: 20px;
grid-template-columns: ${(props) =>
    props.unequal ? '56% 42%' : props.reportunequal ? '49% 49%' : props.overviewthree ?
    '37.09% 22.1% 37.09%' : props?.sub ? '33.02% 33.02% 33.02%' : props?.big ? '50% 50%' : `repeat(${props.$row}, 1fr)`};


@media screen and (max-width: 1200px) {
    width: 100%;
    max-width: 100%;
    display: grid;
    padding-inline: 0px;
    /* grid-gap: 1.6%; */
    margin-bottom: 20px;
    grid-template-columns: ${(props) => props.overviewthree ? '1fr 1fr' : props.overviewreport
    ? '1fr' : '1fr 1fr' };
}    
@media screen and (max-width: 900px) {
    /* padding-inline: 20px; */
    grid-gap: 1.6%;
    margin-bottom: 20px;
    grid-template-columns: 1fr;
}
    
`

export default FeaturesGrid;
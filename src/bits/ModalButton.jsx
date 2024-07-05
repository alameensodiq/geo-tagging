import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Plus} from '../assets/Plus.svg'


export const ModalButton = ({title, background, 
  color, reduce, marg, noborder, onClick, remove}) => {
  return (
    <Flex  remove={remove} background={background} marg={marg} color={color} reduce={reduce} noborder={noborder}>
        <button onClick={() => onClick()} className='authenticationbutton'>
            {
              !remove && <Plus/>
            }
            {title}
        </button>  
    </Flex>
  )
}

const Flex = styled.div`
.authenticationbutton{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    background-color: #1A87D7;
    color: ${(props) => (props.color ? '#FFFFFF' :(props.noborder ? '#8B909A' : '#8D9196'))};
    border-radius: 5px;
    /* border-color: ${(props) => (props.background? '#2563EB' : '#E2E8F0')}; */
    border-width: 1px;
    box-shadow: none;
    outline: none;
    font-size: 12px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    min-height: 40px;
    cursor: pointer;
    border: ${(props) => (props.reduce ? `1px solid #E2E8F0` : 'none')};
    width: ${(props) => (props.remove ? '100px' : '180px')};
    /* border: ${(props) => (props.noborder ? '0px' : `1px solid ${(props) => (props.background ? '#2563EB' : '#E2E8F0')}`)} */
}

@media only screen and (max-width: 900px) {
   
}



    
`

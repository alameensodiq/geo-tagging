import React from 'react'
import styled from 'styled-components'
import FeaturesGrid from './FeaturesGrid'
import TransactionCards from './TransactionCards'
import {ReactComponent as Box} from '../assets/box.svg'
import {ReactComponent as Increase} from '../assets/increase.svg'
import {ReactComponent as Decrease} from '../assets/decrease.svg'

const BusinessRepsTransactionCards = ({nopad, data2}) => {
  return (
    <Flex>
        <FeaturesGrid nopad info row={4}>
            <TransactionCards image={<Box/>} time={110} title='Total work hour'/>
            <TransactionCards time={30} increase={<Increase/>} title='Total active hours'/>
            <TransactionCards time={40} decrease={<Decrease/>} title='Total inactive hours'/>
            <TransactionCards percent={5000} increase={<Increase/>} title='Total earned pay'/>
        </FeaturesGrid>
    </Flex>
  )
}

const Flex = styled.div`
    display: flex;

`

export default BusinessRepsTransactionCards
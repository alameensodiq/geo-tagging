import React from 'react'
import styled from 'styled-components'
import FeaturesGrid from './FeaturesGrid'
import TransactionCards from './TransactionCards'
import {ReactComponent as Box} from '../assets/box.svg'
import {ReactComponent as Increase} from '../assets/increase.svg'
import {ReactComponent as Decrease} from '../assets/decrease.svg'

const BusinessRepsTransactionCards = ({nopad, data}) => {
  console.log(data?.totalActiveHours)
  return (
    <Flex>
        <FeaturesGrid nopad info row={4}>
            <TransactionCards image={<Box/>} time={data?.totalWorkHours ? `${data?.totalWorkHours}` : '0'} title='Total work hour'/>
            <TransactionCards time={data?.totalActiveHours ? data?.totalActiveHours :'0'} increase={<Increase/>} title='Total active hours'/>
            <TransactionCards time={data?.totalInActiveHours ? data?.totalInActiveHours : '0'} decrease={<Decrease/>} title='Total inactive hours'/>
            <TransactionCards percent={data?.totalEarned?.NGN ? data?.totalEarned?.NGN : '0'} increase={<Increase/>} title='Total earned pay'/>
        </FeaturesGrid>
    </Flex>
  )
}

const Flex = styled.div`
    display: flex;

`

export default BusinessRepsTransactionCards
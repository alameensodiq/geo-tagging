import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'


const ClientAdminDashboard = ({title, overviewadmin}) => {

  return (
    <Flex>
        <Navbar title={title} />
       

    </Flex>
  )
}

const Flex = styled.div`
display: flex;
flex-direction: column;
padding-bottom: 30px;


    
`




export default ClientAdminDashboard
import React from 'react'
import styled from 'styled-components'
import Input from './Input'

const AuthInputLabel = ({label, placeholder, auth, name, value, onChange, logo}) => {
  return (
   <Flex>
    <div className='container'>
        <span className='label'>{label}</span>
        <Input name={name} value={value} onChange={onChange} auth={auth} fixedWidth  placeholder={placeholder} logo={logo}/>
    </div>
   </Flex>
  )
}

const Flex = styled.div`
display: flex;
flex-direction: column;
.container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    .label{
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color: #1E1B39;
    }
}
`

export default AuthInputLabel
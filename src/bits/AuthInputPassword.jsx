import React from 'react'
import styled from 'styled-components'
import InputPassword from './InputPassword'

const AuthInputPassword = ({label, placeholder, auth, name, value, onChange}) => {
  return (
   <Flex>
    <div className='container'>
        <span className='label'>{label}</span>
        <InputPassword name={name} value={value} onChange={onChange} auth={auth} fixedWidth   placeholder={placeholder}/>
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
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color: #1E1B39;
    }
}
`

export default AuthInputPassword
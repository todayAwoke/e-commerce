import React from 'react'
import Container from '@/app/components/Container';
import FormWrap from '@/app/components/products/FormWrap';
import RegisterForm from './RegisterForm';
//import { UseFormRegister } from 'react-hook-form';

const Register = () => {
    return (<Container>
        <FormWrap>
            <RegisterForm/>
            
         </FormWrap>
         </Container>
    
  )
}

export default Register
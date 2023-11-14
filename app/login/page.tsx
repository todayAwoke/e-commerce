import React from 'react'
import Container from '@/app/components/Container';
import FormWrap from '../components/products/FormWrap';
import LoginForm from './LoginForm';

const page = () => {
  return (
      <Container>
          <FormWrap>
              <LoginForm/>
          </FormWrap> 
    </Container>
  )
}

export default page
import React from 'react'
import Container from '@/app/components/Container';
import LoginForm from './LoginForm';
import FormWrap from './FormWrap';

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
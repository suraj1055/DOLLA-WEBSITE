import React from 'react';
import { FormInput, Container, FormWrap, Icon, FormButton, FormContent, Form, FormH1, Formlabel, Text } from './SigninElements';


const SignIn = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to='/'>dolla</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1> Sign in to your account</FormH1>
                        <Formlabel htmlFor='for'>Email</Formlabel>
                        <FormInput type='email' required />
                        <Formlabel htmlFor='for'>Password</Formlabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default SignIn

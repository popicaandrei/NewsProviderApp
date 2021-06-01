import React,{ useContext } from 'react';
import {BoxContainer,FormContainer, Input, SubmitButton,MutedLink,BoldLink} from "./common";
import {Marginer} from '../marginer/index';
import { AccountContext } from './accountContext';

export function SignUpForm(props)
{
const {switchToSignIn} = useContext(AccountContext)

return (
    <BoxContainer>
    <FormContainer>
      <Input type="email" placeholder="Email" />
      <Marginer direction="vertical" margin={3} />
      <Input placeholder="Username" />
      <Marginer direction="vertical" margin={3} />
      <Input type="password" placeholder="Password" />
    </FormContainer>
    <Marginer direction="vertical" margin="1.6em" />
    <SubmitButton type="submit">SignUp</SubmitButton>
    <Marginer direction="vertical" margin="1em" />
    <MutedLink href="#">
      Already have an account?{" "}
      <BoldLink onClick={switchToSignIn} href="#">
        SignIn
      </BoldLink>
    </MutedLink>
  </BoxContainer> );
}
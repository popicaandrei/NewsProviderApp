import React, { useContext } from 'react';
import {BoxContainer,FormContainer, Input, SubmitButton,MutedLink,BoldLink} from "./common";
import {Marginer} from '../marginer/index'
import { AccountContext } from './accountContext';

export function LoginForm(props)
{

const {switchToSignUp} = useContext(AccountContext)

return (
    <BoxContainer>
    <FormContainer>
      <Input type="email" placeholder="Email" />
      <Marginer direction="vertical" margin={9} />
      <Input type="password" placeholder="Password" />
    </FormContainer>
    <Marginer direction="vertical" margin={10} />
    <MutedLink href="#">Forget your password?</MutedLink>
    <Marginer direction="vertical" margin="1.6em" />
    <SubmitButton type="submit">SignIn</SubmitButton>
    <Marginer direction="vertical" margin="1em" />
    <MutedLink href="#">
      Don't have an accoun?{" "}
      <BoldLink onClick={switchToSignUp} href="#">
        SignUp
      </BoldLink>
    </MutedLink>
  </BoxContainer> );
}
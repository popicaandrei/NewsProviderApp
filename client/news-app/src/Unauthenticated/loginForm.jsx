import React, { useContext, useState } from 'react';
import {BoxContainer,FormContainer, Input, SubmitButton,MutedLink,BoldLink} from "./common";
import {Marginer} from '../marginer/index'
import { AccountContext } from './accountContext';

export function LoginForm(props)
{

const {switchToSignUp} = useContext(AccountContext);
const [Email, setEmail] = useState(""); 
const [Password, setPassword] = useState("");

const getLoginData = () => {
  console.log(Email);
  console.log(Password);
}

const handleChange = (e) => {
  console.log(e.nativeEvent?.data);
}

return (
    <BoxContainer>
    <FormContainer>
      <Input type="email" placeholder="Email" value={Email} onChange={e => setEmail(e.target?.value)} />
      <Marginer direction="vertical" margin={9} />
      <Input type="password" placeholder="Password" value={Password} onChange={e => setPassword(e.target?.value)} />
    </FormContainer>

    <Marginer direction="vertical" margin={10} />
    <MutedLink href="#">Forget your password?</MutedLink>
    <Marginer direction="vertical" margin="1.6em" />
    <SubmitButton type="submit" onClick={getLoginData}>SignIn</SubmitButton>
    <Marginer direction="vertical" margin="1em" />
    <MutedLink href="#">
      Don't have an accoun?{" "}
      <BoldLink onClick={switchToSignUp} href="#">
        SignUp
      </BoldLink>
    </MutedLink>

  </BoxContainer> );
}
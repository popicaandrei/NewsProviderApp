import React, { useContext, useState } from 'react';
import { BoxContainer, FormContainer, Input, SubmitButton, MutedLink, BoldLink } from "./common";
import { Marginer } from '../marginer/index';
import { AccountContext } from './accountContext';
import { useHistory } from 'react-router';
import { Register } from '../services/AuthService'
import { IsUserLoggedIn } from '../services/AuthService'

export function SignUpForm(props) {
  const { switchToSignIn } = useContext(AccountContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const submitRegisterData = async () => {
     var response = await Register(email,password,username);
     if (response === true && IsUserLoggedIn) {
      history.push("/home");
    } else {
      alert('Invalid Email, Username or Password!');
    }
  }
  return (
    <BoxContainer>

      <FormContainer>
        <Input type="email" value={email} onChange={e => setEmail(e.target?.value)} placeholder="Email" />
        <Marginer direction="vertical" margin={3} />
        <Input placeholder="Username" value={username} onChange={e => setUsername(e.target?.value)} />
        <Marginer direction="vertical" margin={3} />
        <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target?.value)} />
      </FormContainer>

      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={submitRegisterData}>SignUp</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?{" "}
        <BoldLink onClick={switchToSignIn} href="#">
          SignIn
      </BoldLink>
      </MutedLink>

    </BoxContainer>);
}
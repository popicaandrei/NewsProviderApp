import React, { useContext, useState } from 'react';
import { BoxContainer, FormContainer, Input, SubmitButton, MutedLink, BoldLink } from "./common";
import { Marginer } from '../marginer/index'
import { AccountContext } from './accountContext';
import { Login } from '../services/AuthService'
import { IsUserLoggedIn } from '../services/AuthService'
import { useHistory} from 'react-router-dom'

export function LoginForm(props) {

  const { switchToSignUp } = useContext(AccountContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
 
  const submitLoginData = async () => {
    var response = await Login(email, password);
    if (response === true && IsUserLoggedIn) {
      history.push("/home");
    } else {
      alert('Invalid Email or Password!');
    }
  }


  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target?.value)} />
        <Marginer direction="vertical" margin={9} />
        <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target?.value)} />
      </FormContainer>

      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={submitLoginData}>SignIn</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink onClick={switchToSignUp} href="#">
          SignUp
      </BoldLink>
      </MutedLink>

    </BoxContainer>);
}
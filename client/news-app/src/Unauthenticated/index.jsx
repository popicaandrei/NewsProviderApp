import React, { useState } from "react"
import styled from "styled-components"
import { LoginForm } from "./loginForm";
import { motion } from "framer-motion"
import { AccountContext } from "./accountContext";
import { SignUpForm } from "./signupForm";

//Responsible for background 
const AppContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: linear-gradient(to left, #0f0c29, #302b63, #24243e);
`

//Responsible for  the box
const BoxContainer = styled.div`
  width: 350px;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

//Upper side of the box
const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

// For the color shape
const BackDrop = styled(motion.div)`
    width: 160%;
    height: 550px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(60deg);
    top: -290px;
    left: -70px;
    background: #ad5389; 
    background: linear-gradient(to left, #3c1053, #ad5389); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

// Where headertext and smalltext are stored
const HeaderContainer = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
`;

// Big text from top side
const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
  font-family: 'Poppins';
`;

// Small text from top side
const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 13px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
  font-family: 'Poppins';
`;

// Where forms are stored
const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  align:center;
  flex-direction: column;
  padding-right: 1 em;
  padding-left: 1 em;
`;

// States for animation
const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

// Animation characteristics
const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false); //used for determine which state component is currently in
  const [active, setActive] = useState('signin'); //used for determine which form should be loaded

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500)  //building the transition
  }

  const switchToSignUp = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400) // wait for the animation between switching states and rerender
  }

  const switchToSignIn = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400) // wait for the animation between switching states and rerender
  }

  const contextValue = { switchToSignUp, switchToSignIn };

  return (
    <AppContainer>
      <AccountContext.Provider value={contextValue}>
        <BoxContainer>
          <TopContainer>
            <BackDrop
              initial={false}
              animate={isExpanded ? 'expanded' : 'collapsed'}
              variants={backdropVariants}
              transition={expandingTransition}
            />
            {active === "signin" && <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>Back</HeaderText>
              <SmallText>Please sign-in to continue</SmallText>
            </HeaderContainer>
            }
            {active === "signup" && <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>Account</HeaderText>
              <SmallText>Please sign-up to continue</SmallText>
            </HeaderContainer>
            }
          </TopContainer>
          <InnerContainer>
            {active === "signin" && <LoginForm />}
            {active === "signup" && <SignUpForm />}
          </InnerContainer>
        </BoxContainer>
      </AccountContext.Provider>
    </AppContainer>);
}
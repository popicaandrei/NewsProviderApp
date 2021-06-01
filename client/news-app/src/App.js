import './App.css';
import styled from "styled-components"
import { AccountBox } from './Unauthenticated';

const AppContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: linear-gradient(to left, #0f0c29, #302b63, #24243e);
`
function App() {
  return (
    <AppContainer>
    <AccountBox />
    </AppContainer>
  );
}

export default App;

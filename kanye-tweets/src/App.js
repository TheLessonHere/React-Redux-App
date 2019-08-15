import React from 'react';
import Display from './components/Display';
import styled from 'styled-components';

const AppContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

const SiteHeader = styled.h1`
    font-size: 2.5rem;
`;

function App() {
  return (
    <AppContainer>
      <SiteHeader>The Kanye Tweet Sender</SiteHeader>
      <Display />
    </AppContainer>
  );
}

export default App;

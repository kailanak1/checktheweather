import React from 'react'
import WeatherFetcer from './WeatherFecter'
import {Wrapper, Title} from './styles'

function App() {
  return (
    <Wrapper>
      <Title>What's Your Weather?</Title>
      <WeatherFetcer/>
    </Wrapper>
  );
}

export default App;

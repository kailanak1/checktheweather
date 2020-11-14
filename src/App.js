import React from 'react'
import WeatherFetcer from './WeatherFecter'
import styles, {Wrapper, Title} from './styles'

function App() {
  return (
    <Wrapper>
      <Title>Find Out the Weather</Title>
      <WeatherFetcer/>
    </Wrapper>
  );
}

export default App;

import React, {useState} from 'react'
import {Heading, SearchBox, SearchBar} from './styles'


const apiKey = ''
const uri = 'api.openweathermap.org/data/2.5/'

function WeatherFetcher(){
    const [weather, setWeather] = useState({})
    const [city, setCity] = useState('')

    const search = (e) => {
        fetch(`${uri}weather?q=${city}&units=imperial&appid=${apiKey}`, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
        })
        .then(res => 
            res.json())
        .then(result => { 
            console.log(result)
            setWeather(result)}
            )
    }

    return(
    <div>
            <SearchBox>
             <SearchBar 
                type="text"
                placeholder="search"
                onChange={e => setCity(e.target.value)}
                value={city}
                onKeyPress={search}
                />
            </SearchBox>
            <Heading>
               {city}
            </Heading>
            </div>
    )
}

export default WeatherFetcher
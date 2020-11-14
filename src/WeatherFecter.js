import React from 'react'


const APIKEY = ''

class WeatherFetcher extends React.Component{
    constructor(props){
        super(); 
        this.state = {
            weather:'',
            error: false
        }
    }

    componentDidMount(){
        this.setState({
            weather: this.getWeather()
        )}
    } 
    
    getWeather = () => {
        uri = `api.openweathermap.org/data/2.5/weather?q=honolulu&appid=${APIKEY}`
        return fetch (uri)
        .then(res => {
            return res.json()
        })
    }

    render(){
        console.log(this.state)
        return(
            <div>

            </div>
        )
    }

}

export default WeatherFetcher
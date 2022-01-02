import React from "react"
import Info from './components/info'
import Form from './components/form'
import Weather from './components/weather'

const API_KEY = '856279b74139bf1288b45e4a5a2e242b'

class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined
    }

    gettingWeather = async (event) => {
        event.preventDefault()

        const city = event.target.elements.city.value


        if(city) {
               const api_url = await
               fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
               const data = await api_url.json()

               //Восход солнца
               let sunrise = data.sys.sunrise
               var date = new Date(sunrise*1000)
               let timeSunrise = date.toLocaleTimeString()

               //Заход солнца
               let sunset = data.sys.sunset
               var date = new Date(sunset*1000)
               let timeSunset = date.toLocaleTimeString()

               //Давление
               let pressure = data.main.pressure
               let pressureInMmHg =Math.floor(pressure * 0.75006)


             this.setState({
               temp: data.main.temp,
               city: data.name,
               country: data.sys.country,
               sunrise: timeSunrise,
               sunset: timeSunset,
               pressure: pressureInMmHg,
               error: undefined
              })

       }
        else {
                   this.setState({
               temp: undefined,
               city: undefined,
               country: undefined,
               sunrise: undefined,
               sunset: undefined,
               pressure: undefined,
               error: "Введите город!"
                })
            }
    }


    render() {
        return (

        <div className="wrapper">
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 info"><Info /></div>
                        <div className="col-sm-7 form">
                            <Form weatherMethod={this.gettingWeather} />
                            <Weather
                            temp={this.state.temp}
                            city={this.state.city}
                            country={this.state.country}
                            sunrise={this.state.sunrise}
                            sunset={this.state.sunset}
                            pressure = {this.state.pressure}
                            error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>


        );
    }
}




export default App;

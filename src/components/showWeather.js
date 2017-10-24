import React, { Component } from 'react';
import { Text, View } from 'react-native';
import SearchBar from './searchBar';
import Button from './button';
import City from './city';

class ShowWeather extends Component {
    state = { searchCity: '', weather: '' }
    fetchWeather() {
        const API_KEY = '<ADD YOUR API KEY HERE';
        const city = this.state.searchCity;
        const url = `http://api.openweathermap.org/data/2.5//weather?q=${city}&units=metric&APPID=${API_KEY}`;

        fetch(url)
        .then((response) => { 
            if(response.ok) {
                return response.json();
             }                
         })
         .then((data) => {
             this.setState({ weather: data, searchCity: '' });    
               
         })
         .catch((error) => {
             alert('There has been a problem with your fetch operation: ' + error.message);
         }
     ); 

    }

    
    render() {
    return (
        <View style={styles.viewContainer}>
        <View style={styles.showCityStyles}>
            <City weather={this.state.weather} />
        </View>
        <View style={styles.inputViewStyle}>
            <SearchBar
                value={this.state.city}
                onChangeText={(searchCity) => this.setState({ searchCity })}
            />
           <Button 
           onPress={this.fetchWeather.bind(this)}
           />
        </View>
        </View>
    );
}
}
const styles = {
    inputViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    showCityStyles: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',     
    },
    viewContainer: {
        flex: 1,
    }
};

export default ShowWeather;

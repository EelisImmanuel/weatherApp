import React from 'react';
import { Text, View, Image } from 'react-native';

const City = ({ weather }) => {
    const { headerStyle, containerStyle, imageStyle, sunrise } = styles;
    if (weather === '') {
        console.log(weather);
        return (<Text>Search</Text>);
    } else if (weather === undefined) {
        return (<Text>Cannot find city</Text>);
    }
   
    return (
        <View style={containerStyle}>
        <Text style={headerStyle}>{weather.name}</Text>
        <View>{weather.weather.map(x => 
            <View key={x.id}>
                <Text>{x.description}</Text>
                <Image 
                style={imageStyle}
                source={{ uri: `http://openweathermap.org/img/w/${x.icon}.png` }} 
                />
            </View>)
            }
            </View>
            <View style={styles.temperatureViewStyle}>
                <Text style={styles.temperatureStyle}>{weather.main.temp}°C</Text>
            </View>
            <Text>Wind speed: {weather.wind.speed} m/s</Text>
            <View style={sunrise}>
                <Text style={styles.sunriseText}>Sunrise:
                     {new Date(1000 * weather.sys.sunrise).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                </Text>
                <Text style={styles.sunriseText}> Sunset: 
                {new Date(1000 * weather.sys.sunset).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })} 
                </Text>
            </View>
            </View>
    );
};

const styles = {
    headerStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 5
    },
    containerStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        alignSelf: 'center',
        width: 60,
        height: 60
    },
    sunrise: {
        flexDirection: 'row',
        paddingTop: 10
    },
    sunriseText: {
        fontSize: 12,
        paddingLeft: 3
    },
    temperatureStyle: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    temperatureViewStyle: {
        paddingBottom: 10
    }
};

export default City;

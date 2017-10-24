import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
    const { viewStyle, textStyles } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyles}>WeatherApp</Text>
        </View>
    );
};

const styles = {
 viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    position: 'relative'
 },
 textStyles: {
     fontSize: 30
 }
};

export default Header;

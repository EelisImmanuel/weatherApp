import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress }) => {
    const { textStyles, buttonStyles } = styles;
    return (
        <TouchableOpacity style={buttonStyles} onPress={onPress}>
            <Text style={textStyles}>Search</Text>
        </TouchableOpacity>
    );
};
const styles = {
    textStyles: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        paddingTop: 5,
        paddingBottom: 5
    },
    buttonStyles: {
        borderWidth: 1,
        borderColor: '#007aff',
        borderRadius: 3,
        marginLeft: 5,
    }
};

export default Button;

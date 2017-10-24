import React from 'react';
import { Text, View, TextInput } from 'react-native';

const SearchBar = ({ value, onChangeText }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
return (
<View style={containerStyle}>
    <Text style={labelStyle}>City</Text>
    <TextInput 
    autoCorrect={false}
    style={inputStyle}
    value={value}
    onChangeText={onChangeText}
    />
 </View>
);
};
const styles = {
    inputStyle: {
        color: '#000',
        height: 30,
        width: 200,
        padding: 3,
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 3,
        fontSize: 15,
        flex: 4
    },
    labelStyle: {
        flex: 1
    },
    containerStyle: {
        height: 60,
        width: 200,
        flexDirection: 'row',
        alignItems: 'center',
    }

};

export default SearchBar;

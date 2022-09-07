import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import CurrencyFormat from 'react-currency-format';

const DishRow = ({id, name, description, price, image}) => {
    return (
        <TouchableOpacity>
            <View>
                <Text className="text-lg mb-1">{name}</Text>
                <Text className="text-gray-400">{description}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default DishRow;

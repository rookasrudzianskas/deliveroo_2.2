import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Currency from 'react-currency-formatter';

const DishRow = ({id, name, description, price, image}) => {
    return (
        <TouchableOpacity>
            <View>
                <Text className="text-lg mb-1">{name}</Text>
                <Text className="text-gray-400">{description}</Text>
                <Text className="text-gray-400 mt-2">
                    <Currency
                        quantity={price}
                        currency="GBP"
                    />
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default DishRow;

import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Currency from 'react-currency-formatter';
import {urlFor} from "../sanity";

const DishRow = ({id, name, description, price, image}) => {
    return (
        <TouchableOpacity className="bg-white border p-4 border-gray-200">
            <View className="flex-row">
                <View className="flex-1 pr-2">
                    <Text className="text-lg mb-1">{name}</Text>
                    <Text className="text-gray-400">{description}</Text>
                    <Text className="text-gray-400 mt-2">
                        <Currency
                            quantity={price}
                            currency="GBP"
                        />
                    </Text>
                </View>

                <View>
                    <Image style={{borderWidth: 1, borderColor: '#F3F3F4'}} source={{uri: 'https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000'}} className="h-20 w-20 bg-gray-300 p-4" />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default DishRow;

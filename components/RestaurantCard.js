import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import {urlFor} from "../sanity";
// <Ionicons name="ios-star" size={24} color="black" />
// <SimpleLineIcons name="location-pin" size={24} color="black" />
const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
                        }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} className="bg-white  mr-3 shadow">
            <Image source={{uri: urlFor(imgUrl).url()}} className="h-36 w-64 rounded-sm" />
            <View className="px-3 pb-4">
                <Text className="font-bold text-lg pt-2">{title}</Text>

            <View className="flex-row items-center space-x-1">
                <Ionicons name="ios-star" size={22} color="green" />
                <Text className="text-xs text-gray-500">
                    <Text className="text-green-500">{rating}</Text> • {genre}
                </Text>
            </View>
                <View className="flex-row items-center space-x-1">
                    <SimpleLineIcons name="location-pin" size={20} color="gray" />
                    <Text className="text-xs text-gray-500">Nearby • {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default RestaurantCard;

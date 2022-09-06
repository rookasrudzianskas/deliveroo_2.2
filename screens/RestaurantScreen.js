import React, {useLayoutEffect} from 'react';
import {Text, View, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from "@react-navigation/native";
import {urlFor} from "../sanity";
import { Feather } from '@expo/vector-icons';

const RestaurantScreen = () => {
    const {params: {
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
    }} = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    return (
        <ScrollView>
            <View className="relative">
                <Image source={{uri: urlFor(imgUrl).url()}} className="w-full h-56 bg-gray-300 p-4" />
                <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-14 left-5 bg-gray-100 rounded-full p-2">
                    <Feather name="arrow-left" className="rotate-90" size={20} color="#00CCBB" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default RestaurantScreen;

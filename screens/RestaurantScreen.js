import React, {useEffect, useLayoutEffect} from 'react';
import {Text, View, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from "@react-navigation/native";
import {urlFor} from "../sanity";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import {useDispatch} from "react-redux";
import {setRestaurant} from "../features/restaurantSlice";

// <Ionicons name="ios-star" size={24} color="black" />
// <SimpleLineIcons name="location-pin" size={24} color="black" />

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
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    useEffect(() => {
        dispatch(setRestaurant({
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
        }));
    }, [dispatch])
    return (
        <>
            <BasketIcon />
            <ScrollView>
                <View className="relative">
                    <Image source={{uri: urlFor(imgUrl).url()}} className="w-full h-56 bg-gray-300 p-4" />
                    <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-14 left-5 bg-gray-100 rounded-full p-2">
                        <Feather name="arrow-left" className="rotate-90" size={20} color="#00CCBB" />
                    </TouchableOpacity>
                </View>
                <View className="bg-white">
                    <View className="px-4 pt-4">
                        <Text className="text-3xl font-bold">{title}</Text>
                        <View className="flex-row space-x-2 my-1">
                            <View className="flex-row items-center space-x-1">
                                <Ionicons name="ios-star" size={19} opacity={0.5} color="green" />
                                <Text className="text-xs text-gray-500">
                                    <Text className="text-green-500">{rating}</Text> • {genre}
                                </Text>
                            </View>

                            <View className="flex-row items-center space-x-1">
                                <SimpleLineIcons name="location-pin" size={17} opacity={0.4} color="gray" />
                                <Text className="text-xs text-gray-500">
                                    Nearby • {address}
                                </Text>
                            </View>
                        </View>
                        <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
                    </View>
                    <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                        <AntDesign name="questioncircleo" size={19} color="gray" />
                        <Text className="pl-2 flex-1 text-md font-bold">
                            Have a food allergy?
                        </Text>
                        <Ionicons name="chevron-forward" size={17} color="#00CCBB" />
                    </TouchableOpacity>
                </View>
                <View className="pb-36">
                    <Text className="px-4 pt-6 mb-3 font-bold text-xl">
                        Menu
                    </Text>
                    {dishes?.map((dish) => (
                        <DishRow key={dish._id} id={dish._id} name={dish.name} description={dish.short_description} price={dish.price} image={dish.name} />
                    ))}
                </View>
            </ScrollView>
        </>
    );
};

export default RestaurantScreen;

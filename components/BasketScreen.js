import React, {useEffect, useMemo, useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {selectRestaurant} from "../features/restaurantSlice";
import {selectBasketItems} from "../features/basketSlice";
import { Fontisto } from '@expo/vector-icons';

const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items=  useSelector(selectBasketItems);
    const dispatch = useDispatch();
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});
        setGroupedItemsInBasket(groupedItems);
    }, [items]);

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 bg-gray-100">
                <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
                    <View>
                        <Text className="text-lg font-bold text-center">Basket</Text>
                        <Text className="text-center text-gray-400">{restaurant.title}</Text>
                    </View>
                    <TouchableOpacity className="rounded-full bg-gray-100 absolute top-3 right-5" onPress={() => navigation.goBack()}>
                        <Fontisto name="close" size={24} color="#00CCBB" />
                    </TouchableOpacity>
                </View>
                <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
                    <Image source={{uri: 'https://links.papareact.com/wru'}} className="w-7 h-7 bg-gray-300 p-4 rounded-full" />
                    <Text className="flex-1">Deliver in 50-75 min</Text>
                    <TouchableOpacity>
                        <Text className="text-[#00CCBB]">Change</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default BasketScreen;

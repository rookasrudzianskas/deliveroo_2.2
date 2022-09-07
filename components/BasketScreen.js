import React, {useEffect, useMemo, useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
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
        <SafeAreaView>
            <View>
                <View>
                    <View>
                        <Text className="text-lg font-bold text-center">Basket</Text>
                        <Text className="text-center text-gray-400">{restaurant.title}</Text>
                    </View>
                    <TouchableOpacity className="rounded-full bg-gray-100 absolute top-3 right-5" onPress={() => navigation.goBack()}>
                        <Fontisto name="close" size={24} color="#00CCBB" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default BasketScreen;

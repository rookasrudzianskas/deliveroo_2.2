import React, {useEffect, useMemo, useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {selectRestaurant} from "../features/restaurantSlice";
import {removeFromBasket, selectBasketItems, selectBasketTotal} from "../features/basketSlice";
import { Fontisto } from '@expo/vector-icons';
import {urlFor} from "../sanity";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items=  useSelector(selectBasketItems);
    const dispatch = useDispatch();
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
    const basketTotal = useSelector(selectBasketTotal);

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
                <ScrollView className="divide-y divide-gray">
                    {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                        <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                            <Text className="text-[#00CCBB]">{items.length} x</Text>
                            <Image source={{uri:
                                    // urlFor(items[0]?.name).url()
                                'https://www.burgerking.lt/images/optimized/products/big-king-xxl-desktop-3c5c3e5cd7aa0ef4bbf5443d5de1a769.png'
                            }} className="h-12 w-12 rounded-full object-contain" />
                            <Text className="flex-1">{items[0]?.name}</Text>

                            <Text className="text-gray-600">
                                <Currency quantity={items[0]?.price} currency={'GBP'} />
                            </Text>

                            <TouchableOpacity>
                                <Text className="text-[#00CCBB] text-xs" onPress={() => dispatch(removeFromBasket({id: key}))}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                        ))}
                </ScrollView>

                <View className="p-5 bg-white mt-5 space-y-4">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Subtotal</Text>
                        <Text className="text-gray-400">
                            <Currency quantity={basketTotal} currency={'GBP'} />
                        </Text>
                    </View>

                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Delivery fee</Text>
                        <Text className="text-gray-400">
                            <Currency quantity={5.99} currency={'GBP'} />
                        </Text>
                    </View>

                    <View className="flex-row justify-between">
                        <Text className="">Order Total</Text>
                        <Text className="font-extrabold">
                            <Currency quantity={basketTotal + 5.99} currency={'GBP'} />
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default BasketScreen;

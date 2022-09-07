import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Currency from 'react-currency-formatter';
import {urlFor} from "../sanity";
import { SimpleLineIcons } from '@expo/vector-icons';
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId} from "../features/basketSlice";

const DishRow = ({id, name, description, price, image}) => {
    const [isPressed, setIsPressed] = useState(false);
    const items = useSelector((state) => selectBasketItemsWithId(state, id));
    const dispatch = useDispatch();
    const addItemToBasket = () => {
        dispatch(addToBasket({id, name, description, price, image}));
    }
    const removeItemFromBasket = () => {
        if(items.length <= 0) return;
        dispatch(removeFromBasket({id}));
    }
    return (
        <>
            <TouchableOpacity onPress={() => setIsPressed(!isPressed)} className={`bg-white border p-4 border-gray-200 ${isPressed && 'border-b-0'}`}>
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

            {isPressed && (
                <View className="bg-white px-4">
                    <View className="flex-row items-center space-x-2 pb-3">
                        <TouchableOpacity onPress={removeItemFromBasket}>
                            <SimpleLineIcons name="minus" size={20} color={'#00CCBB'}
                                             // color={items.length > 0 ? "#00CCBB" : "gray"}
                            />
                        </TouchableOpacity>
                        <Text>{items.length}</Text>
                        <TouchableOpacity onPress={addItemToBasket}>
                            <SimpleLineIcons name="plus" size={20} color={"#00CCBB"}
                                // color={items.length > 0 ? "#00CCBB" : "gray"}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </>
    );
};

export default DishRow;

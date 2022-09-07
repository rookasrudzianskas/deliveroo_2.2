import React, {useMemo, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {selectRestaurant} from "../features/restaurantSlice";
import {selectBasketItems} from "../features/basketSlice";

const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items=  useSelector(selectBasketItems);
    const dispatch = useDispatch();
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});
        setGroupedItemsInBasket(groupedItems);
    }, [items]);

    console.log(groupedItemsInBasket);

    return (
        <View>

        </View>
    );
};

export default BasketScreen;

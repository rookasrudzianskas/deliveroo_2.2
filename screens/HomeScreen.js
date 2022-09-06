import React, {useLayoutEffect} from 'react';
import {Text, View, StyleSheet, SafeAreaView, Image, TextInput} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            // headerTitle: 'Uizard Wifi Testing',
            headerShown: false
        });
    }, []);

    return (
        <SafeAreaView className="bg-white pt-5">
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image
                    source={{uri: 'https://links.papareact.com/wru'}}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
                <View className="flex-1">
                    <Text className="font-bold color-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl">Current Location
                        <Ionicons name="chevron-down-sharp" className="pt-1" size={20} color="#00CCBB" />
                    </Text>
                </View>
                <AntDesign name="user" size={35} color="#00CCBB" />
            </View>

            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
                    <Ionicons name="search-outline" size={24} color="gray" className="text-gray-200" />
                    <TextInput placeholder={'Restaurants and cuisines'} keyboardType={'default'}/>

                </View>
                <MaterialIcons name="settings-input-component" size={24} color="#00CCBB" />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

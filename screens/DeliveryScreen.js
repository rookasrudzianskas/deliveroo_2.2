import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {selectRestaurant} from "../features/restaurantSlice";
import MapView, {Marker} from 'react-native-maps';
import {Dimensions } from 'react-native';

const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);

    return (
        <View className="bg-[#00CCBB] flex-1">
            <SafeAreaView className="z-50">
                <View className="flex-row justify-between items-center p-5">
                    <TouchableOpacity className="" onPress={() => navigation.navigate('Home')}>
                        <Fontisto name="close" size={24} color="white" />
                    </TouchableOpacity>
                    <Text className="font-light text-white text-lg">Order Help</Text>
                </View>
                <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
                    <View className="flex-row justify-between">
                        <View>
                            <Text className="text-lg text-gray-400">
                                Estimated Arrival
                            </Text>
                            <Text className="text-4xl font-bold">
                                45-55 Minutes
                            </Text>
                        </View>
                        <Image source={{uri: 'https://links.papareact.com/fls'}} className="w-20 h-20" />
                    </View>
                    {/* progress bar */}

                    <Text className="mt-3 text-gray-500">
                        Your order at {restaurant.title} is being prepared
                    </Text>
                    </View>
            </SafeAreaView>

            <MapView initialRegion={{
                latitude: restaurant.lat,
                longitude: restaurant.long,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }} className="flex-1 -mt-10 z-0" mapType="mutedStandard">

                <Marker coordinate={{
                    latitude: restaurant.lat,
                    longitude: restaurant.long,
                }}
                        title={restaurant.title}
                        description={restaurant.short_description}
                        identifier={'origin'}
                        pinColor='#00CCBB'
                />
            </MapView>

            <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
                <Image source={{uri: 'https://links.papareact.com/wru'}} className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5" />
                <View className="flex-1">
                    <Text className="text-lg">Rokas Rudzianskas</Text>
                    <Text className="text-gray-400">Your Rider</Text>
                </View>
                <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
            {/*     done*/}
            </SafeAreaView>
        </View>
    );
};

export default DeliveryScreen;

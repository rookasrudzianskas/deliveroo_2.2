import React, {useEffect} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from "@react-navigation/native";

const PreparingOrderScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery');
        }, 5000);
    }, [])
    return (
        <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
            <Animatable.Image
                source={require('../assets/orderLoading.gif')}
                className="w-96 h-96"
                animation="slideInUp"
                iterationCount={1}
            />

            <Animatable.Text
                animation={"slideInUp"}
                iterationCount={1}
                className="text-lg my-10 text-white font-bold text-center"
            >Waiting for Restaurant to accept your order</Animatable.Text>

        </SafeAreaView>
    );
};

export default PreparingOrderScreen;

import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import { Feather } from '@expo/vector-icons';
import RestaurantCard from "./RestaurantCard";
const FeaturedRow = ({id, title, description}) => {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <Feather name="arrow-right" size={24} color="#00CCBB" />
            </View>
            <Text className="text-xs text-gray-500 px-4">{description}</Text>

            <ScrollView horizontal={true} contentContainerStyle={{paddingHorizontal: 15}} showsHorizontalScrollIndicator={false} className="pt-4">
                <RestaurantCard
                    id="1"
                    imgUrl="https://miro.medium.com/max/480/1*1NNflMbWbsAznQp3roz5Sg.jpeg"
                    title="testing"
                    description="testing"
                    price="testing"
                    rating="testing"
                    genre="testing"
                    address="testing"
                    short_description="Short description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />

                <RestaurantCard
                    id="1"
                    imgUrl="https://miro.medium.com/max/480/1*1NNflMbWbsAznQp3roz5Sg.jpeg"
                    title="testing"
                    description="testing"
                    price="testing"
                    rating="testing"
                    genre="testing"
                    address="testing"
                    short_description="Short description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />

                <RestaurantCard
                    id="1"
                    imgUrl="https://miro.medium.com/max/480/1*1NNflMbWbsAznQp3roz5Sg.jpeg"
                    title="testing"
                    description="testing"
                    price="testing"
                    rating="testing"
                    genre="testing"
                    address="testing"
                    short_description="Short description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
            </ScrollView>
        </View>
    );
};

export default FeaturedRow;

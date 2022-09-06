import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const CategoryCard = ({imgUrl, title}) => {
    return (
        <View>
           <Text>{title}</Text>
        </View>
    );
};

export default CategoryCard;

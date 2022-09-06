import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import CategoryCard from "./CategoryCard";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {

    }, []);
    return (
        <ScrollView contentContainerStyle={{paddingHorizontal: 15, paddingTop: 10}} horizontal={true} showsHorizontalScrollIndicator={false}>
            <CategoryCard imgUrl="https://miro.medium.com/max/480/1*1NNflMbWbsAznQp3roz5Sg.jpeg" title={'testing'} />
            <CategoryCard imgUrl="https://miro.medium.com/max/480/1*1NNflMbWbsAznQp3roz5Sg.jpeg" title={'testing'} />
            <CategoryCard imgUrl="https://miro.medium.com/max/480/1*1NNflMbWbsAznQp3roz5Sg.jpeg" title={'testing'} />
            <CategoryCard imgUrl="https://miro.medium.com/max/480/1*1NNflMbWbsAznQp3roz5Sg.jpeg" title={'testing'} />
        </ScrollView>
    );
};

export default Categories;

import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import CategoryCard from "./CategoryCard";

const Categories = () => {
    return (
        <ScrollView>
            <CategoryCard />
        </ScrollView>
    );
};

export default Categories;

import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import CategoryCard from "./CategoryCard";
import sanityClient, {urlFor} from "../sanity";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        sanityClient.fetch(`
            *[_type == "category"]
        `).then((data) => {
            setCategories(data);
        })
    }, []);
    return (
        <ScrollView contentContainerStyle={{paddingHorizontal: 15, paddingTop: 10}} horizontal={true} showsHorizontalScrollIndicator={false}>
            {categories.map((category) => (
                <CategoryCard key={category._id} id={category._id} title={category.name} imgUrl={urlFor(category.image).width(200).url()} />
            ))}
        </ScrollView>
    );
};

export default Categories;

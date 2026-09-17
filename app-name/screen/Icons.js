import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import data from '../assets/data.json'; 

const Icons = () => {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image 
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
                style={styles.image} 
            />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Component List</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        color: '#333',
    },
    card: {
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 15,
        resizeMode: 'contain',
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 4,
    },
    desc: {
        fontSize: 13,
        color: '#666',
        lineHeight: 18,
    },
});

export default Icons;
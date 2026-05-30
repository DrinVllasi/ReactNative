import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import ProductsData from "../data/products.json";

const ProductsScreen = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(ProductsData);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.screenTitle}>Our Products</Text>

            <FlatList
                data={products}
                keyExtractor={product => product.id.toString()}
                renderItem={({item}) => (
                    <View style={styles.productCard}>
                        <Image 
                            source={{uri:item.image}} 
                            style={styles.productImage}
                            resizeMode="contain"
                        />
                        
                        <View style={styles.productInfo}>
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text style={styles.productCategory}>{item.category}</Text>
                            
                            <Text style={styles.productDescription}>
                                {item.description}
                            </Text>

                            <View style={styles.priceRow}>
                                <Text style={styles.price}>${item.price}</Text>
                            </View>
                        </View>
                    </View>
                )}
                contentContainerStyle={styles.listContainer}
            />

            <TouchableOpacity 
                style={styles.backBtn}
                onPress={() => props.navigation.goBack()}
            >
                <Text style={styles.btnText}>Go Back</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        maxWidth: 500,
    },
    screenTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15,
        color: '#111',
    },
    listContainer: {
        paddingHorizontal: 12,
        paddingBottom: 20,
    },
    productCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
    },
    productImage: {
        width: '100%',
        height: 240,
        backgroundColor: '#fff',
    },
    productInfo: {
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    productName: {
        fontSize: 30,
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#128cdd",
        marginBottom: 4,
    },
    productCategory: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#666',
        marginBottom: 10,
    },
    productDescription: {
        fontSize: 14,
        color: '#555',
        lineHeight: 20,
        marginBottom: 12,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#666',
    },
    stock: {
        fontSize: 13,
        color: '#34C759',
        fontWeight: '600',
    },
    backBtn: {
        backgroundColor: '#34C759',
        margin: 16,
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    }
});

export default ProductsScreen;
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import data from '../assets/data.json'; 

const Icons = () => {
    const renderItem = ({ item }) => (
        <View style={styles.rowItem}>
            <Image 
                source={{ uri: item.image }} 
                style={styles.image} 
            />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                
                {/* 1. Stock / Category Badge */}
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>IN STOCK</Text>
                </View>

                <Text style={styles.desc} numberOfLines={2}>{item.desc}</Text>
            </View>

            {/* 2. Interactive Chevron Arrow */}
            <Text style={styles.chevron}>›</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <Text style={styles.headerTitle}>COLLECTION</Text>
                <Text style={styles.headerSubtitle}>Latest releases</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={styles.divider} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 24,
        paddingTop: 40,
    },
    headerBox: {
        marginBottom: 30,
        borderBottomWidth: 2,
        borderBottomColor: '#000000',
        paddingBottom: 15,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: '900',
        color: '#000000',
        letterSpacing: -0.5,
    },
    headerSubtitle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#666666',
        marginTop: 4,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    rowItem: {
        flexDirection: 'row',
        paddingVertical: 20,
        alignItems: 'center',
    },
    image: {
        width: 110,
        height: 110,
        marginRight: 18,
        borderRadius: 14,
        backgroundColor: '#F8F9FA',
        resizeMode: 'contain',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: '700',
        color: '#111111',
        marginBottom: 4,
        letterSpacing: -0.3,
    },
    badge: {
        alignSelf: 'flex-start',
        backgroundColor: '#F1F3F5',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 6,
        marginBottom: 6,
    },
    badgeText: {
        fontSize: 10,
        fontWeight: '700',
        color: '#333333',
        letterSpacing: 0.5,
    },
    desc: {
        fontSize: 13,
        color: '#555555',
        lineHeight: 18,
    },
    chevron: {
        fontSize: 22,
        color: '#C7C7CC',
        marginLeft: 12,
        fontWeight: '300',
    },
    divider: {
        height: 1,
        backgroundColor: '#a7a7a7',
        width: '100%',
    },
});

export default Icons;
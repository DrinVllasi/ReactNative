import React from "react";
import { Text, StyleSheet, View, FlatList } from 'react-native';

const hobbies = [
    {id:1, hobby: "Football"},
    {id:2, hobby: "Chess"},
    {id:3, hobby: "Gaming"}
]

const HobbiesScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Hobbies List</Text>
            <FlatList
                data={hobbies}
                numColumns={1}
                contentContainerStyle={styles.flatContainer}
                showsVerticalScrollIndicator = {false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => {
                    return <Text style={styles.hobbiesStyle}>{item.id} {item.hobby}</Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff"
    },
    textStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    hobbiesStyle: {
        fontSize: 20,
        padding: 10,
        marginRight: 10,
        marginTop:20,
        backgroundColor: "#f0f0f0",
        borderRadius: 5,
        width: 300,   
        height: 300,
        textAlign: 'center',
        alignContent: 'center',

    },
    flatContainer:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default HobbiesScreen;
import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const MenuScreen = (props) => {
    return(
        <View>
            <Text style={styles.text}>Welcome to Menu Screen</Text>
            <Button
                title="Go to List Screen"
                onPress ={()=>props.navigation.navigate('List')}
            />
            <TouchableOpacity
                style = {styles.btn}
                onPress={() => props.navigation.navigate('Students')}>
                <Text style={styles.btnText}>Go to Students
                     Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style = {styles.btn}
                onPress={() => props.navigation.navigate('Countries')}>
                <Text style={styles.btnText}>Go to Countries Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style = {styles.btn}
                onPress={() => props.navigation.navigate('Profile')}>
                <Text style={styles.btnText}>Go to Profile Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style = {styles.btn}
                onPress={() => props.navigation.navigate('Posts')}>
                <Text style={styles.btnText}>Go to Posts Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style = {styles.btn}
                onPress={() => props.navigation.navigate('Comments')}>
                <Text style={styles.btnText}>Go to Comments Screen</Text>
            </TouchableOpacity>
            <Button
                title="Go to Products screen"
                onPress ={()=>props.navigation.navigate('Products')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical:20
    },

});

export default MenuScreen;
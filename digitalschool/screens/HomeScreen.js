import React from "react"; 
import {View, Text, StyleSheet, Button} from 'react-native';

const HomeScreen = (navigation) => {
    return(
        <View>
            <Text>Welcome to Home Screen</Text>
            <Button 
                title="Go to About Screen"
                onPress={() => navigation.navigate('About')}
            ></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default HomeScreen;
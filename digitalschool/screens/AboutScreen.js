import React from "react"; 
import {View, Text, StyleSheet, Button} from 'react-native';

const AboutScreen = (navigation) => {
    return(
        <View>
            <Text>Welcome to About Screen</Text>
            <Button 
                title="Go to Home Screen"
                onPress={() => navigation.navigate('Home')}
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
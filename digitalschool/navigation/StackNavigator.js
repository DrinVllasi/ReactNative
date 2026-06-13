import React from "react"; 
import {createStackNavigator} from "@reac-navigation/native-stack";

import About from '../screens/AboutScreen';
import Home from "../screens/HomeScreen";

const Stack = createStackNavigator();


const screenOptionStyle = {
    headerStyle: {
        backgroundColor: '#ff6347',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
};

const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={screenOptionStyle}>
            <Stack.screen name='Home' component={Home}/>
        </Stack.Navigator>
    )
}

const AboutStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.screen name='About' component={About}/>
        </Stack.Navigator>
    )
};


export {MainStackNavigator, AboutStackNavigator};
export default MainStackNavigator;
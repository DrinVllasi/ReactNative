import React from "react"; 
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcon} from '@expo/vector-icons';
import {MainStackNavigator, AboutStackNavigator} from './StackNavigator';

const Tab = createBottomTabNavigator();

const tabBarStyle = {
    backgroundColor: '#ff6347',
}

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator 
            screenOption = {{
                headerShown: false,
                tabBarActiveTintColor: '#fff',
                tabBarInActiveTintColor: 'lightgray',
                tabBarStyle,
                tabBarLabelStyle:{
                    fontSize: 12
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component = {MainStackNavigator}
                option ={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcon name='home' size={26} color={color}/>
                    ),
                }}
            
            />

            <Tab.Screen
                name="About"
                component = {AboutStackNavigator}
                option ={{
                    tabBarLabel: "About",
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcon name='video-stabilization' size={26} color={color}/>
                    ),
                }}
            
            />
        </Tab.Navigator>
    )
}
export default BottomTabNavigator;
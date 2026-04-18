import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import ProfileInfo from "../components/ProfileInfo";


const ProfileScreen = () => {
    return (
        <View>
            <ProfileInfo fullname="Drin Vllasi" image={require("../assets/avatarimg.png")} position="Full Stack Web Developer" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standar"/>
        </View>
    );
};


const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    }
});


export default ProfileScreen;
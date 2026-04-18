import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import StudentDetails from "../components/StudentDetails";


const StudentsScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Students Screen</Text>
            <StudentDetails name="Elvedin" image={require("../assets/avatar1.jpg")} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standar"/>
            <StudentDetails name="Drin" image={require("../assets/avatar2.png")} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standar"/>
            <StudentDetails name="Enes" image={require("../assets/avatar3.jpg")} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standar"/>
            <StudentDetails name="Drilon" image={require("../assets/avatar4.jpg")} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standar"/>
            <StudentDetails name="Yll" image={require("../assets/avatar5.jpg")} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standar"/>

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


export default StudentsScreen;
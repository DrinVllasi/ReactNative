import React from "react";  
import {Text, Image, View, StyleSheet} from "react-native";

const Projects = (props) => {
    return(
        <View style={styles.container}>
                <View style={styles.imgWrapper}>
                    <Text style={styles.name}>{props.name}</Text>
                </View>
                <View style={styles.infoWrapper}>
                    <Image source={props.image} style={styles.img}/>
                    
                    <Text style={styles.position}>{props.position}</Text>
                    <Text>{props.description}</Text>
                </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"column"
    },
    cardWrapper: {
        flexDirection: 'column',
        backgroundColor: 'white',
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        alignSelf: 'center',
    },
    img:{
        width: 100,
        height: 100,
    },
    infoWrapper: {
        marginLeft: 20,
        marginTop: 20,
    },
    name:{
        fontWeight: 'bold',
    },
    position: {
        fontWeight: 'bold',
    }
});

export default StudentDetails;
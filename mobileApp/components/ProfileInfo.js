import React from "react";  
import {Text, Image, View, StyleSheet} from "react-native";

const ProfileInfo = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.cardWrapper}>
                <View style={styles.imgWrapper}>
                    <Image source={props.image} style={styles.img}/>
                </View>
                <View style={styles.infoWrapper}>
                    <Text style={styles.fullname}>{props.fullname}</Text>
                    <Text style={styles.position}>{props.position}</Text>
                    <Text>{props.description}</Text>
                </View>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
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
        alignSelf: 'center',
    },
    infoWrapper: {
        marginLeft: 20,
        marginRight: 20,
        flexWrap: 'wrap',
        marginTop: 20,
        alignSelf: 'center',
    },
    fullname:{
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    position: {
        fontWeight: 'bold',
        alignSelf: 'center',
    }
});

export default ProfileInfo;
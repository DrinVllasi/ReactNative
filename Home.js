import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import Swiper from 'react-native-swiper'

const Home =() => {
    return(
        <View style={styles.container}>
            <View style={styles.slideContainer}>
                <Swiper
                autoplay
                activeDotColor="lightblue"
                autoplayTimeout={5}
                >
                    <View style={styles.item}>
                        <Image
                        source={require('../assets/ds.png')}
                        style={styles.imgItem}
                        resizeMode='cover'
                        />
                    </View>

                    <View style={styles.item}>
                        <Image
                        source={require('../assets/ds1.png')}
                        style={styles.imgItem}
                        resizeMode='cover'
                        />
                    </View>

                    <View style={styles.item}>
                        <Image
                        source={require('../assets/ds2.png')}
                        style={styles.imgItem}
                        resizeMode='cover'
                        />
                    </View>

                </Swiper>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    slideContainer: {
        width: '90%',
        height: 200,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 8
    },
    imgItem: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
    }
})
export default Home;


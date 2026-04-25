import React from "react";
import { Text, Image, View, StyleSheet, Button, TouchableOpacity } from "react-native";

const ProfileInfo = ({ image, fullname, position, description, projects }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <View style={styles.imgWrapper}>
          <Image
            source={image}
            style={styles.img}
            resizeMode="cover"
          />
        </View>

        <View style={styles.infoWrapper}>
          <Text style={styles.fullname}>{fullname}</Text>
          <Text style={styles.position}>{position}</Text>
          <Text style={styles.description}>{description}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Hire Him</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "30%",
    alignSelf: "center",
    
  },
  cardWrapper: {
    backgroundColor: "white",
    alignSelf: "center",
    overflow: "hidden",
    height: "200%"
  },
  imgWrapper: {
    backgroundColor: "lightblue",
    width: "100%",
    height: "31%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  img: {
    width: "70%",
    height: 335,
    marginTop: 80,
  },
  infoWrapper: {
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "grey",
    marginHorizontal: 20,
    position: "static",
    marginTop: -50,
    width: "80%",
    height: "20%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  fullname: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  position: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    textAlign: "center",
  },
  button: {
    backgroundColor: "#FFD700", // nice gold/yellow
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 10
  },

  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  }
});

export default ProfileInfo;
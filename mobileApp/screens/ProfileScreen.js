import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import ProfileInfo from "../components/ProfileInfo";

const ProfileScreen = () => {
  const projects = [
    { name: "Project1", img: require("../assets/project1.jpg") },
    { name: "Project2", img: require("../assets/project2.png") },
    { name: "Project3", img: require("../assets/project3.png") },
    { name: "Project4", img: require("../assets/project4.png") },
    { name: "Project5", img: require("../assets/project5.png") },
    { name: "Project6", img: require("../assets/project6.jpg") },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.img} style={styles.projectImage} />
      <Text style={styles.projectItem}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={projects}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.row}
        ListHeaderComponent={
          <>
            <ProfileInfo
              fullname="Drin Vllasi"
              image={require("../assets/avatarimg.png")}
              position="Full Stack Web Developer"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              button="Hire Him"
              projects={projects}
            />

            <Text style={styles.projectsText}>Projects</Text>
          </>
        }
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, // 🔥 CRITICAL
  },

  listContainer: {
    paddingBottom: 30,
  },

  projectsText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "center",
  },

  row: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 12,
    alignItems: "center",
    width: "48%",
    elevation: 3,
  },

  projectImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 8,
  },

  projectItem: {
    textAlign: "center",
    fontSize: 14,
  },
});

export default ProfileScreen;
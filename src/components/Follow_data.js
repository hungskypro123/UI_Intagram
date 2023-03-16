import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Octicons from "react-native-vector-icons/Octicons";

const Follow_data = () => {
  return (
    <View style={styles.container} >
      <View style={styles.avatar_wrap}>
        <Image
          source={require('./../assets/image/Ruffles.png')}
          style={styles.avatar}
        />
      </View>
      <View style={styles.post}>
        <Text style={styles.title}>0,000</Text>
        <Text style={styles.sub_title}>Post</Text>
      </View>
      <View style={styles.post}>
        <Text style={styles.title}>0,000</Text>
        <Text style={styles.sub_title}>Followers</Text>
      </View>
      <View style={styles.post}>
        <Text style={styles.title}>0,000</Text>
        <Text style={styles.sub_title}>Following</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 3,
    // backgroundColor: "green"
  },
  avatar: {
    borderRadius: 50,
    width: 100,
    height: 100,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "white"
  },
  avatar_wrap: {
    borderRadius: 50,
    width: 104,
    height: 104,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "red",
    marginRight: 30,

  },
  post: {
    alignItems: "center",
    marginRight: 15,
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    color: "black"
  },
  sub_title: {
    fontWeight: "400",
    color: "black"
  },

});

export default Follow_data;

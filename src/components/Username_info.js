import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Username_info = () => {
  return (
    <View style={styles.container} >
      <View style={styles.title}>
        <Text style={styles.text_tilte}>Username</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text_content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          <Text style={styles.hashtag}> #hashtag</Text>
        </Text>
      </View>
      <View style={styles.link}>
        <Text style={styles.text_link}>Link goes here</Text>
      </View>
      <View style={styles.btn_wrap}>
        <TouchableOpacity style={styles.btn}>
          <Text
            style={styles.text_btn}
          >
            Edit Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    width: "100%",
    flexDirection: "column",
    paddingVertical: 3,
  },
  title: {
    paddingBottom: 2,
  },
  text_tilte: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black"
  },
  content: {
    paddingBottom: 2,
  },
  text_content: {
    fontWeight: "400",
    color: "black"
  },
  hashtag: {
    color: "blue"
  },
  link: {

  },
  text_link: {
    fontWeight: "400",
    color: "blue"
  },
  btn_wrap: {
    paddingTop: 10,
  },
  btn: {
    borderStyle: "solid",
    borderWidth: 0.9,
    borderColor: "#CBCBCB",
    backgroundColor: "white",
    padding: 9,
    borderRadius: 10,
    minWidth: 120,
  },
  text_btn: {
    fontWeight: "bold",
    fontSize: 14,
    color: "black",
    textAlign: "center",
  }
});

export default Username_info;

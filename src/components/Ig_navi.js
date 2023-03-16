import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Octicons from "react-native-vector-icons/Octicons";

const Ig_navi = () => {
  return (
    <View style={styles.container} >
      <View style={styles.username}>
        <Text style={styles.text_username}>username</Text>
        <AntDesign name='down' size={20} color='black' />
      </View>
      <View style={styles.menu}>
        <Octicons name='diff-added' size={30} color='black' />
        <Feather style={styles.menu_icon} name='menu' size={30} color='black' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 5,
    paddingHorizontal: 16,
    // backgroundColor: "green"
  },
  text_username: {
    fontWeight: 'bold',
    color: "black",
    fontSize: 27,
    paddingRight: 10, 
  },
  username: {
    flexDirection: "row",
    alignItems:'center',
  },
  menu: {
    flexDirection: "row"
  },
  menu_icon: {
    paddingLeft: 20
  }
});

export default Ig_navi;

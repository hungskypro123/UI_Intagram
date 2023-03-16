import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Username_info = () => {
  return (
    <View style={styles.container} >
      <View style={styles.tab_left}>
        <Material name='view-comfy-outline' size={20} color='black' />
      </View>
      <View style={styles.tab_right}>
        <FontAwesome5 name='house-user' size={20} color='black' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 3,
  },
  tab_left: {
    width: "50%",
    alignItems: "center",
  },
  tab_right: {
    width: "50%",
    alignItems: "center",
  },
});

export default Username_info;

import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
// import StoryItem from "./StoryItem";

const storyData = [
  {
    id: 1,
    path: require('./../assets/image/grace-ho.png')
  },
  {
    id: 2,
    path: require('./../assets/image/morgan-aragon.png')
  },
  {
    id: 3,
    path: require('./../assets/image/daniel-apodaca.png')
  },
  {
    id: 4,
    path: require('./../assets/image/Image-goes-here.png')
  },
  {
    id: 5,
    path: require('./../assets/image/add.png')
  }
]
const StoryItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={item.path}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

const Story = () => {
  return (
    <View style={styles.container} >
      <FlatList
        horizontal
        keyExtractor={item => item.id}
        data={storyData}
        renderItem={StoryItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    width: "100%",
    flexDirection: "row",
    paddingTop: 3,
    // backgroundColor: "green"
  },
  text_tilte: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black"
  },
  item: {
    margin: 10,
    height: 55,
  },
  itemPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#CBCBCB",
  },
  itemText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
  },
});

export default Story;

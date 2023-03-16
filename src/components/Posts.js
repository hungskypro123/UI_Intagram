import React, { useState } from "react";
import { View,
   Text,
   Image,
   StyleSheet,
   TouchableOpacity,
   FlatList,
   RefreshControl,
   Dimensions } from "react-native";
import imageData from "../Data/imageData";
import TabCombonent from "./Tab"

const WIDTH = Dimensions.get("screen").width;

const PostsItem = ({ item, index }) => {

  return (
    <View >
      <TouchableOpacity
        style={styles.item}
        onPress={() => {

        }}
      >
        <Image
          source={item.path}
          style={styles.itemPhoto}
        />
      </TouchableOpacity>

    </View>
  );
};

const Posts = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    console.log("làm mới");

    setRefreshing(false);
  };

  return (
    <View style={styles.container} >
      <FlatList
        data={imageData}
        numColumns={3}
        keyExtractor={item => item.id}
        renderItem={PostsItem}
        onEndReached={() => { }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["green"]}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  text_tilte: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black"
  },
  content: {
    paddingBottom: 2,
  },
  item: {
    // margin: 10,
  },
  itemPhoto: {
    width: WIDTH / 3,
    height: 150,
    borderWidth: 4,
    borderColor: "white",
  },
});

export default Posts;

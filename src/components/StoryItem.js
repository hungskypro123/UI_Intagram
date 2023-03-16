import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const StoryItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={require()}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
  },
});

export default StoryItem;

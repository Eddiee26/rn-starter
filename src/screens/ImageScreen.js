import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../Component/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail></ImageDetail>
      <View style={styles.space}></View>
      <ImageDetail></ImageDetail>
      <View style={styles.space}></View>
      <ImageDetail></ImageDetail>
      <View style={styles.space}></View>
      <ImageDetail></ImageDetail>
    </View>
  );
};

const styles = StyleSheet.create({
  space: {
    height: 10,
    width: 10,
  },
});

export default ImageScreen;

import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Home Page</Text>
      <View style={styles.space}></View>

      <Button
        onPress={() => props.navigation.navigate("Componets")}
        title="Go to Component"
      />
      <View style={styles.space}></View>

      <Button
        onPress={() => props.navigation.navigate("ListComponet")}
        title="Go to List"
      />
      <View style={styles.space}></View>
      <Button
        onPress={() => props.navigation.navigate("ImageComponent")}
        title="Go to Image"
      />

      {/* <TouchableOpacity onPress={()=>props.navigation.navigate("Componets")}>
        <Text> Go to Component</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  space:{
    height:10,
    width:10
    
  }
});

export default HomeScreen;

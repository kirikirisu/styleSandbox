//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

// create a component
const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Entypo name="vinyl" size={24} color="black" />
      <Text style={styles.label}>meditate</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 10,
  },
});

//make this component available to the app
export default MyComponent;

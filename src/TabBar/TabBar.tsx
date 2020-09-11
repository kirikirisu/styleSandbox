//import liraries
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import TabElement from "./TabElement";

const { height, width } = Dimensions.get("window");

const TabBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TabElement />
        <TabElement />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  // bottomの再現
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: height / 13,
    width,
    backgroundColor: "red",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});

//make this component available to the app
export default TabBar;

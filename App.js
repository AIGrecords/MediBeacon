import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BgImage from "./bgimage.js";
import Logo from "./logo.js";

const App = () => {
  return (
    <View style = {styles.container}>
      <Logo/>
      <BgImage/>
      <Text style = {styles.text}>Thank you for choosing MediBeacon&#169;</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  text: {
    color: "#5D3FD3",
    fontSize: 18,
    padding: 9,
    fontWeight: "bold",
    fontFamily: "open sans",
    letterSpacing: 2,
    textAlign: "center",
    position: "absolute",
    top: "77%",
    left: "25%",
    right: "25%",
  },
});

export default App;
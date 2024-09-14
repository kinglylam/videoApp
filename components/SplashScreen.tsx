import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import LogoImg from "../assets/Logo.png";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={LogoImg} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 150,
    height: 150,
  },
});

export default SplashScreen;

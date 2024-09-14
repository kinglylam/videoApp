import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { ArrowRightIcon, HeartIcon } from "../../../assets/icons";
import { pallets } from "../../../constants";

const CustomCard = () => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.leftSection}>
        <HeartIcon />
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.title}>Large font title</Text>
        <Text style={styles.subTitle}>
          Sub-title <Text style={styles.emoji}>💎💎💎</Text>
        </Text>
      </View>
      <View style={styles.rightSection}>
        <ArrowRightIcon />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: pallets.lightYellow,
    borderRadius: 15,
    shadowColor: pallets.black,
    shadowOffset: { width: 2, height: 7 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  leftSection: {
    backgroundColor: pallets.lightGreen,
    padding: 15,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: "center",
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  middleSection: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  title: {
    fontSize: 17,
    fontWeight: "500",
    color: "#000",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 14,
    color: "#999",
    marginTop: 4,
    textAlign: "center",
  },
  emoji: {
    fontSize: 10,
  },
  rightSection: {
    paddingHorizontal: 15,
  },
});

export default CustomCard;

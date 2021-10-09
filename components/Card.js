import React from "react";
import { View, StyleSheet } from "react-native";

function Card({ style, children }) {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    elevation: 8,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;

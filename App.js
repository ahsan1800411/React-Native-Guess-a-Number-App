import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "./componenrs/Header";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title='Guess a Number' />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

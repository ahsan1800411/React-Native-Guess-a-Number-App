import React from "react";
import { StyleSheet, View } from "react-native";

import StartGameScreen from "./screens/StartGameScreen";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title='Guess a Number' />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

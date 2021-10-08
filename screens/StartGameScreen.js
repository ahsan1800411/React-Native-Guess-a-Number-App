import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import colors from "../constants/colors";

import Card from "./../componenrs/Card";

function StartGameScreen(props) {
  return (
    <>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new Game</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <TextInput />

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title='Reset'
                onPress={() => {}}
                color={colors["accent"]}
              />
            </View>
            <View style={styles.button}>
              <Button
                title='Confirm'
                onPress={() => {}}
                color={colors.primary}
              />
            </View>
          </View>
        </Card>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 90,
  },
});

export default StartGameScreen;

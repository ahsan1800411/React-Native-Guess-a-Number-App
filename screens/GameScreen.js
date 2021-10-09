import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

const generateRandomBetween = (min, max, exlcude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  if (rndNum === exlcude) {
    return generateRandomBetween(min, max, exlcude);
  } else {
    return rndNum;
  }
};

function GameScreen(props) {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );

  return (
    <View style={styles.screen}>
      <Text>Opponent's Number</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title='LOWER' onPress={() => {}} />
        <Button title='GREATER' onPress={() => {}} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;

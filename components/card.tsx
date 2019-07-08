import React from "react";
import { StyleSheet, View } from "react-native";

export const cardHeight = 250;
export const cardTitleHeight = 45;
export const cardPadding = 10;

const Card = props => {
  const { color, style } = props;
  return (
    <View style={[styles.card, { backgroundColor: color }, { ...style }]} />
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: cardHeight,
    borderRadius: 10,
  },
});

export default Card;

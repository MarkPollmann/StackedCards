import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const cardHeight = 250;
export const cardTitleHeight = 45;
export const cardPadding = 10;

const Card = props => {
  const { color, style, name, price } = props;
  return (
    <View style={[styles.card, { backgroundColor: color }, { ...style }]}>
      <Text style={styles.header}>{name}</Text>
      <Text>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: cardHeight,
    borderRadius: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Card;

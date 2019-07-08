import React from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from "react-native";

import Card, {
  cardPadding,
  cardHeight,
  cardTitleHeight,
} from "./components/card";

const height = Dimensions.get("window").height;

const cards = [
  {
    name: "Shot",
    color: "#a9d0b6",
    price: "30 CHF",
  },
  {
    name: "Juice",
    color: "#e9bbd1",
    price: "64 CHF",
  },
  {
    name: "Mighty Juice",
    color: "#eba65c",
    price: "80 CHF",
  },
  {
    name: "Sandwich",
    color: "#95c3e4",
    price: "85 CHF",
  },
  {
    name: "Combi",
    color: "#1c1c1c",
    price: "145 CHF",
  },
  {
    name: "Signature",
    color: "#a390bc",
    price: "92 CHF",
  },
  {
    name: "Coffee",
    color: "#fef2a0",
    price: "47 CHF",
  },
];

export default class App extends React.Component {
  state = {
    y: new Animated.Value(0),
  };
  render() {
    const { y } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <View style={StyleSheet.absoluteFill}>
          {cards.map((card, i) => {
            const translateY = y.interpolate({
              inputRange: [-cardHeight, 0, cardPadding],
              outputRange: [
                cardHeight * i,
                (cardHeight - cardTitleHeight) * -i,
                (cardHeight - cardPadding) * -i,
              ],
              extrapolateRight: "clamp",
            });
            return (
              <Animated.View
                key={card.name}
                style={{ transform: [{ translateY }] }}>
                <Card {...card} />
              </Animated.View>
            );
          })}
        </View>
        <Animated.ScrollView
          style={{ width: "100%" }}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { y },
                },
              },
            ],
            { useNativeDriver: true },
          )}
        />
        <Text>{JSON.stringify(y, null, 2)}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 16,
  },
  cardContainer: {
    width: "100%",
  },
  content: {
    height: height * 2,
    borderWidth: 5,
    borderColor: "black",
  },
});

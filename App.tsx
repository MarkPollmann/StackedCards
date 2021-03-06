import React from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  View,
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
    color: "#5feaff",
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
      <SafeAreaView style={styles.root}>
        <View style={{ marginTop: 20 }}>
          <View style={StyleSheet.absoluteFill}>
            {cards.map((card, i) => {
              const translateY = y.interpolate({
                inputRange: [-cardHeight, 0, cardPadding * 8],
                outputRange: [
                  (cardHeight * i) / 4,
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
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "black",
  },
  cardContainer: {
    width: "100%",
  },
  content: {
    height: height * 2,
  },
});

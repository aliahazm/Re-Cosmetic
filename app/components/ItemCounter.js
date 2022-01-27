import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Component } from "react";
import colors from "../config/colors";
import { EvilIcons } from "@expo/vector-icons";

export default class ItemCounter extends Component {
  state = { count: 1 };

  setCount = () =>
    this.setState((initialState) => ({
      ...initialState,
      count: this.state.count + 1,
    }));

  setDefault = () =>
    this.setState((initialState) => ({
      ...initialState,
      count: this.state.count - 1,
    }));

  render() {
    const { count } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.setDefault}>
          <EvilIcons name="minus" size={40} color={colors.grey} />
        </TouchableOpacity>
        <View style={{ marginHorizontal: 40 }}>
          <Text style={styles.counterNumber}>{count}</Text>
        </View>
        <TouchableOpacity onPress={this.setCount}>
          <EvilIcons name="plus" size={40} color={colors.grey} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: colors.pink,
    alignItems: "center",
  },

  counterNumber: {
    fontSize: 50,
    color: colors.olive,
    marginTop: 15,
    marginBottom: 15,
    marginVertical: 20,
  },

  button: {
    width: 120,
    height: 50,
    alignItems: "center",
    paddingTop: 10,
    borderRadius: 10,
    backgroundColor: "#6a7d5a",
    marginVertical: 5,
  },

  buttonTitle: {
    fontSize: 20,
    color: "#fff",
  },
});

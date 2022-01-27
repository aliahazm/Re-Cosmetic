import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import firebase from "../Database/firebase";
import AppText from "../app/components/AppText";
import colors from "../app/config/colors";

export default class NameMore extends Component {
  constructor() {
    super();
    this.state = {
      uid: "",
    };
  }

  render() {
    this.state = {
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid,
    };

    return (
      <View>
        <AppText style={styles.title}>{this.state.displayName}</AppText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    fontWeight: "500",
    padding: 5,
    fontSize: 20,
    color: colors.white,
  },
});

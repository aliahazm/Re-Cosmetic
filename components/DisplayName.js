import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import firebase from "../Database/firebase";
import AppText from "../app/components/AppText";
import colors from "../app/config/colors";

export default class DisplayName extends Component {
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
        <AppText style={styles.welcome}>
          Hello, {this.state.displayName}!
        </AppText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    alignSelf: "center",
    fontWeight: "600",
    padding: 5,
    fontSize: 20,
    color: "#6A7D5A",
  },
});

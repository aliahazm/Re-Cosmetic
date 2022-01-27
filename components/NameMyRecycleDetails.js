import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import firebase from "../Database/firebase";
import AppText from "../app/components/AppText";
import colors from "../app/config/colors";

export default class NameMyRecycleDetails extends Component {
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
    color: colors.grey,
    fontSize: 17,
    fontWeight: "bold",
    marginHorizontal: 25,
    // marginVertical: 3,
    justifyContent: "center",
    textAlign: "justify",
    //lineHeight: 19,
  },
});

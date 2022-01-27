import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import AppText from "../app/components/AppText";
import colors from "../app/config/colors";
import firebase from "../Database/firebase";
import { Ionicons } from "@expo/vector-icons";

export default class Logout extends Component {
  constructor() {
    super();
    this.state = {
      uid: "",
    };
  }

  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigation.navigate("Login");
      })
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  render() {
    this.state = {
      displayName: firebase.auth().currentUser.displayName,
      displayEmail: firebase.auth().currentUser.displayEmail,
      mobileNumber: firebase.auth().currentUser.mobileNumber,
      uid: firebase.auth().currentUser.uid,
    };
    return (
      <View
        style={{
          padding: 20,
          paddingTop: 5,
          borderTopWidth: 1,
          borderTopColor: colors.grey,
        }}
      >
        {/* <TouchableOpacity
          onPress={handleSignOut}
          style={{ paddingVertical: 15, marginBottom: 25 }}
        > */}
        <TouchableOpacity
          // onPress={() => this.handleSignOut()}
          onPress={() => navigation.navigate(routes.LOGIN)}
          style={{ paddingVertical: 15, marginBottom: 25 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="log-out-outline"
              size={22}
              color={colors.darkGrey}
            />
            <AppText
              style={{
                fontSize: 15,
                marginLeft: 5,
                fontWeight: "500",
                color: colors.darkGrey,
              }}
            >
              Logout
            </AppText>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Alert,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { auth } from "../../firebase";

const user = auth.currentUser;

export default class ChangePassword extends Component {
  constructor() {
    super();
    this.state = {
      currentPassword: "",
      newPassword: "",
    };
  }

  reauthenticate = (currentPassword) => {
    var credential = auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    return user.reauthenticateWithCredential(credential);
  };

  onChangePasswordPress = () => {
    this.reauthenticate(this.state.currentPassword)
      .then(() => {
        user
          .updatePassword(this.state.newPassword)
          .then(() => {
            Alert.alert("Password was changed");
          })
          .catch((error) => {
            Alert.alert(error.message);
          });
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Current Password"
            value={password}
            onChangeText={(text) => {this.setState({currentPassword: text})}}
            style={styles.input}
            secureTextEntry
          />

          <TextInput
            placeholder="New Password"
            value={password}
            onChangeText={(text) => {this.setState({newPassword: text})}}
            style={styles.input}
            secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.onChangePasswordPress} style={styles.button}>
            <AppText style={styles.buttonText}>Change Password</AppText>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.creme,
  },

  inputContainer: {
    width: "60%",
  },

  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    //borderRadius: 50,
  },

  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  button: {
    backgroundColor: colors.olive,
    width: 155,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 17,
  },
});

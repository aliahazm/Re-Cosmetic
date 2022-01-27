import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Alert,
  Text,
  Image
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import DisplayName from "../../components/DisplayName";
import AppText from "../components/AppText";
import colors from "../config/colors";
//import firebase from "../Database/firebase";

// const user = auth.currentUser;

export default class UpdateProfile extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       currentPassword: "",
  //       newPassword: "",
  //     };
  //   }

  //   reauthenticate = (currentPassword) => {
  //     var credential = auth.EmailAuthProvider.credential(
  //       user.email,
  //       currentPassword
  //     );
  //     return user.reauthenticateWithCredential(credential);
  //   };

  //   onChangePasswordPress = () => {
  //     this.reauthenticate(this.state.currentPassword)
  //       .then(() => {
  //         user
  //           .updatePassword(this.state.newPassword)
  //           .then(() => {
  //             Alert.alert("Password was changed");
  //           })
  //           .catch((error) => {
  //             Alert.alert(error.message);
  //           });
  //       })
  //       .catch((error) => {
  //         Alert.alert(error.message);
  //       });
  //   };
  constructor() {
    super();
    this.state = {
      name: "Aliah",
      email: "",
      phone: "",
      password: "",
    };
  }

  update = () => {
    this.setState({
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
    });

    alert("Profile Updated!");
  };

  render() {
    var password;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View>
          <Image
            source={require("../assets/profile.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 90,
              borderWidth: 0.5,
              borderColor: colors.olive,
              marginBottom: 40,
              marginTop: 40,
              alignSelf: "center",
            }}
          />
          {/* <Text
              style={{
                alignSelf: "center",
                fontWeight: "500",
                marginBottom: 20,
                padding: 5,
                fontSize: 20,
                color: colors.olive,
              }}
            >
              {this.state.name}
            </Text> */}
          {/* <DisplayName /> */}
        </View>
        <View style={styles.inputContainer}>
          <Text>Name:</Text>
          <TextInput
            placeholder="Aleeya Sabreena"
            //value={Text}
            onChangeText={(name) => this.setState({ name })}
            style={styles.input}
          />

          <Text>Email:</Text>
          <TextInput
            placeholder="aleeyasabreena01@gmail.com"
            //value={Text}
            onChangeText={(email) => this.setState({ email })}
            style={styles.input}
          />

          <Text>Phone Number:</Text>
          <TextInput
            placeholder="0123456789"
            //value={Text}
            onChangeText={(phone) => this.setState({ phone })}
            style={styles.input}
          />

          <Text>Password:</Text>
          <TextInput
            placeholder="**************"
            value={password}
            onChangeText={(password) => this.setState({ password })}
            style={styles.input}
            secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.update} style={styles.button}>
            <AppText style={styles.buttonText}>CONFIRM</AppText>
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
    marginBottom: 20,
    borderRadius: 10,
  },

  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  button: {
    backgroundColor: colors.olive,
    width: "100%",
    padding: 15,
    borderRadius: 30,
    marginBottom: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 17,
  },
});

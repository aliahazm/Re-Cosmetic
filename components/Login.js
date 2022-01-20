//import { useNavigation } from "@react-navigation/core";
import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from "react-native";
//import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import firebase from "../Database/firebase";
import AppButton4 from "../app/components/AppButton4";
import AppText from "../app/components/AppText";
import colors from "../app/config/colors";
import routes from "../app/navigation/routes";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isLoading: false,
    };
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  handleLogin = () => {
    if (this.state.email === "" && this.state.password === "") {
      Alert.alert("Enter details to login!");
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          console.log(res);
          console.log("User logged-in successfully!");
          this.setState({
            isLoading: false,
            email: "",
            password: "",
          });
          this.props.navigation.navigate("Dashboard");
        })
        .catch((error) => this.setState({ errorMessage: error.message }));
    }
  };

render() {
  if (this.state.isLoading) {
    return (
      <View style={styles.preloader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={{ margin: 20 }}>
        <Image
          source={require("../assets/Logo.png")}
          style={{
            height: 200,
            width: 200,
            alignSelf: "center",
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, "email")}
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, "password")}
          style={styles.input}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => this.handleLogin()}
          style={styles.button}
        >
          <AppText style={styles.buttonText}>LOGIN</AppText>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate("Signup")}>
          <AppText style={{ fontSize: 12, fontWeight: "bold" }}>
            Not a user? Sign up here!
          </AppText>
        </TouchableOpacity>
      </View>
     
    </KeyboardAvoidingView>
  );
  }
};


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

  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  }
});

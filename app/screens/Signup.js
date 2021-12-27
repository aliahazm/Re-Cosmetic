import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../../firebase";
import AppText from "../components/AppText";
import colors from "../config/colors";
import routes from "../navigation/routes";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate(routes.APP_NAVIGATOR);
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

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
          placeholder="Name"
          //value={string}
          onChangeText={() => {}}
          style={styles.input}
        />

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Phone number"
          //value={string}
          onChangeText={() => {}}
          style={styles.input}
        />

        <TextInput
          placeholder="Create Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignUp} style={styles.button}>
          <AppText style={styles.buttonText}>SIGN UP</AppText>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate(routes.LOGIN)}>
          <AppText style={{ fontSize: 12, fontWeight: "bold" }}>
            Back to Login
          </AppText>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signup;

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

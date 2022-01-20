// import React, { Component } from "react";
// import { KeyboardAvoidingView, StyleSheet, View, Alert, Text } from "react-native";
// import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
// import AppText from "../components/AppText";
// import colors from "../config/colors";
// import { auth } from "../../Database/firebase";

// const user = auth.currentUser;

// export default class ChangePassword extends Component {
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

//   render() {
//     var password;
//     return (
//       <KeyboardAvoidingView style={styles.container} behavior="padding">
//         <View style={styles.inputContainer}>

          
//           <Text>Current Password:</Text>
//           <TextInput
//             //placeholder="Current Password"
//             value={password}
//             onChangeText={(text) => {
//               this.setState({ currentPassword: text });
//             }}
//             style={styles.input}
//             secureTextEntry
//           />
          
          

//           <Text>New Password:</Text>
//           <TextInput
//             //placeholder="New Password"
//             value={password}
//             onChangeText={(text) => {
//               this.setState({ newPassword: text });
//             }}
//             style={styles.input}
//             secureTextEntry
//           />
//         </View>

//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             onPress={this.onChangePasswordPress}
//             style={styles.button}
//           >
//             <AppText style={styles.buttonText}>CONFIRM</AppText>
//           </TouchableOpacity>
//         </View>
//       </KeyboardAvoidingView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: colors.creme,
//   },

//   inputContainer: {
//     width: "60%"
//   },

//   input: {
//     backgroundColor: "white",
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     marginTop: 10,
//     marginBottom: 20,
//     borderRadius: 10
//   },

//   buttonContainer: {
//     width: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 10,
//   },

//   button: {
//     backgroundColor: colors.olive,
//     width: "100%",
//     padding: 15,
//     borderRadius: 30,
//     marginBottom: 10,
//     alignItems: "center",
//   },

//   buttonText: {
//     color: "white",
//     fontWeight: "700",
//     fontSize: 17,
//   },
// });

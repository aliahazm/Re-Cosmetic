import React, { Component } from "react";
import {
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import routes from "../navigation/routes";
import colors from "../config/colors";
import PointsButton from "../components/PointsButton";
import AppText from "../components/AppText";

export default class TransferPoints extends Component {
  constructor() {
    super();
    this.state = {
      points: 0,
      balance: 100
    }
  }

  transfer = () => {
    this.setState({
      points: this.state.points,
      balance: this.state.balance - this.state.points
    })

    let total_transfer = this.state.points/10;

    alert("You have transferred RM" + total_transfer + " to Humanitarian Care Malaysia Berhad!")
  }

  render() {
    return (
      <SafeAreaView
        style={{
          backgroundColor: colors.creme,
          flex: 1,
        }}
      >
        {/* Content */}
        <ScrollView
          style={{
            backgroundColor: colors.pink,
            flex: 1,
          }}
        >
          <View>
            <Image
              source={require("../assets/profile.jpg")}
              style={{
                height: 150,
                width: 150,
                borderRadius: 90,
                borderWidth: 0.5,
                borderColor: colors.olive,
                marginBottom: 20,
                marginTop: 40,
                alignSelf: "center",
              }}
            />
            <AppText
              style={{
                alignSelf: "center",
                fontWeight: "500",
                fontSize: 20,
                color: colors.grey,
              }}
            >
              Current Points
            </AppText>
            <AppText
              style={{
                alignSelf: "center",
                fontWeight: "700",
                padding: 5,
                fontSize: 30,
                color: "#6A7D5A",
                marginBottom: 20,
              }}
            >
              {this.state.balance}
            </AppText>
          </View>

          <View style={{ margin: 20 }}>
            <AppText style={styles.title}>Points: </AppText>
            <TextInput
              style={{
                height: 40,
                borderColor: colors.white,
                borderRadius: 10,
                borderWidth: 1,
                marginBottom: 20,
                marginHorizontal: 15,
                backgroundColor: colors.white,
                paddingVertical: 5,
                paddingHorizontal: 15,
              }}
              onChangeText={(points) => this.setState({ points })}
              keyboardType="numeric"
            />

            <AppText style={styles.title}>Recipient: </AppText>
            <AppText style={styles.recipient}>
              Humanitarian Care Malaysia Berhad
            </AppText>

            <View style={{ alignItems: "center" }}>
              <PointsButton title="Transfer" onPress={this.transfer} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.creme,
    flex: 1,
  },

  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.olive,
    marginVertical: 20,
  },

  previousPage: {
    // position: "absolute",
    // top: 40,
    // left: 30,
    backgroundColor: colors.creme,
    flex: 0.5,
    left: 25,
  },

  menu: {
    backgroundColor: colors.creme,
    flex: 0.5,
    right: -50,
  },

  image: {
    marginVertical: -20,
    marginHorizontal: 60,
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },

  about: {
    color: colors.grey,
    fontSize: 12,
    fontWeight: "bold",
    marginHorizontal: 25,
    marginVertical: 0,
    justifyContent: "center",
    textAlign: "justify",
    lineHeight: 19,
  },
  title: {
    color: colors.grey,
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 15,
    marginVertical: 10,
    justifyContent: "center",
    textAlign: "justify",
    //lineHeight: 19,
  },

  recipient: {
    color: colors.darkGrey,
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 15,
    marginBottom: 20,
    justifyContent: "center",
    textAlign: "justify",
    //lineHeight: 19,
  },
});

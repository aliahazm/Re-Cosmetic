import React, { Component, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import DatePicker from "react-native-datepicker";
import moment from "moment";
import { EvilIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default class MyDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = { date: null, dt: null, registrationDate: "" };
  }
  checkValue(str, max) {
    if (str.charAt(0) !== "0" || str == "00") {
      var num = parseInt(str);
      if (isNaN(num) || num <= 0 || num > max) num = 1;
      str =
        num > parseInt(max.toString().charAt(0)) && num.toString().length == 1
          ? "0" + num
          : num.toString();
    }
    return str;
  }
  dateTimeInputChangeHandler = (e) => {
    this.type = "text";
    var input = e;
    var expr = new RegExp(/\D\/$/);
    if (expr.test(input)) input = input.substr(0, input.length - 3);
    var values = input.split("/").map(function (v) {
      return v.replace(/\D/g, "");
    });
    if (values[1]) values[1] = this.checkValue(values[1], 12);
    if (values[0]) values[0] = this.checkValue(values[0], 31);
    var output = values.map(function (v, i) {
      return v.length == 2 && i < 2 ? v + "/" : v;
    });
    this.setState({
      registrationDate: output.join("").substr(0, 14),
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <DatePicker
          showIcon={false}
          androidMode="spinner"
          style={{ width: 250 }}
          date={this.state.date}
          mode="date"
          placeholder="DD-MM-YYYY"
          format="dddd, DD-MM-YYYY"
          minDate={moment().format("DD-MM-YYYY")}
          confirmBtnText="Done"
          cancelBtnText="Cancel"
          customStyles={{
            placeholderText: {
              backgroundColor: colors.white,
              fontSize: 17.5,
              marginLeft: -100,
              color: colors.grey,
              fontWeight: "300",
            },

            dateInput: {
              backgroundColor: colors.white,
              borderRadius: 50,
              flexDirection: "row",
              borderWidth: 0,
              height: 50,
            },

            dateText: {
              color: colors.olive,
              fontSize: 17.5,
              marginLeft: -50,
              fontWeight: "500",
            },
          }}
          onDateChange={(date) => {
            this.setState({ date: date });
          }}
        />
        <EvilIcons
          name="calendar"
          size={33}
          color="#707070"
          style={{ marginTop: 8, marginLeft: -45 }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 12,
    marginBottom: 12,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

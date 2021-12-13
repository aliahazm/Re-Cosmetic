import React, {Component} from "react";
import {
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import routes from "../navigation/routes";
import colors from "../config/colors";
import PointsButton from "../components/PointsButton";


export default class TransferPoints extends Component {

    constructor(){
        super();
        this.state = {
            points: 0,
            balance: 100
        }

        this.transfer = () => {
            let balance_amount = this.state.balance;
            let points_transfer = this.state.points;

            balance_amount =- points_transfer;

            alert("You have transferred RM" + points_transfer + " to Humanitarian Care Malaysia Berhad!");
        }
    }

    render(){
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
        <Image source={require('../assets/profile.jpg')} style={{
          height:150, 
          width: 150, 
          borderRadius: 90,
          borderWidth: 0.5,
          borderColor: colors.olive, 
          marginBottom: 10, 
          marginTop: 40, 
          alignSelf: 'center' 
         }}/>
         <Text style={{alignSelf: 'center', fontWeight:'500', fontSize: 20, color: colors.grey}}>Current Points</Text>
         <Text style={{alignSelf: 'center', fontWeight:'700', padding: 5, fontSize: 30, color: '#6A7D5A', marginBottom: 20}}>{this.state.balance}</Text>
       </View>
       
       <View>
       <Text>Points: </Text>
        <TextInput 
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} 
            onChangeText={(points) => this.setState({points})}
            keyboardType='numeric'
        />

        <Text>Recipient: </Text>
        <TextInput 
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} 
            placeholder='Humanitarian Care Malaysia Berhad'
        />

        <PointsButton 
            title= "Transfer"
            onPress={this.transfer}
         />
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

  
});


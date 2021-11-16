import React from "react";
import {
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import PointsButton from "../components/PointsButton";
function More(props) {
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
       <View style={{
           flexDirection: "row"
       }}>
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
         <Text style={{alignSelf: 'center', fontWeight:'700', padding: 5, fontSize: 30, color: '#6A7D5A', marginBottom: 20}}>100 pts</Text>
        </View>

         <View style={{
            
         }}>
         
        <TouchableOpacity onPress={() => navigation.navigate(routes.HOW_IT_WORKS)} style={{paddingVertical: 15, marginBottom: 25}}>
          <View style={{flexDirection: 'row', alignItems: 'center', }}>
            <Ionicons name='exit-outline' size={22}/>
            <Text style={{fontSize: 15, marginLeft: 5, fontWeight: '500'}}>
              How It Works</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate(routes.ABOUT_US)} style={{paddingVertical: 15, marginBottom: 25}}>
          <View style={{flexDirection: 'row', alignItems: 'center', }}>
            <Ionicons name='exit-outline' size={22}/>
            <Text style={{fontSize: 15, marginLeft: 5, fontWeight: '500'}}>
              About Us</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate(routes.TERMS_AND_CONDITIONS)} style={{paddingVertical: 15, marginBottom: 25}}>
          <View style={{flexDirection: 'row', alignItems: 'center', }}>
            <Ionicons name='exit-outline' size={22}/>
            <Text style={{fontSize: 15, marginLeft: 5, fontWeight: '500'}}>
              Terms and Conditions</Text>
          </View>
        </TouchableOpacity>

        <View style={{
        padding: 20, paddingTop: 5, borderTopWidth: 1, borderTopColor: '#ccc'
        }}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15, marginBottom: 25}}>
          <View style={{flexDirection: 'row', alignItems: 'center', }}>
            <Ionicons name='exit-outline' size={22}/>
            <Text style={{fontSize: 15, marginLeft: 5, fontWeight: '500'}}>
              Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
         

         </View>
       

       
      </ScrollView>
    </SafeAreaView>
  );
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
export default More;
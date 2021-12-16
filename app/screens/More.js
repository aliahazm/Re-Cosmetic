import React from "react";
import {
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import routes from "../navigation/routes";
import colors from "../config/colors";
import PointsButton from "../components/PointsButton";
import styles from "../config/styles";
function More({ navigation }) {
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
        <View
          style={{
            flexDirection: "row",
            backgroundColor: colors.lightGreen,
              padding: 20,
              paddingTop: 20,
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
          
          }}
        >
          <Image
            source={require("../assets/profile.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 90,
              borderWidth: 0.5,
              borderColor: colors.olive,
              margin: 20,
            }}
          />

          <View style={{ marginTop: 40 }}>
            <Text
              style={{
                alignSelf: "center",
                fontWeight: "500",
                padding: 5,
                fontSize: 20,
                color: 'black'
              }}
            >
              Alya Sabreena
            </Text>

            <Text
              style={{
                fontWeight: "500",
                padding: 5,
                fontSize: 15,
                color: 'black'
              }}
            >
              100pts
            </Text>
          </View>
        </View>

        <View style={{marginTop: 20}}>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.RECYCLE_STEPS)}
            style={style.touchable}
          >
            <View style={style.option}>
              <Ionicons name="information-outline" size={22} />
              <Text style={{ fontSize: 15, marginLeft: 5, fontWeight: "500" }}>
                How It Works
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate(routes.ABOUT_US)}
            style={style.touchable}
          >
            <View style= {style.option}>
              <Ionicons name="people-outline" size={22} />
              <Text style={{ fontSize: 15, marginLeft: 5, fontWeight: "500" }}>
                About Us
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate(routes.TERMS_AND_CONDITIONS)}
            style={style.touchable}
          >
            <View style={style.option}>
              <Ionicons name="reader-outline" size={22} />
              <Text style={{ fontSize: 15, marginLeft: 5, fontWeight: "500" }}>
                Terms and Conditions
              </Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              padding: 20,
              paddingTop: 5,
              borderTopWidth: 1,
              borderTopColor: "#ccc",
            }}
          >
            <TouchableOpacity
              onPress={() => {}}
              style={{ paddingVertical: 15, marginBottom: 25 }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="exit-outline" size={22} />
                <Text
                  style={{ fontSize: 15, marginLeft: 5, fontWeight: "500" }}
                >
                  Logout
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.creme,
    flex: 1,
  },

 option: {
  flexDirection: "row", 
  alignItems: "center",
  paddingHorizontal: 20
 },
  
  touchable: {
    paddingVertical: 20, 
    
 }
});
export default More;

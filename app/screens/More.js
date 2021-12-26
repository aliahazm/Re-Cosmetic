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
import { auth } from "../../firebase";
import AppText from "../components/AppText";

function More({ navigation }) {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace(routes.LOGIN);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.olive,
        flex: 1,
      }}
    >
      {/* Content */}
      <View
        style={{
          backgroundColor: colors.pink,
          flex: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: colors.olive,
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
              borderColor: colors.grey,
              margin: 20,
            }}
          />

          <View style={{ marginTop: 40 }}>
            <AppText
              style={{
                alignSelf: "center",
                fontWeight: "500",
                padding: 5,
                fontSize: 20,
                color: colors.white,
              }}
            >
              Alya Sabreena
            </AppText>

            <AppText
              style={{
                fontWeight: "500",
                padding: 5,
                fontSize: 15,
                color: colors.white,
              }}
            >
              100 points
            </AppText>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.RECYCLE_STEPS)}
            style={style.touchable}
          >
            <View style={style.option}>
              <Ionicons
                name="information-outline"
                size={22}
                color={colors.darkGrey}
              />
              <AppText
                style={{
                  fontSize: 15,
                  marginLeft: 5,
                  fontWeight: "500",
                  color: colors.darkGrey,
                }}
              >
                How It Works
              </AppText>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate(routes.ABOUT_US)}
            style={style.touchable}
          >
            <View style={style.option}>
              <Ionicons
                name="people-outline"
                size={22}
                color={colors.darkGrey}
              />
              <AppText
                style={{
                  fontSize: 15,
                  marginLeft: 5,
                  fontWeight: "500",
                  color: colors.darkGrey,
                }}
              >
                About Us
              </AppText>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate(routes.TERMS_AND_CONDITIONS)}
            style={style.touchable}
          >
            <View style={style.option}>
              <Ionicons
                name="reader-outline"
                size={22}
                color={colors.darkGrey}
              />
              <AppText
                style={{
                  fontSize: 15,
                  marginLeft: 5,
                  fontWeight: "500",
                  color: colors.darkGrey,
                }}
              >
                Terms and Conditions
              </AppText>
            </View>
          </TouchableOpacity>

          <View
            style={{
              padding: 20,
              paddingTop: 5,
              borderTopWidth: 1,
              borderTopColor: colors.grey,
            }}
          >
            {/* <TouchableOpacity
              onPress={handleSignOut}
              style={{ paddingVertical: 15, marginBottom: 25 }}
            > */}
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.LOGIN)}
              style={{ paddingVertical: 15, marginBottom: 25 }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons
                  name="exit-outline"
                  size={22}
                  color={colors.darkGrey}
                />
                <AppText
                  style={{
                    fontSize: 15,
                    marginLeft: 5,
                    fontWeight: "500",
                    color: colors.darkGrey,
                  }}
                >
                  Logout
                </AppText>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    paddingHorizontal: 20,
    //backgroundColor: colors.white,
    //height: 40,
  },

  touchable: {
    paddingVertical: 20,
  },
});
export default More;

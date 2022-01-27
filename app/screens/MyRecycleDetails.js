import React from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";

import routes from "../navigation/routes";
import Icon from "../components/Icon";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../config/colors";
import NameMyRecycleDetails from "../../components/NameMyRecycleDetails";

function MyRecycleDetails({ navigation }) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.creme,
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: colors.pink,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: colors.white,
            flex: 0.3,
            width: "90%",
            height: 120,
            borderColor: colors.grey,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
            marginTop: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <Image
            style={styles.image}
            source={require("../assets/QRCode.png")}
          />
        </View>

        <View
          style={{
            backgroundColor: colors.white,
            flex: 0.6,
            width: "90%",
            height: 120,
            borderColor: colors.grey,
            borderRadius: 25,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <AppText style={styles.category}>Name</AppText>
          <NameMyRecycleDetails />
          <AppText style={styles.category}>Recycle Item</AppText>
          <AppText style={styles.title}>
            2x MiliandRose Liquid Matte Container
          </AppText>
          <AppText style={styles.category}>Date</AppText>
          <AppText style={styles.title}>Friday, 25-2-2022</AppText>
          <AppText style={styles.category}>Venue</AppText>
          <AppText style={styles.title}>MiliandRose Central i-City</AppText>
          <View style={{ flexDirection: "row" }}>
            <AppText style={styles.category}>RC Points To Be Earned</AppText>
            <View style={{ marginTop: 15, marginLeft: -26 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate(routes.POINT)}
              >
                <Icon
                  name="information-outline"
                  size={28}
                  backgroundColor={colors.white}
                  iconColor={colors.grey}
                />
              </TouchableOpacity>
            </View>
          </View>
          <AppText style={styles.title}>20 Points</AppText>
          <AppText style={styles.category}>Transaction Number</AppText>
          <AppText style={styles.title}>#25299</AppText>
        </View>

        <View
          style={{
            width: "90%",
            flex: 0.15,
          }}
        >
          <AppButton
            title="SAVE AS IMAGE"
            onPress={() => Alert.alert("Success", "Image Saved Successfully!")}
          ></AppButton>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.creme,
    flex: 1,
  },

  image: {
    marginVertical: -20,
    marginHorizontal: 60,
    width: 195,
    height: 195,
    justifyContent: "center",
    alignItems: "center",
  },

  serviceTitle: {
    color: colors.grey,
    fontSize: 14,
    fontWeight: "bold",
    marginHorizontal: 25,
    marginVertical: 0,
    justifyContent: "center",
    textAlign: "justify",
    lineHeight: 19,
  },

  tnc: {
    color: colors.grey,
    fontSize: 12,
    fontWeight: "bold",
    marginHorizontal: 25,
    marginVertical: 0,
    justifyContent: "center",
    textAlign: "justify",
    lineHeight: 19,
  },

  category: {
    color: colors.grey,
    fontSize: 14,
    marginHorizontal: 25,
    marginTop: 20,
    justifyContent: "center",
    textAlign: "justify",
  },

  title: {
    color: colors.grey,
    fontSize: 17,
    fontWeight: "bold",
    marginHorizontal: 25,
    justifyContent: "center",
    textAlign: "justify",
  },
});
export default MyRecycleDetails;

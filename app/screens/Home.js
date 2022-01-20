import React from "react";
import {
  ScrollView,
  Dimensions,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import DisplayName from "../../components/DisplayName";
import AppText from "../components/AppText";
import ImageSlider from "../components/ImageSlider";
import colors from "../config/colors";
import routes from "../navigation/routes";

const images = [
  "https://c.neh.tw/thumb/f/720/cbf20c51c65b4950afdc.jpg",
  "https://freedesignfile.com/upload/2018/11/Honey-humectants-cosmetics-poster-template-vector-03.jpg",
  "https://c.neh.tw/thumb/f/720/3947d7b2fd944e39a1c0.jpg",
];

const { width } = Dimensions.get("window");
const height = (width * 60) / 60;

function Home({ navigation }) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.pink,
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
            paddingTop: 50,
            paddingBottom: 50,
          }}
        >
          <Image
            source={require("../assets/profile.jpg")}
            style={{
              height: 110,
              width: 110,
              borderRadius: 90,
              borderWidth: 0.5,
              borderColor: colors.olive,
              marginLeft: 30,
            }}
          />

          <View style={{ marginLeft: 20 }}>
            <Text
              style={{
                alignSelf: "center",
                fontWeight: "500",
                padding: 5,
                fontSize: 30,
                color: "#6A7D5A",
              }}
            >
              ━━━━━━━━
            </Text>
            <DisplayName/>
            {/* <AppText
              style={{
                alignSelf: "center",
                fontWeight: "600",
                padding: 5,
                fontSize: 22,
                color: "#6A7D5A",
              }}
            >
              HELLO, BEAUTIFUL!
            </AppText> */}

            <Text
              style={{
                alignSelf: "center",
                fontWeight: "500",
                padding: 5,
                fontSize: 30,
                color: "#6A7D5A",
              }}
            >
              ━━━━━━━━
            </Text>
          </View>
        </View>

        <ImageSlider images={images} />

        <AppText
          style={{
            fontSize: 20,
            padding: 20,
            marginTop: 30,
            alignSelf: "center",
            fontWeight: "bold",
            color: colors.olive,
          }}
        >
          UPCOMING EVENTS
        </AppText>

        <Image
          source={require("../assets/event2.jpg")}
          style={{ height, width }}
        />

        <Image
          source={require("../assets/event1.jpg")}
          style={{ height: 300, width }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;

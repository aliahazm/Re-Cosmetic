import React from "react";
import {
  ScrollView,
  Dimensions,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Text,
} from "react-native";
import ImageSlider from "../components/ImageSlider";
import colors from "../config/colors";

const images = [
  "../assets/adver1.jpg",
  "../assets/adver2.jpg",
  "../assets/adver3.jpg",
];

const { width } = Dimensions.get("window");
const height = (width * 60) / 60;

function Home({ navigation }) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.creme,
        flex: 1,
      }}
    >
      {/* Content */}
      <ScrollView>
        <Text style={{alignSelf: "center",
                fontWeight: "700",
                padding: 5,
                fontSize: 30,
                color: "#6A7D5A",
                marginBottom: 20,}}>HELLO, BEAUTIFUL!</Text>
        <ImageSlider images={images} />

        <ScrollView>
          <Text>UPCOMING EVENTS</Text>
          <Image
            source={require("../assets/event2.jpg")}
            style={{ height, width }}
          />
          <Image
            source={require("../assets/event1.jpg")}
            style={{ height: 300, width }}
          />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;

import React from "react";
import { Image, View } from "react-native";
//import { MaterialCommunityIcons } from "@expo/vector-icons";
function ImageButton({
  //name,
  source,
  size = 150,
  //backgroundColor = "#000",
  //iconColor = "#fff",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        //backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={source} size={size * 0.5} />
    </View>
  );
}

export default ImageButton;

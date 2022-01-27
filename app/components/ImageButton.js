import React from "react";
import { Image, View } from "react-native";

function ImageButton({ source, size = 150 }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={source} size={size * 0.5} />
    </View>
  );
}

export default ImageButton;

import React from "react";
import { Text, ImageBackground, View } from "react-native";
import tw from "twrnc";

const MotivationCard = ({ image, text }) => {
  return (
    <View style={tw`m-4 rounded-lg overflow-hidden shadow-lg`}>
      <ImageBackground
        source={{ uri: image }}
        style={tw`w-full h-48 flex justify-end`}
        imageStyle={tw`rounded-lg`}
      >
        <View style={tw`p-4 bg-black bg-opacity-50 rounded-b-lg`}>
          <Text style={tw`text-lg font-extrabold text-white`} numberOfLines={2}>
            {text}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MotivationCard;

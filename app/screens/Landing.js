import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Button } from "react-native-elements";
import tw from "twrnc";

const LandingScreen = ({ navigation }) => {
  return (
    <View style={tw`flex-1`}>
      {/* Fullscreen background */}
      <ImageBackground
        style={tw`absolute inset-0`}
        source={{
          uri: "https://cdn.pixabay.com/photo/2024/11/02/15/31/cat-9169528_640.jpg",
        }}
        resizeMode="cover"
      />

      {/* Overlay content */}
      <View
        style={tw`flex-1 justify-center items-center px-6 bg-black bg-opacity-20`}
      >
        {/* Heading */}
        <Text style={tw`text-white text-4xl font-bold text-center mb-6`}>
          Shape Your Karma, Shape Your Future
        </Text>

        {/* Subtitle */}
        <Text style={tw`text-white text-lg text-center mb-10`}>
          Embrace mindful actions and positive change to create the life you
          deserve.
        </Text>

        {/* Action Button */}
        <Button
          title="Begin Your Journey"
          buttonStyle={tw`bg-white rounded-full w-72 h-12`}
          titleStyle={tw`text-black text-lg font-semibold`}
          onPress={() => navigation.navigate("Categories")}
        />
      </View>
    </View>
  );
};

export default LandingScreen;

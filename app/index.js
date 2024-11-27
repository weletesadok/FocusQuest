import React from "react";
import { Text, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import tw from "twrnc";
import { router } from "expo-router";

const slides = [
  {
    title: "Welcome to FocusQuest",
    description: "Your journey to productivity starts here!",
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    title: "Stay Organized",
    description: "Track your tasks and goals effortlessly.",
    image: "https://picsum.photos/800/600?random=2",
  },
  {
    title: "Boost Focus",
    description: "Eliminate distractions and maximize productivity.",
    image: "https://picsum.photos/800/600?random=3",
  },
  {
    title: "Achieve More",
    description: "Accomplish your dreams with our guided plans.",
    image: "https://picsum.photos/800/600?random=48",
  },
];

const OnboardingScreen = () => {
  return (
    <Onboarding
      pages={slides.map((slide) => ({
        backgroundColor: "#fff",
        image: (
          <Image
            source={{ uri: slide.image }}
            style={tw`w-64 h-40 rounded-lg`}
          />
        ),
        title: (
          <Text style={tw`text-lg font-bold text-gray-800`}>{slide.title}</Text>
        ),
        subtitle: (
          <Text style={tw`text-sm text-gray-600 mt-2`}>
            {slide.description}
          </Text>
        ),
      }))}
      onDone={() => router.replace("/main/home")}
      onSkip={() => router.replace("/main/home")}
    />
  );
};

export default OnboardingScreen;

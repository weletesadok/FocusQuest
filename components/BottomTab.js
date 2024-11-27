import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-elements/dist/icons/Icon";
import tw from "twrnc";

const BottomTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { link: "./home", icon: "lightbulb", name: "Quest" },
    { link: "./todo", icon: "calendar-today", name: "Todo" },
    { link: "./motivation", icon: "spa", name: "Motivation" },
    { link: "./book", icon: "book", name: "Books" },
  ];

  return (
    <View
      style={tw`flex-row justify-around w-[90%] rounded-2xl mx-auto mb-2 bg-black p-2`}
    >
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={tw`items-center p-3 ${
            activeTab === index ? "bg-green-500 rounded-lg" : ""
          }`}
          onPress={() => {
            setActiveTab(index);
            router.navigate(tab.link);
          }}
        >
          <Text>
            <Icon
              name={tab.icon}
              type="material"
              size={24}
              color={activeTab === index ? "black" : "white"}
            />
          </Text>
          <Text
            style={tw`mt-1 text-sm ${
              activeTab === index ? "text-black font-bold" : "text-white"
            }`}
          >
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomTab;

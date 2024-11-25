import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-elements/dist/icons/Icon";
import tw from "twrnc";
const BottomTab = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    { link: "Home", icon: "home", name: "Home" },
    { link: "Search", icon: "search", name: "Search" },
    { link: "Profile", icon: "person", name: "Profile" },
    { link: "Settings", icon: "settings", name: "Settings" },
  ];

  return (
    <View
      style={tw`flex-row justify-around w-[90%] rounded-2xl mx-auto mb-2 opacity-90`}
    >
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={tw`items-center p-3 ${
            activeTab === index ? "bg-blue-700 rounded-lg" : ""
          }`}
          onPress={() => {
            console.log(tab.name);
            setActiveTab(index);
          }}
        >
          <Icon
            name={tab.icon}
            type="material"
            size={24}
            color={activeTab === index ? "white" : "black"}
          />
          <Text
            style={tw`mt-1 text-sm ${
              activeTab === index ? "text-white font-bold" : "text-black"
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

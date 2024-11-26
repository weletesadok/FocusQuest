import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import tw from "twrnc";
import { Icon } from "react-native-elements";

const DashboardBottom = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={tw`p-5 bg-white flex-1`}>
        <Text style={tw`text-2xl font-bold text-black text-center mb-6`}>
          Take Charge of Your Journey!
        </Text>

        <TouchableOpacity
          style={tw`flex-row items-center bg-green-500 py-3 px-5 rounded-lg mb-4`}
          onPress={() => navigation.navigate("CurrentTaskDetails")}
        >
          <Icon name="clipboard" type="feather" color="white" size={24} />
          <Text style={tw`text-white font-bold text-lg ml-3`}>
            Dive Into Your Task
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex-row items-center bg-green-700 py-3 px-5 rounded-lg mb-4`}
          onPress={() => navigation.navigate("AddMindTask")}
        >
          <Icon name="plus-circle" type="feather" color="white" size={24} />
          <Text style={tw`text-white font-bold text-lg ml-3`}>
            Capture Your Ideas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex-row items-center bg-black py-3 px-5 rounded-lg mb-4`}
          onPress={() => navigation.navigate("WeekendTasks")}
        >
          <Icon name="sun" type="feather" color="white" size={24} />
          <Text style={tw`text-white font-bold text-lg ml-3`}>
            Plan Your Weekend
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex-row items-center bg-gray-800 py-3 px-5 rounded-lg`}
          onPress={() => navigation.navigate("Goals")}
        >
          <Icon name="flag" type="feather" color="white" size={24} />
          <Text style={tw`text-white font-bold text-lg ml-3`}>
            Focus on Your Goals
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DashboardBottom;

import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import tw from "twrnc";
import { Icon, Card } from "react-native-elements";
import { selectCurrentMainTask, setCurrentMainTask } from "../app/appSlice";
import DashboardBottom from "../components/DashboardBottom";

const StayFocusedScreen = () => {
  const dispatch = useDispatch();
  const currentMainTask = useSelector(selectCurrentMainTask);
  const [task, setTask] = useState("");
  const [habit, setHabit] = useState("");

  const saveTask = () => {
    if (task && habit) {
      dispatch(setCurrentMainTask({ task, habit }));
      setTask("");
      setHabit("");
    }
  };

  return (
    <View style={tw`flex-1`}>
      <ImageBackground
        source={{ uri: "https://picsum.photos/800/600" }}
        style={tw`h-1/2`}
        resizeMode="cover"
      >
        <View style={tw`flex-1 justify-center items-center bg-black/50`}>
          <Card
            containerStyle={tw`rounded-3xl p-5 w-4/5`}
            wrapperStyle={tw`bg-white/10 border-0`}
          >
            <Card.Title style={tw`text-2xl font-bold text-green-500`}>
              Focus on Your Dreams!
            </Card.Title>
            <Card.Divider style={tw`border-green-500`} />
            {currentMainTask.task ? (
              <>
                <View style={tw`flex-row items-center mt-3`}>
                  <Icon
                    name="check-circle"
                    type="feather"
                    color="green"
                    size={20}
                  />
                  <Text style={tw`text-green-500 text-lg ml-2`}>
                    {currentMainTask.task}
                  </Text>
                </View>
                <View style={tw`flex-row items-center mt-3`}>
                  <Icon name="target" type="feather" color="green" size={20} />
                  <Text style={tw`text-green-500 text-lg ml-2`}>
                    {currentMainTask.habit}
                  </Text>
                </View>
              </>
            ) : (
              <>
                <TextInput
                  style={tw`bg-white/80 text-black px-3 py-2 rounded-lg mt-3`}
                  placeholder="What’s your main task?"
                  placeholderTextColor="#666"
                  value={task}
                  onChangeText={setTask}
                />
                <TextInput
                  style={tw`bg-white/80 text-black px-3 py-2 rounded-lg mt-3`}
                  placeholder="What’s your key habit?"
                  placeholderTextColor="#666"
                  value={habit}
                  onChangeText={setHabit}
                />
                <TouchableOpacity
                  style={tw`bg-green-500 py-3 px-5 rounded-lg mt-4`}
                  onPress={saveTask}
                >
                  <Text style={tw`text-white text-center font-bold`}>
                    Lock In Your Goals
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </Card>
        </View>
      </ImageBackground>
      <DashboardBottom />
    </View>
  );
};

export default StayFocusedScreen;

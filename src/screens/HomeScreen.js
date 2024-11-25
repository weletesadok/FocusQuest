import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BooksScreen from "./BooksScreen";
import GoalsScreen from "./GoalsScreen";
import MotivationsScreen from "./MotivationsScreen";
import TaskOnMindScreen from "./TaskOnMindScreen";
import TodoListScreen from "./TodoListScreen";
import FeelingsScreen from "./FeelingsScreen";
import MainTaskScreen from "./MainTaskScreen";
import ThemeScreen from "./ThemeScreen";
import WeekendTasksScreen from "./WeekendTasksScreen";
import { View } from "react-native";
import tw from "twrnc";
import Dashboard from "./Dashboard";
import BottomTab from "../components/BottomTab";

const Stack = createStackNavigator();

const Home = () => {
  return (
    <View style={tw`flex-1 justify-between`}>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          name="BooksScreen"
          component={BooksScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GoalsScreen"
          component={GoalsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MotivationsScreen"
          component={MotivationsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TaskOnMindScreen"
          component={TaskOnMindScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TodoListScreen"
          component={TodoListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FeelingsScreen"
          component={FeelingsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainTaskScreen"
          component={MainTaskScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ThemeScreen"
          component={ThemeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WeekendTasksScreen"
          component={WeekendTasksScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <BottomTab />
    </View>
  );
};

export default Home;

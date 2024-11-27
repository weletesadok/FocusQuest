import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "../../state/store";
import { Slot } from "expo-router";
import BottomTab from "../../components/BottomTab";
import { View } from "react-native";
import tw from "twrnc";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <View style={tw`flex-1 justify-between`}>
          <View style={tw`flex-1`}>
            <Slot />
          </View>
          <BottomTab />
        </View>
      </SafeAreaProvider>
    </Provider>
  );
}

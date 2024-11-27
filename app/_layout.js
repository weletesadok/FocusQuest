import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "../state/store";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar hidden={false} />
        <Slot />
      </SafeAreaProvider>
    </Provider>
  );
}

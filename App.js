import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./app/screens/_layout";
import { Provider } from "react-redux";
import { store } from "./app/app/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}

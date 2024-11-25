import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./src/screens/AppNavigator";
import { Provider } from "react-redux";
import { store } from "./src/app/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}

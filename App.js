import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./src/screens/AppNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}

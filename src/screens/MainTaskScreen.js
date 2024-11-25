import { View } from "react-native";
import BottomTab from "../components/BottomTab";
import tw from "twrnc";

export default () => {
  return (
    <View style={tw`flex-1 justify-between`}>
      <BottomTab />
    </View>
  );
};

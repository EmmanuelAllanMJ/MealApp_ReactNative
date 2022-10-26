import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CatagoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <View>
      <StatusBar style="light" />
      <CatagoriesScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

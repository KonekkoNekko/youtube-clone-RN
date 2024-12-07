import { Slot } from "expo-router";

// Import your global CSS file
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaView style={{ backgroundColor: "#222" }} className="flex-1">
      <Slot />
    </SafeAreaView>
  );
}

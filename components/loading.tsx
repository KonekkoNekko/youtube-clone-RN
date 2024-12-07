import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import colors from "tailwindcss/colors";

export function Loading() {
  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator color={colors.white} />
    </View>
  );
}

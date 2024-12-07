import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface Props {
  item: {
    id: number;
    title: string;
    thumbnail: { url: string; width: number; height: number }[]; 
    viewCountText: string; 
  };
}

export function ShortVideoCard({ item }: Props) {
  return (
    <View className="relative h-64 w-40 mr-3 flex justify-between">
      <Image
        source={{ uri: item.thumbnail[0].url }}
        className="h-full w-full rounded-xl absolute"
      />

      <View className="flex-row justify-end pt-3 pr-1">
        <TouchableOpacity>
          <Feather name="more-vertical" color={"white"} size={24} />
        </TouchableOpacity>
      </View>

      <View className="p-2">
        <Text className="text-white shadow-lg font-bold text-sm">
          {item.title}
        </Text>
        <Text className="text-white shadow-md font-extrabold text-start">
          {item.viewCountText}
        </Text>
      </View>
    </View>
  );
}

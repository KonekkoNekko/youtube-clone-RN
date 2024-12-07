import { Feather } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";

interface Props {
  item: {
    id: number;
    title: string;
    channelTitle: string;
    thumbnail: { url: string; width: number; height: number }[]; // Updated type
    channelThumbnail: { url: string; width: number; height: number }[]; // Updated type
    viewCount: any;
    lengthText: string;
    publishedTimeText: string;
  };
}

export function VideoCard({ item }: Props) {
  return (
    <View className="mb-3">
      <View className="relative">
        <Image
          source={{ uri: item.thumbnail[0].url }}
          className="h-52 w-full"
        />

        <View className="items-end mr-2 mb-5 -mt-6">
          <View className="bg-black rounded px-1">
            <Text className="text-white font-semibold text-xs">
              {item.lengthText}
            </Text>
          </View>
        </View>

        <View className="flex-row justify-between items-center pb-5 gap-x-3 mx-3">
          <Image
            source={{ uri: item.channelThumbnail[0].url }}
            className="h-9 w-9 rounded-full"
          />
          <View className="flex-1 gap-y-1">
            <Text className="text-white font-semibold">{item.title}</Text>
            <Text className="text-zinc-400 text-xs">
              {item.channelTitle} • {item.viewCount} • {item.publishedTimeText}
            </Text>
          </View>

          <View className="self-start">
            <Feather name="more-vertical" size={20} color={"white"} />
          </View>
        </View>
      </View>
    </View>
  );
}

import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { categories } from "@/constants";
import { useEffect, useState } from "react";
import { fetchTrendingVideos } from "@/services/youtube";
import { VideoCard } from "@/components/video-card";
import { Loading } from "@/components/loading";
import { ShortVideoCard } from "@/components/short-video-card";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [videos, setVideos] = useState([]);
  const [shortVideos, setShortVideos] = useState([]);

  async function fetchData() {
    const data = await fetchTrendingVideos();

    const trendingVideos = data.filter((video: any) => video.type === "video");
    const trendingShorts = data.filter(
      (video: any) => video.type === "shorts_listing"
    );

    setVideos(trendingVideos);
    setShortVideos(trendingShorts[0].data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{ backgroundColor: "#222" }} className="flex-1 pt-4">
      <StatusBar style="light" />

      <View className="flex-row justify-between px-4 py-2">
        <View className="flex-row items-center gap-x-2">
          <Image
            source={require("../assets/icons/youtube.png")}
            className="h-7 w-10"
          />
          <Text className="text-white font-semibold text-xl tracking-tighter">
            Youtube
          </Text>
        </View>

        <View className="flex-row items-center gap-x-3">
          <TouchableOpacity>
            <Feather name="cast" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="bell" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="search" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("@/assets/photo.png")}
              className="h-7 w-7 rounded-full"
            />
          </TouchableOpacity>
        </View>
      </View>

      {videos.length > 0 ? (
        <ScrollView
          className="flex-1 mt-4"
          showsVerticalScrollIndicator={false}
        >
          <View className="py-2 pb-5">
            <ScrollView
              className="px-4"
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {categories.map((category, idx) => {
                let isActive = category === activeCategory;
                let textClass = isActive ? "text-black" : "text-white";
                return (
                  <TouchableOpacity
                    onPress={() => setActiveCategory(category)}
                    style={{
                      backgroundColor: isActive
                        ? "white"
                        : "rgba(255,255,255, 0.1)",
                    }}
                    className="rounded-md p-1 px-3 mr-2"
                    key={idx}
                  >
                    <Text className={textClass}>{category}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>

          <VideoCard item={videos[4]} />

          <View className="mt-2 py-5 gap-y-3 border-y-zinc-700 border-4 border-x-0">
            <View className="mx-4 flex-row items-center gap-x-2">
              <Image
                className="h-6 w-5"
                source={require("@/assets/icons/shorts.png")}
              />
              <Text className="text-white font-semibold text-lg tracking-tighter">
                Shorts
              </Text>
            </View>

            <ScrollView
              horizontal
              className="px-4"
              showsHorizontalScrollIndicator={false}
            >
              {shortVideos.map((short, idx) => (
                <ShortVideoCard item={short} key={idx} />
              ))}
            </ScrollView>
          </View>
          <ScrollView className="mt-4" showsVerticalScrollIndicator={false}>
            {videos.map((item, idx) => (
              <VideoCard key={idx} item={item} />
            ))}
          </ScrollView>
        </ScrollView>
      ) : (
        <Loading />
      )}
    </View>
  );
}

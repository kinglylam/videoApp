import { useQuery } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../utils/api";

interface VideoData {
  id: number;
  urls: {
    mp4: string;
  };
  likes_count: number;
  comments_count: number;
}

const STORAGE_KEY = "videosData";

export const useGetVideos = () => {
  return useQuery<VideoData[], Error>({
    queryKey: ["getVideos"],
    queryFn: async () => {
      const cachedVideos = await AsyncStorage.getItem(STORAGE_KEY);

      if (cachedVideos) {
        console.log("Using cached videos");
        return JSON.parse(cachedVideos);
      }
      const { data } = await api.get("/videos");
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));

      return data;
    },
    staleTime: 60000,
  });
};

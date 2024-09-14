import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import SwiperFlatList from "react-native-swiper-flatlist";

import { Button } from "../../components/Button";
import { PageWrapper } from "../../components/PageWrapper";
import {
  LogoTextIcon,
  MediaActiveIcon,
  MessageIcon,
  NotiIcon,
  SearchIcon,
  UploadIcon,
} from "../../assets/icons";
import CustomCard from "./component/CustomCard";
import { RootNavigationProp } from "../../navigation/types";
import { AppRoutes, TabRoutes } from "../../navigation/types/app";
import HorizontalVideo from "./component/FeedsVideos";
import Loader from "../../components/Loader";
import { useGetVideos } from "../../api/useGetVideos";

const { width } = Dimensions.get("window");

const HomeScreen = ({
  navigation,
}: RootNavigationProp<AppRoutes, TabRoutes, "Home">) => {
  const { data: videos, isLoading, error } = useGetVideos();
  const refVideo = useRef(null);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Text>Error fetching videos</Text>;
  }

  return (
    <PageWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <LogoTextIcon />
          <View style={styles.headerIcons}>
            <SearchIcon />
            <MessageIcon />
            <NotiIcon />
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.greeting}>Hello John,</Text>
        </View>
        <View>
          <Text style={styles.instruction}>Please tap below</Text>
        </View>
        <View style={styles.cardContainer}>
          <CustomCard />
        </View>
        <View style={styles.mediaContainer}>
          <MediaActiveIcon />
          <Text>Media</Text>
        </View>
        <View style={styles.listContainer}>
          <SwiperFlatList
            data={videos}
            renderItem={({ item }) => (
              <HorizontalVideo
                videoUrl={item.urls.mp4}
                videoRef={refVideo}
                onPress={() =>
                  navigation.navigate("Media", {
                    videoUrl: item.urls.mp4,
                    likes: item.likes_count,
                    comments: item.comments_count,
                  })
                }
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <Button text="Upload" onPress={() => {}} icon={<UploadIcon />} />
      </View>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginBottom: 20,
  },
  instruction: {
    fontWeight: "500",
  },
  cardContainer: {
    marginVertical: 13,
  },
  mediaContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 15,
    marginBottom: 8,
  },
  mediaTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listContainer: {
    marginVertical: 7,
    marginBottom: 22,
  },
});

export default HomeScreen;

// VideoScreen.tsx
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Text,
} from "react-native";
import { Video, Audio, ResizeMode } from "expo-av";
import Loader from "../../components/Loader";
import { PageWrapper } from "../../components/PageWrapper";
import { RootNavigationProp } from "../../navigation/types";
import { AppRoutes, TabRoutes } from "../../navigation/types/app";
import {
  CommentIcon,
  DotsIcon,
  LikeIcon,
  VideoHeadIcon,
} from "../../assets/icons";
import { pallets } from "../../constants";

const { height } = Dimensions.get("window");

interface VideoScreenProps {
  route: {
    params: {
      videoUrl: string;
      likes: number;
      comments: number;
    };
  };
}

const MediaScreen = ({
  route,
}: RootNavigationProp<AppRoutes, TabRoutes, "Media">) => {
  const { videoUrl, likes, comments } = route.params;
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const configureAudio = async () => {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
      });
    };

    configureAudio();
  }, []);

  const formatNumber = (number: number) => {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (number >= 1000) {
      return (number / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return number.toString();
  };

  return (
    <PageWrapper>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Media</Text>
          <VideoHeadIcon />
        </View>
        {loading && <Loader />}
        <Video
          ref={videoRef}
          source={{ uri: videoUrl }}
          style={styles.video}
          resizeMode={ResizeMode.CONTAIN}
          shouldPlay
          onLoad={() => setLoading(false)}
          onError={(error) => console.log("Error loading video:", error)}
        />
        {!loading && (
          <View style={styles.overlay}>
            <View style={styles.iconContainer}>
              <LikeIcon />
              <Text style={styles.iconText}>{formatNumber(likes)}</Text>
            </View>
            <View style={styles.iconContainer}>
              <CommentIcon />
              <Text style={styles.iconText}>{formatNumber(comments)}</Text>
            </View>
            <View style={styles.iconContainer}>
              <DotsIcon />
            </View>
          </View>
        )}
      </View>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    bottom: 10,
    paddingTop: 10,
  },
  headerText: {
    fontWeight: "600",
    fontSize: 22,
    color: pallets.white,
  },
  video: {
    width: "100%",
    height: "100%",
  },
  loadingIndicator: {
    position: "absolute",
    top: height / 2 - 30,
    left: "50%",
    transform: [{ translateX: -25 }],
  },
  overlay: {
    position: "absolute",
    bottom: 80,
    right: 20,
    alignItems: "center",
  },
  iconContainer: {
    alignItems: "center",
    marginBottom: 25,
  },
  iconText: {
    color: pallets.white,
    fontSize: 16,
    marginTop: 5,
  },
});

export default MediaScreen;

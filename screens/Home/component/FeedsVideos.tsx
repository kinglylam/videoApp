import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import Loader from "../../../components/Loader";

const { height } = Dimensions.get("window");

interface HorizontalVideoProps {
  videoUrl: string;
  onPress: () => void;
  videoRef: React.RefObject<Video>;
}

const HorizontalVideo: React.FC<HorizontalVideoProps> = ({
  videoUrl,
  onPress,
  videoRef,
}) => {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<any>(null);

  const handlePlaybackStatusUpdate = (playbackStatus: any) => {
    setStatus(playbackStatus);
    if (playbackStatus.didJustFinish) {
      videoRef.current?.replayAsync();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.videoContainer}>
        {loading && <Loader />}
        <Video
          ref={videoRef}
          source={{ uri: videoUrl }}
          style={styles.video}
          resizeMode={ResizeMode.CONTAIN}
          shouldPlay
          onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
          onLoad={() => setLoading(false)}
          onError={(error) => console.log("Error loading video:", error)}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    width: 200,
    height: 350,
    marginHorizontal: 10,
    borderRadius: 15, // Add border radius to the video
    overflow: "hidden",
  },
  video: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  loadingIndicator: {
    position: "absolute",
    top: height / 2 - 30,
    left: "50%",
    transform: [{ translateX: -25 }],
  },
});

export default HorizontalVideo;

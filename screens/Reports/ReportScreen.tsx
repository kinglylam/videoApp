import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ReportScreen = () => {
  return (
    <View>
      <Text>Report</Text>
      <Text>Report</Text>
      <Text>Report</Text>
      <Text>Report</Text>
      <Text>Report</Text>
      <Text>Report</Text>
      <Text>Report</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ReportScreen;

// const HomeScreen = () => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigation = useNavigation();

//   useEffect(() => {
//     const configureAudio = async () => {
//       await Audio.requestPermissionsAsync();
//       await Audio.setAudioModeAsync({
//         playsInSilentModeIOS: true, // Ensures the video plays audio even in silent mode
//       });
//     };

//     configureAudio();
//   }, []);

//   useEffect(() => {
//     fetch("https://66acf2fdf009b9d5c733eeea.mockapi.io/api/v1/videos")
//       .then((response) => response.json())
//       .then((data) => {
//         setVideos(data);
//         setLoading(false); // Set loading to false after data is fetched
//       })
//       .catch((error) => {
//         console.error(error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#00ff00" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.greeting}>Hello John,</Text>
//       </View>

//       {/* Button */}
//       <View style={styles.buttonContainer}>

//       </View>

//       {/* Media Previews */}
//       <Text style={styles.mediaTitle}>Media</Text>
//       <SwiperFlatList
//         showPagination
//         data={videos}
//         renderItem={({ item }) => (
//           <View style={styles.child}>
//             {/* Render Video using mp4 URL */}
//             <Video
//               source={{ uri: item.urls.mp4 }} // Access the mp4 link in the response
//               style={styles.video}
//               isLooping
//             />
//             <View style={styles.videoDetails}>
//               <Text>Likes: {item.likes_count}</Text>
//               <Text>Comments: {item.comments_count}</Text>
//             </View>

//           </View>
//         )}
//         keyExtractor={(item) => item.id.toString()}
//         paginationActiveColor="#3498db"
//         paginationDefaultColor="#95a5a6"
//         paginationStyleItem={{ width: 10, height: 10, borderRadius: 5 }}
//         paginationStyle={{
//           justifyContent: "center",
//           position: "absolute",
//           bottom: -25,
//         }}
//         snapToInterval={width}
//         decelerationRate="fast"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 16,
//   },
//   header: {
//     marginBottom: 20,
//   },
//   greeting: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   buttonContainer: {
//     marginBottom: 20,
//   },
//   mediaTitle: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   child: {
//     width: width - 40, // Make the preview take full screen width minus some padding
//     height: 300,
//     marginHorizontal: 20,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   video: {
//     width: "100%",
//     height: "100%",
//     borderRadius: 10,
//   },
//   videoDetails: {
//     marginTop: 10,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "100%",
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default HomeScreen;

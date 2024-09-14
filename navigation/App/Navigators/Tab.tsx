import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";

import { TabRoutes } from "../../types/app";

// import { Text } from '../../../components/Text';

import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { RF } from "../../../helpers";
import { Dimensions } from "react-native";
import HomeScreen from "../../../screens/Home/HomeScreen";
import {
  AccountIcon,
  GameIcon,
  HomeActiveIcon,
  HomeIcon,
  MediaActiveIcon,
  MediaIcon,
  ReportIcon,
} from "../../../assets/icons";
import MediaScreen from "../../../screens/Media/MediaScreen";
import GamesScreen from "../../../screens/Games/GamesScreen";
import ReportScreen from "../../../screens/Reports/ReportScreen";
import AccountScreen from "../../../screens/Account/AccountScreen";
import { pallets } from "../../../constants";

// import Animated, {
//   useSharedValue,
// } from 'react-native-reanimated';

const { Navigator, Screen } = createBottomTabNavigator<TabRoutes>();
const Width = Dimensions.get("screen").width;
export default function TabNavigator() {
  return (
    <Navigator
      // tabBar={props => <MyTabBar {...props} />}

      screenOptions={({ route }) => ({
        tabBarButton: (props) => (
          <TouchableOpacity
            onPress={() => console.log("klk")}
            {...props}
            activeOpacity={0.7}
          />
        ),

        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          flexDirection: "row",
          justifyContent: "space-between",
          width: Width,
          alignSelf: "center",
          height: Platform.OS === "android" ? 68 : 79,
          paddingHorizontal: 10,
          paddingVertical: 13,
          color: "#000",
        },
      })}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <>
              {focused ? (
                <>
                  <View style={[styles.active, {}]}>
                    <HomeActiveIcon />
                    <Text style={[styles.activeText, { marginStart: 4 }]}>
                      Home
                    </Text>
                  </View>
                </>
              ) : (
                <>
                  <View style={styles.inactive}>
                    <HomeIcon />
                    <Text style={styles.inactiveText}>Home</Text>
                  </View>
                </>
              )}
            </>
          ),
        }}
      />

      <Screen
        name="Media"
        component={MediaScreen}
        options={{
          tabBarLabel: "Media",
          tabBarIcon: ({ focused }) => (
            <>
              {focused ? (
                <>
                  <View style={styles.active}>
                    <MediaActiveIcon />
                    <Text style={styles.activeText}>Media</Text>
                  </View>
                </>
              ) : (
                <>
                  <View style={styles.inactive}>
                    <MediaIcon />
                    <Text style={styles.inactiveText}>Media</Text>
                  </View>
                </>
              )}
            </>
          ),
        }}
      />
      <Screen
        name="Games"
        component={GamesScreen}
        options={{
          tabBarLabel: "Games",
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused ? (
                <>
                  <View style={styles.active}>
                    <AccountIcon />
                    <Text style={styles.activeText}>Games</Text>
                  </View>
                </>
              ) : (
                <>
                  <View style={styles.inactive}>
                    <MediaIcon />
                    <Text style={styles.inactiveText}>Games</Text>
                  </View>
                </>
              )}
            </>
          ),
        }}
      />

      <Screen
        name="Report"
        component={ReportScreen}
        options={{
          tabBarLabel: "Report",
          tabBarIcon: ({ color, focused, size }) => (
            <>
              {focused ? (
                <>
                  <View style={styles.active}>
                    <MediaIcon />
                    <Text style={styles.activeText}>Report</Text>
                  </View>
                </>
              ) : (
                <>
                  <View style={styles.inactive}>
                    <MediaIcon />
                    <Text style={styles.inactiveText}>Report</Text>
                  </View>
                </>
              )}
            </>
          ),
        }}
      />
      <Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, focused, size }) => (
            <>
              {focused ? (
                <>
                  <View style={styles.active}>
                    <AccountIcon />
                    <Text style={styles.activeText}>Account</Text>
                  </View>
                </>
              ) : (
                <>
                  <View style={styles.inactive}>
                    <AccountIcon />
                    <Text style={styles.inactiveText}>Account</Text>
                  </View>
                </>
              )}
            </>
          ),
        }}
      />
    </Navigator>
  );
}

const styles = StyleSheet.create({
  active: {
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    minWidth: 80,
    borderTopWidth: 2,
    borderColor: pallets.primaryBlue,
  },
  activeText: {
    color: pallets.primaryBlue || "#0000FF",
    fontSize: RF(7),
    marginTop: 4,
    marginStart: 1,
    fontWeight: "400",
  },
  inactive: {
    alignItems: "center",
    minWidth: 0,
  },
  inactiveText: {
    color: pallets.grey,
    fontSize: RF(7),
    marginTop: 4,
    marginStart: 1,
    fontWeight: "400",
  },
});

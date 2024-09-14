import { NavigatorScreenParams } from "@react-navigation/native";

export type AppRoutes = {
  TabStack: NavigatorScreenParams<TabRoutes>;
  HomeStack: NavigatorScreenParams<HomeRoutes>;
  MediaStack: NavigatorScreenParams<MediaRoutes>;
  SplashScreen: NavigatorScreenParams<SplashRoutes>;
};

export type TabRoutes = {
  Home: undefined;
  Media: { videoUrl: string; likes: number; comments: number };
  Account: undefined;
  Games: undefined;
  Report: undefined;
};

export type HomeRoutes = {};

export type MediaRoutes = {};

export type SplashRoutes = {};

import {RouteProp} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type MainStackParamList = {
  Home: undefined;

};

export type MainStackScreenProps<T extends keyof MainStackParamList> =
  NativeStackScreenProps<MainStackParamList, T>;

export type ScreenRouteProp<T extends keyof MainStackParamList> = RouteProp<
  MainStackParamList,
  T
>;

export type RootStackNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;

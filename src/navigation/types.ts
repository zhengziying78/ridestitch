import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  RideList: undefined;
  MergeRides: undefined;
};

export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type RideListScreenProps = NativeStackScreenProps<RootStackParamList, 'RideList'>;
export type MergeRidesScreenProps = NativeStackScreenProps<RootStackParamList, 'MergeRides'>;

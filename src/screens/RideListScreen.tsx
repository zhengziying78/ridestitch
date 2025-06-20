import { StyleSheet, Text, View, FlatList } from 'react-native';
import { RideListScreenProps } from '../navigation/types';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';

// Mock data for rides
const mockRides = [
  { id: '1', title: 'Morning Commute', date: '2023-06-15', distance: '8.2 mi' },
  { id: '2', title: 'Weekend Trail Ride', date: '2023-06-10', distance: '15.7 mi' },
  { id: '3', title: 'Evening Spin', date: '2023-06-08', distance: '5.3 mi' },
  { id: '4', title: 'Mountain Loop', date: '2023-06-05', distance: '22.1 mi' },
  { id: '5', title: 'Gravel Adventure', date: '2023-06-01', distance: '18.4 mi' },
];

type RideItemProps = {
  title: string;
  date: string;
  distance: string;
};

const RideItem = ({ title, date, distance }: RideItemProps) => (
  <View style={styles.rideItem}>
    <View>
      <Text style={styles.rideTitle}>{title}</Text>
      <Text style={styles.rideDate}>{date}</Text>
    </View>
    <Text style={styles.rideDistance}>{distance}</Text>
  </View>
);

export default function RideListScreen({ navigation }: RideListScreenProps) {
  const handleMergePress = () => {
    navigation.navigate('MergeRides');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Recent Rides</Text>
        <Button title="Merge Rides" onPress={handleMergePress} variant="outline" />
      </View>

      <FlatList
        data={mockRides}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <RideItem title={item.title} date={item.date} distance={item.distance} />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
  },
  listContent: {
    paddingHorizontal: 16,
  },
  rideDate: {
    color: '#666',
    fontSize: 14,
  },
  rideDistance: {
    fontSize: 14,
    fontWeight: '500',
  },
  rideItem: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  rideTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  separator: {
    backgroundColor: '#eee',
    height: 1,
  },
});

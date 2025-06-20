import { useState } from 'react';
import { StyleSheet, Text, View, Switch, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import { mergeTracks } from '../../lib/gpxParser';
import { uploadRide } from '../../api/rideWithGPS';
import { MergeRidesScreenProps } from '../../navigation/types';

export default function MergeRidesScreen({ navigation }: MergeRidesScreenProps) {
  const [isNormalizeTime, setIsNormalizeTime] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedRides, setSelectedRides] = useState([
    { id: '1', name: 'Morning Commute', isSelected: true },
    { id: '2', name: 'Weekend Trail Ride', isSelected: true },
  ]);

  const handleMerge = async () => {
    setIsProcessing(true);

    try {
      // In a real app, this would:
      // 1. Get GPX data for selected rides
      // 2. Parse them
      // 3. Merge them
      // 4. Upload the result

      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Log what would happen
      console.log(`Merging ${selectedRides.filter(r => r.isSelected).length} rides`);
      console.log(`Normalize time: ${isNormalizeTime}`);

      // Call our placeholder functions (these don't do anything real yet)
      const mergedTrack = mergeTracks([], isNormalizeTime);
      const success = await uploadRide('mock-gpx-data', 'Merged Ride');

      console.log(`Upload ${success ? 'succeeded' : 'failed'}`);

      // Go back to ride list
      navigation.navigate('RideList');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Merge Rides</Text>

        <View style={styles.optionsContainer}>
          <Text style={styles.sectionTitle}>Options</Text>

          <View style={styles.optionRow}>
            <Text style={styles.optionLabel}>Normalize timestamps</Text>
            <Switch
              value={isNormalizeTime}
              onValueChange={setIsNormalizeTime}
              trackColor={{ false: '#ddd', true: '#FF5A5F' }}
            />
          </View>

          <Text style={styles.optionDescription}>Removes long gaps between ride segments</Text>
        </View>

        <View style={styles.selectedRidesContainer}>
          <Text style={styles.sectionTitle}>Selected Rides</Text>

          {selectedRides.map(ride => (
            <View key={ride.id} style={styles.rideItem}>
              <Text style={styles.rideName}>{ride.name}</Text>
            </View>
          ))}
        </View>

        <View style={styles.actionsContainer}>
          <Button title="Merge Selected Rides" onPress={handleMerge} isLoading={isProcessing} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  actionsContainer: {
    marginTop: 16,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  content: {
    padding: 16,
  },
  optionDescription: {
    color: '#666',
    fontSize: 14,
    marginTop: 4,
  },
  optionLabel: {
    fontSize: 16,
  },
  optionRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  optionsContainer: {
    marginBottom: 24,
  },
  rideItem: {
    borderColor: '#ddd',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 8,
    padding: 12,
  },
  rideName: {
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  selectedRidesContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
});

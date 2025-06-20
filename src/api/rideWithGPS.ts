import Constants from 'expo-constants';

// This would be replaced with actual environment variables in a real app
const API_URL = Constants.expoConfig?.extra?.apiUrl || 'https://ridewithgps.com/api/';
const API_KEY = Constants.expoConfig?.extra?.apiKey || '';
const API_SECRET = Constants.expoConfig?.extra?.apiSecret || '';

export type Ride = {
  id: string;
  name: string;
  description?: string;
  distance: number;
  elevation_gain: number;
  created_at: string;
  updated_at: string;
  duration: number;
  // Add more fields as needed
};

/**
 * Fetches a list of rides from the RideWithGPS API
 * This is a placeholder implementation
 */
export async function fetchRides(): Promise<Ride[]> {
  // In a real implementation, this would make an actual API call
  console.log('Fetching rides from', API_URL);

  // Return mock data for now
  return Promise.resolve([
    {
      id: '1',
      name: 'Morning Commute',
      distance: 13.2,
      elevation_gain: 245,
      created_at: '2023-06-15T08:30:00Z',
      updated_at: '2023-06-15T09:15:00Z',
      duration: 2700,
    },
    {
      id: '2',
      name: 'Weekend Trail Ride',
      description: 'Fun ride through the forest',
      distance: 25.3,
      elevation_gain: 620,
      created_at: '2023-06-10T10:00:00Z',
      updated_at: '2023-06-10T12:30:00Z',
      duration: 9000,
    },
  ]);
}

/**
 * Uploads a merged ride to RideWithGPS
 * This is a placeholder implementation
 */
export async function uploadRide(gpxData: string, name: string): Promise<boolean> {
  // In a real implementation, this would make an actual API call
  console.log(`Uploading ride "${name}" to ${API_URL}`);

  // Simulate a successful upload
  return Promise.resolve(true);
}

import { StyleSheet, Text, View } from 'react-native';
import { LoginScreenProps } from '../navigation/types';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import { useState } from 'react';

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    // This would typically handle OAuth with RideWithGPS
    setIsLoading(true);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsLoading(false);
    navigation.navigate('RideList');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>RideStitch</Text>
        <Text style={styles.subtitle}>Merge your rides seamlessly</Text>

        <View style={styles.loginContainer}>
          <Button title="Login with RideWithGPS" onPress={handleLogin} isLoading={isLoading} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  loginContainer: {
    marginTop: 20,
    width: '100%',
  },
  subtitle: {
    color: '#666',
    fontSize: 18,
    marginBottom: 48,
    textAlign: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

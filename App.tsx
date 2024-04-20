import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import BottomNav from './src/navigation/BottomNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <BottomNav/>
    </NavigationContainer>
  );
}

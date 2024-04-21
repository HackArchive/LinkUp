import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Login from './src/pages/auth/Login';
import { useFonts } from 'expo-font';
import AppLoading from './src/components/AppLoading';
import '@walletconnect/react-native-compat'
import {
  WalletConnectModal,
  useWalletConnectModal,
} from '@walletconnect/modal-react-native';
import { REACT_APP_WALLET_CONNECT_PID } from '@env';
import BottomNav from './src/navigation/BottomNavigation';
import { createStackNavigator } from '@react-navigation/stack';

const projectId = REACT_APP_WALLET_CONNECT_PID;

const providerMetadata = {
  name: 'YOUR_PROJECT_NAME',
  description: 'YOUR_PROJECT_DESCRIPTION',
  url: 'https://your-project-website.com/',
  icons: ['https://your-project-logo.com/'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com',
  },
};

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Blink: require("./assets/fonts/Blink.ttf"),
    "Billa-Bong": require("./assets/fonts/Billabong.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const isLoggedIn = true;

  return (
    <SafeAreaView className='flex-1'>

      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          {isLoggedIn ? (
            <Stack.Screen name='Home' component={BottomNav} options={{ headerShown: false }} />
          ) : (
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <WalletConnectModal
        explorerRecommendedWalletIds={[
          'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
        ]}
        explorerExcludedWalletIds={'ALL'}
        projectId={projectId}
        providerMetadata={providerMetadata}
      />
    </SafeAreaView>
  );
}

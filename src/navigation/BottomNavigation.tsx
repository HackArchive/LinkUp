import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator 
    >
      <Tab.Screen name="Events"  component={Home} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Home} />
    </Tab.Navigator>
  );
}
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Icon from "react-native-vector-icons/Ionicons";
import COLORS from "../constants/colors"

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator 
      
      screenOptions={({ route }) => ({
        tabBarStyle:{
          height: 60,
          backgroundColor: COLORS.primary,
        },
        tabBarActiveTintColor:COLORS.highlight,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size, focused }) => {
          let iconname;

          if (route.name == 'Events') {
            iconname = focused ? 'home' : 'home-outline';
          }
          else if (route.name == 'Profile') {
            iconname = focused ? 'person' : 'person-outline';
          }
          else if (route.name == 'CreateEvent') {
            iconname = focused ? 'add' : 'add-outline';
          }
          else {
            iconname = ''
          }
          return <Icon name={iconname} size={size} color={color} />
        }
      })}
    >
      <Tab.Screen name="Events" component={Home} />
      <Tab.Screen name="Profile" component={Home} />
      <Tab.Screen name="CreateEvent" component={Home} />
    </Tab.Navigator>
  );
}
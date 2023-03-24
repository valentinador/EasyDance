import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Test } from './src/Test';
import { Test2 } from './src/Test2';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen options={{headerShown: false}} name="Home" component={Test} />
      <Tab.Screen options={{headerShown: false}} name="Settings" component={Test2} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

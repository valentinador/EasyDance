import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Test from './src/Test';
import Test2 from './src/Test2';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>{/* Rest of your app code */}
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Tab.Navigator>
      <Tab.Screen name="Home" component={Test} />
      <Tab.Screen name="Settings" component={Test2} />
    </Tab.Navigator>
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

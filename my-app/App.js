import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import CardsScreen from './CardsScreen';
import StatisticsScreen from './StatisticsScreen';
import {Image} from 'react-native';
import { ThemeProvider } from './ThemeContext';


const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <ThemeProvider>

    <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerShown: false, 
            tabBarIcon: ({ focused }) => (
              <Image 
                source={require('./assets/home.png')} 
                style={{ 
                  tintColor: focused ? '#0066FF' : 'gray' 
                }} 
              />
            )
          }} 
        />

      <Tab.Screen 
          name="Cards"
          component={CardsScreen}
          options={{
            headerShown: false, 
            tabBarIcon: ({ focused }) => (
              <Image 
                source={require('./assets/myCards.png')} 
                style={{ 
                  tintColor: focused ? '#0066FF' : 'gray' 
                }} 
              />
            )
          }} 
        />
     
     
      <Tab.Screen 
         name="Statistics" 
         component={StatisticsScreen}
          options={{
            headerShown: false, 
            tabBarIcon: ({ focused }) => (
              <Image 
                source={require('./assets/statictics.png')} 
                style={{ 
                  tintColor: focused ? '#0066FF' : 'gray' 
                }} 
              />
            )
          }} 
        />


    
    
      <Tab.Screen 
         name="Settings" 
         component={SettingsScreen} 
          options={{
            headerShown: false, 
            tabBarIcon: ({ focused }) => (
              <Image 
                source={require('./assets/settings.png')} 
                style={{ 
                  tintColor: focused ? '#0066FF' : 'gray' 
                }} 
              />
            )
          }} 
        />

    
    </Tab.Navigator>
    </NavigationContainer>
    </ThemeProvider>

  );
}
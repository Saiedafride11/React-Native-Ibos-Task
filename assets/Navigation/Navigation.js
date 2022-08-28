import * as React from 'react';
import { StyleSheet  } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Screens/Profile';
import Employee from '../Screens/Employee';
import Information from '../Screens/Information';
import AntDesign from 'react-native-vector-icons/AntDesign';


const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#F5F5F5"
  },
};

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer theme={AppTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'Profile') {
              iconName = 'user';
              size = focused ? 25 : 20;
              color = focused ? '#34A853' : '#555';
            } else if (route.name === 'Application') {
              iconName = 'form';
              size = focused ? 25 : 20;
              color = focused ? '#34A853' : '#555';
            } else if (route.name === 'Information') {
              iconName = 'profile';
              size = focused ? 25 : 20;
              color = focused ? '#34A853' : '#555';
            }
            return (
              <AntDesign
                name={iconName}
                size={size}
                color={color}
              />
            )
          },
          tabBarActiveTintColor: '#34A853',
          tabBarInactiveTintColor: '#555',
        })}
        >
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Application" component={Employee} />
        <Tab.Screen name="Information" component={Information} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

const styles = StyleSheet.create({
      container: {
        flex: 1
      },
});
    
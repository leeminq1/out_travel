import React, { useEffect } from 'react';

import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainPage from '../pages/MainPage';
import PicturePage from '../pages/PicturePage';
import AddPage from '../pages/AddPage';
import { Ionicons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

const TabNavigator = ({ navigation, route }) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          //현재 이 앱을 구동하고 있는 디바이스가 뭔지 Platform.OS 을 통해 확인 할 수 있음
          let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';

          if (route.name === 'AddPage') {
            iconName += 'add-circle-outline';
          } else if (route.name === 'MainPage') {
            iconName += 'list';
          } else if (route.name === 'PicturePage') {
            iconName += 'camera-outline';
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? 'blue' : 'grey'}
              size={35}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: '#fff',
          borderTopColor: '#eee',
          height: 60,
          fontSize: 10,
        },
        // activeTintColor: 'tomato',
        // inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name="AddPage" component={AddPage} />
      <Tabs.Screen name="MainPage" component={MainPage} />
      <Tabs.Screen name="PicturePage" component={PicturePage} />
    </Tabs.Navigator>
  );
};

export default TabNavigator;

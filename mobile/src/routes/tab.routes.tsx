import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { PlantSelect } from '../pages/PlantSelect';

import colors from '../styles/colors';
import { MyPlants } from '../pages/MyPlants';

const AppTab = createBottomTabNavigator();

export const TabRoutes = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.heading,
        labelPosition: 'beside-icon',
        style: {
          height: Platform.OS === 'ios' ? 88 : 60,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0
        }
      }}
    >
      <AppTab.Screen
        name='Nova Planta'
        component={PlantSelect}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name='add-circle-outline'
              size={size}
              color={color}
            />
          ))
        }}
      />

      <AppTab.Screen
        name='Minhas Plantas'
        component={MyPlants}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name='format-list-bulleted'
              size={size}
              color={color}
            />
          ))
        }}
      />
    </AppTab.Navigator>
  );
}
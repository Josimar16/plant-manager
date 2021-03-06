import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSave } from '../pages/PlantSave';
import { MyPlants } from '../pages/MyPlants';
import { TabRoutes } from './tab.routes';

import colors from '../styles/colors';

const stackRoutes = createStackNavigator();

const StackRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      }
    }}
  >
    <stackRoutes.Screen
      name="Welcome"
      component={Welcome}
    />

    <stackRoutes.Screen
      name="UserIdentification"
      component={UserIdentification}
    />

    <stackRoutes.Screen
      name="Confirmation"
      component={Confirmation}
    />

    <stackRoutes.Screen
      name="PlantSelect"
      component={TabRoutes}
    />

    <stackRoutes.Screen
      name="PlantSave"
      component={PlantSave}
    />

    <stackRoutes.Screen
      name="MyPlants"
      component={TabRoutes}
    />
  </stackRoutes.Navigator>
);

export { StackRoutes }
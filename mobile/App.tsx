import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
// import * as Notifications from 'expo-notifications';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';

import { Routes } from './src/routes';
import { IPlantProps } from './src/libs/storage';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  // useEffect(() => {
  // Ouvi todas as notificações
  // const subscription = Notifications.addNotificationReceivedListener(
  //   async notification => {
  //     const data = notification.request.content.data.plant as IPlantProps;
  //   }
  // );
  // return () => subscription.remove();

  // async function notifications() {
  // Listar todas as notificações
  // const data = await Notifications.getAllScheduledNotificationsAsync();

  // Cancelar todas as notificações
  // await Notifications.cancelAllScheduledNotificationsAsync();
  //}
  // notifications();
  // }, []);

  if (!fontsLoaded)
    return <AppLoading />;

  return (
    <Routes />
  );
}
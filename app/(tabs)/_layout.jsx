import { Text, View } from 'react-native'
import React from 'react'
import {Stack, SplashScreen} from 'expo-router'
import { StatusBar } from 'expo-status-bar'

SplashScreen.preventAutoHideAsync()
const TabLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen 
          name="home"
          options={{
            headerShown: false
          }}
        />
      </Stack>
      {/* <StatusBar backgroundColor="#FFA451" style="light"/> */}
    </>
  )
}

export default TabLayout
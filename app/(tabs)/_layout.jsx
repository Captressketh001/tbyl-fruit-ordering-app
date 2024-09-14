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
        <Stack.Screen 
          name="add"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="cart"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="complete"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="track"
          options={{
            headerShown: false
          }}
        />
      </Stack>
      {/* <StatusBar backgroundColor="#fff" style="dark"/> */}
    </>
  )
}

export default TabLayout
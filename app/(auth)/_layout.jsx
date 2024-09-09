import { Text, View } from 'react-native'
import React from 'react'
import {Stack, SplashScreen} from 'expo-router'
import { StatusBar } from 'expo-status-bar'

SplashScreen.preventAutoHideAsync()
const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen 
          name="sign-in"
          options={{
            headerShown: false
          }}
        />
      </Stack>
      <StatusBar backgroundColor="#FFA451" style="dark"/>
    </>
  )
}

export default AuthLayout
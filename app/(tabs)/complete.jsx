import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import icons from "../../constants/icons";
import CustomButton from "../../components/customButton";
import { router } from "expo-router";

const CompleteDelivery = () => {

  return (
    <>
      <SafeAreaView className="bg-white h-full">
        <View className="h-full items-center justify-evenly">
          <View className="items-center gap-8">
            <Image source={icons.completed} resizeMode="contain" />
            <View className="items-center">
              <Text className="text-primary font-bgmedium text-[32px]">
                Congratulations!!!
              </Text>
              <Text className="text-primary font-bgmedium text-xl text-center w-[247px]">
                Your order have been taken and is being attended to
              </Text>
            </View>
          </View>
          <CustomButton
            containerStyles="w-[133px] h-[56px]"
            handlePress={() => router.push('track')}
            textStyles="font-bgmedium text-lg"
            title="Track Order"
          />
          <CustomButton
            containerStyles="w-[181px] h-[56px] bg-white border border-secondary"
            handlePress={() => router.replace('home')}
            textStyles="font-bgmedium text-lg text-secondary"
            title="Continue Shopping"
          />
        </View>
      </SafeAreaView>
      <StatusBar backgroundColor="#fff" style="dark" />
    </>
  );
};

export default CompleteDelivery;

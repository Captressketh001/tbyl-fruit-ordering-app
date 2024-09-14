import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "../../constants/icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import images from '../../constants/images'

const TrackDelivery = () => {
  const goBack = () => {
    router.push("/complete");
  };
  return (
    <>
      <SafeAreaView className="h-full">
        <View className="h-1/5 bg-secondary items-center gap-6 px-4 flex-row">
          <TouchableOpacity
            onPress={goBack}
            className="bg-white rounded-full  w-[80px] h-[32px] flex-row gap-1 justify-center items-center"
          >
            <Image source={icons.back} resizeMode="contain" />
            <Text className="font-bgmedium text-base">Go back</Text>
          </TouchableOpacity>
          <Text className="text-white font-bgmedium text-2xl">
            Delivery Status
          </Text>
        </View>
        <View className="h-4/5 mt-8 p-6">
            <View className="flex-row justify-between items-center">
                <View className="flex-row items-center gap-6">
                    <View className="w-[65px] h-[64px] bg-[#FFFAEB] rounded-lg items-center justify-center">
                        <Image source={icons.orderTaken} resizeMode="contain"/>
                    </View>
                    <Text className="font-bgregular text-[16px]">Order Taken</Text>
                </View>
                <View className="bg-[#4CD964] w-6 h-6 rounded-full items-center justify-center">
                    <Image source={icons.check} resizeMode="contain"/>
                </View>
            </View>
            <Image source={icons.lineOne} className="ml-8" resizeMode="contain"/>
            <View className="flex-row justify-between items-center">
                <View className="flex-row items-center gap-6">
                    <View className="w-[65px] h-[64px] bg-[#F1EFF6] rounded-lg items-center justify-center">
                        <Image source={icons.orderProcessing} resizeMode="contain"/>
                    </View>
                    <Text className="font-bgregular text-[16px]">Order is Being Prepared</Text>
                </View>
                <View className="bg-[#4CD964] w-6 h-6 rounded-full items-center justify-center">
                    <Image source={icons.check} resizeMode="contain"/>
                </View>
            </View>
            <Image source={icons.lineOne} className="ml-8" resizeMode="contain"/>
            <View className="flex-row justify-between items-center">
                <View className="flex-row items-center gap-6">
                    <View className="w-[65px] h-[64px] bg-[#CCCCCC] rounded-lg items-center justify-center">
                        <Image source={icons.orderDeliver} resizeMode="contain"/>
                    </View>
                    <View>
                        <Text className="font-bgregular text-[16px]">Order is Being Delivered</Text>
                        <Text className="font-bgmedium text-sm">Your delivery agent is coming</Text>
                    </View>
                    </View>
                <View className="bg-secondary w-10 h-10 rounded-full items-center justify-center">
                    <Image source={icons.phone} resizeMode="contain"/>
                </View>
            </View>
            <Image source={icons.lineTwo} className="ml-8" resizeMode="contain"/>
            <Image source={images.map}  className="w-full"  resizeMode="contain"/>
            <Image source={icons.lineOne} className="ml-8"  resizeMode="contain"/>
            <View className="flex-row justify-between items-center">
                <View className="flex-row items-center gap-6">
                    <View className="w-[65px] h-[64px] bg-[#F0FEF8] rounded-lg items-center justify-center">
                    <View className="bg-[#4CD964] w-10 h-10 rounded-full items-center justify-center">
                    <Image source={icons.check}  className="w-[16.8px] h-[16.8px]" resizeMode="contain"/>
                </View>
                    </View>
                        <Text className="font-bgregular text-[16px]">Order Received</Text>
                    </View>
                
                    <Image source={icons.threeDots} resizeMode="contain"/>
            </View>
        </View>
      </SafeAreaView>
      <StatusBar backgroundColor="#FFA451" style="dark" />
    </>
  );
};

export default TrackDelivery;

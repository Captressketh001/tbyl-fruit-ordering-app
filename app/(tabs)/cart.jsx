import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from "../../constants/icons";
import images from "../../constants/images"
import { router } from 'expo-router'
import CustomButton from '../../components/customButton'
const Cart = () => {
  const goBack = () => {
    router.replace("/add");
  };
  return (
    <SafeAreaView className="h-full">
      <View className="h-1/5 bg-secondary items-center gap-6 px-4 flex-row">
      <TouchableOpacity
              onPress={goBack}
              className="bg-white rounded-full  w-[80px] h-[32px] flex-row gap-1 justify-center items-center"
            >
              <Image source={icons.back} resizeMode="contain" />
              <Text className="font-bgmedium text-base">Go back</Text>
            </TouchableOpacity>
            <Text className="text-white font-bgmedium text-2xl">My Basket</Text>
      </View>
      <View className="justify-between h-4/5">
        <View className="">
            <View className="justify-between flex-row mt-8 pb-4 h-[80px] border-b border-b-[#F4F4F4]">
              <View className="flex-row items-center gap-4 pl-4 justify-end">
                  <View className="w-[65px] h-[64px] bg-[#FFFAEB] items-center justify-center rounded-lg">
                      <Image source={images.quinoa} className="w-[40px] h-[40px]" resizeMode='contain'/>
                  </View>
                  <View className="">
                    <Text className="font-bgregular text-[16px]">Quinoa Fruit Salad</Text>
                    <Text className="font-bgmedium text-sm">2 packs</Text>
                  </View>
              </View>
              <View className="flex-row pr-4 items-center">
                <Image source={icons.nairaBlack} resizeMode='contain' className="w-[16px] h -[12.8px]"/>
                <Text className="font-bgmedium text-[16px]">20,000</Text>
              </View>
            </View>
            <View className="justify-between flex-row mt-8 pb-4 h-[80px] border-b border-b-[#F4F4F4]">
              <View className="flex-row items-center gap-4 pl-4 justify-end">
                  <View className="w-[65px] h-[64px] bg-[#F1EFF6] items-center justify-center rounded-lg">
                      <Image source={images.kiwiFruit} className="w-[40px] h-[40px]" resizeMode='contain'/>
                  </View>
                  <View className="">
                    <Text className="font-bgregular text-[16px]">Quinoa Fruit Salad</Text>
                    <Text className="font-bgmedium text-sm">2 packs</Text>
                  </View>
              </View>
              <View className="flex-row pr-4 items-center">
                <Image source={icons.nairaBlack} resizeMode='contain' className="w-[16px] h -[12.8px]"/>
                <Text className="font-bgmedium text-[16px]">20,000</Text>
              </View>
            </View>
            <View className="justify-between flex-row mt-8 pb-4 h-[80px] border-b border-b-[#F4F4F4]">
              <View className="flex-row items-center gap-4 pl-4 justify-end">
                  <View className="w-[65px] h-[64px] bg-[#FEF0F0] items-center justify-center rounded-lg">
                      <Image source={images.berryFruit} className="w-[40px] h-[40px]" resizeMode='contain'/>
                  </View>
                  <View className="">
                    <Text className="font-bgregular text-[16px]">Quinoa Fruit Salad</Text>
                    <Text className="font-bgmedium text-sm">2 packs</Text>
                  </View>
              </View>
              <View className="flex-row pr-4 items-center">
                <Image source={icons.nairaBlack} resizeMode='contain' className="w-[16px] h -[12.8px]"/>
                <Text className="font-bgmedium text-[16px]">20,000</Text>
              </View>
            </View>
        </View>
        <View className="justify-between flex-row px-4">
          <View className="">
            <Text className="font-bgmedium text-[16px]">Total</Text>
            <View className="flex-row items-center gap-1">
              <Image source={icons.nairaBlack} resizeMode='contain' className=""/>
              <Text className="font-bgmedium text-2xl">60,000</Text>
            </View>
          </View>
          <CustomButton containerStyles="w-[199px] h-[56px]" textStyles="font-bgmedium text-lg" title="Checkout"/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Cart
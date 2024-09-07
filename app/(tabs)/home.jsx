import { View, Text, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "../../constants/icons";
import images from "../../constants/images";
import SearchInput from "../../components/SearchInput";

const Home = () => {
  return (
    <>
      <SafeAreaView className="h-full bg-white">
        <View className="px-4 my-6">
          <View className=" flex-row justify-between items-center">
            <Image source={icons.menu} resizeMode="contain" />
            <View className="items-center">
              <Image source={icons.basket} resizeMode="contain" />
              <Text className="font-bgmedium">My basket</Text>
            </View>
          </View>
          <View className="mt-4">
            <Text className="text-2xl text-primary w-[80%]">
              <Text className="font-bgmedium">Hello Tony, {""}</Text>
              <Text className="font-bgregular">
                What fruit salad combo do you want today?
              </Text>
            </Text>
          </View>
          <View className="mt-8 flex-row w-full justify-between items-center">
            <SearchInput className="mt-8" />
            <Image
              source={icons.filter}
              resizeMode="contain"
              className="w-10 h-5"
            />
          </View>

          <View className="mt-12">
            <Text className="text-3xl font-bgmedium text-primary">
              Recommended Combo
            </Text>
            <View className="mt-2 flex-row justify-between">
              <View className="max-w-[200px] h-[210px] rounded-3xl bg-white shadow-sm shadow-black-100 p-4">
                <Image
                  source={icons.like}
                  resizeMode="contain"
                  className="self-end"
                />
                <View className=" justify-center items-center">
                  <Image source={images.honeyLimeFruit} />
                  <Text className="text-center font-bgmedium text-primary text-base mt-4">
                    Honey Lime Combo
                  </Text>
                </View>
                <View className="flex-row justify-between items-center mt-2">
                  <View className="flex-row items-center gap-1">
                    <Image source={icons.naira} />
                    <Text className="text-secondary-200 font-bgmedium text-sm">
                      2,000
                    </Text>
                  </View>
                  <View className="w-[24px] h-[24px] items-center justify-center bg-secondary-100 rounded-full">
                    <Image source={icons.plus} className="w-[12px] h-[12px]" />
                  </View>
                </View>
              </View>
              <View className="max-w-[200px] h-[210px] rounded-3xl bg-white shadow-sm shadow-black-100 p-4">
                <Image
                  source={icons.like}
                  resizeMode="contain"
                  className="self-end"
                />
                <View className=" justify-center items-center">
                  <Image source={images.honeyLimeFruit} />
                  <Text className="text-center font-bgmedium text-primary text-base mt-4">
                    Berry Mango Combo
                  </Text>
                </View>
                <View className="flex-row justify-between items-center mt-2">
                  <View className="flex-row items-center gap-1">
                    <Image source={icons.naira} />
                    <Text className="text-secondary-200 font-bgmedium text-sm">
                      2,000
                    </Text>
                  </View>
                  <View className="w-[24px] h-[24px] items-center justify-center bg-secondary-100 rounded-full">
                    <Image source={icons.plus} className="w-[12px] h-[12px]" />
                  </View>
                </View>
              </View>
            </View>
          </View>

          
        </View>
      </SafeAreaView>
      <StatusBar backgroundColor="#fff" style="dark" />
    </>
  );
};

export default Home;

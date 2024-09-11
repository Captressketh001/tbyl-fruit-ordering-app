import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import icons from "../../constants/icons";
import images from "../../constants/images";
import { router } from "expo-router";
import CustomButton from "../../components/customButton";

const AddToCart = () => {
  const goBack = () => {
    router.replace("/home");
  };
  const addToBasket = () => {
    router.push("/cart");
  };
  return (
    <>
      <SafeAreaView className="h-full  bg-secondary box-border">
        <View className="h-screen">
          <View className="h-[35%] px-6 w-full justify-center">
            <TouchableOpacity
              onPress={goBack}
              className="bg-white rounded-full  w-[80px] h-[32px] flex-row gap-1 justify-center items-center"
            >
              <Image source={icons.back} resizeMode="contain" />
              <Text className="font-bgmedium text-base">Go back</Text>
            </TouchableOpacity>
            <View className="items-center">
              <Image source={images.quinoa} />
            </View>
          </View>
          <View className="h-[65%] bg-white rounded-t-3xl">
            <View className="mt-4 p-6 border-b border-b-[#F3F3F3]">
              <Text className="text-[32px] font-bgmedium text-primary">
                Quina Fruit Salad
              </Text>
              <View className="flex-row justify-between items-center mt-4">
                <View className="flex-row items-center gap-4">
                  <View className="w-[32px] h-[32px] items-center justify-center border border-black rounded-full">
                    <Image source={icons.minusBlack} className="w-4" />
                  </View>
                  <Text className="font-bgmedium text-xl">1</Text>
                  <View className="w-[32px] h-[32px] items-center justify-center bg-secondary-100 rounded-full">
                    <Image source={icons.plus} className="w-[12px] h-[12px]" />
                  </View>
                </View>
                <View className="flex-row items-center">
                <Image source={icons.nairaBlack} />
                  <Text className="font-bgmedium text-2xl">2000</Text>
                </View>
              </View>
            </View>
            <View className="mt-4 p-6 border-b border-b-[#F3F3F3]">
              <Text className="text-xl font-bgmedium text-primary">
                One Pack contains:
              </Text>
              <View className="w-[45%] h-1 bg-secondary" />
              <View className="flex-row justify-between items-center mt-4">
                <View className="flex-row items-center gap-4">
                    <Text className="font-bgmedium text-[16px] text-primary">Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh Mint.</Text>
                </View>
                
              </View>
            </View>
            <View className="px-6 pt-6 justify-between">
              <Text className="text-sm font-bgmedium text-primary">
              If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make
              </Text>
              <View className="flex-row justify-between items-center mt-12">
                <View className="flex-row items-center gap-4">
                  
                  <View className="w-[48px] h-[48px] items-center justify-center bg-secondary-100 rounded-full">
                    <Image source={icons.like} />
                  </View>
                </View>
               <CustomButton containerStyles="w-[219px]" textStyles="font-bgmedium text-lg" handlePress={addToBasket} title="Add to Basket"/>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <StatusBar backgroundColor="#FFA451" style="dark" />
    </>
  );
};

export default AddToCart;

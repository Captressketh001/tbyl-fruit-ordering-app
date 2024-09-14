import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "../../constants/icons";
import images from "../../constants/images";
import { router } from "expo-router";
import CustomButton from "../../components/customButton";
import CustomBottomSheet from "../../components/CustomBottomSheet";
import FormField from "../../components/FormField";

const Cart = () => {
  const goBack = () => {
    router.replace("/add");
  };
  const completeDelivery = () => {
    router.replace("/complete");
  };
  const setCardPayment = () => {
    setIsVisible(false);
    setIsCardPayment(true);
  };
  const [isVisible, setIsVisible] = useState(false);
  const [isCardPayment, setIsCardPayment] = useState(false);
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
                <Image
                  source={images.quinoa}
                  className="w-[40px] h-[40px]"
                  resizeMode="contain"
                />
              </View>
              <View className="">
                <Text className="font-bgregular text-[16px]">
                  Quinoa Fruit Salad
                </Text>
                <Text className="font-bgmedium text-sm">2 packs</Text>
              </View>
            </View>
            <View className="flex-row pr-4 items-center">
              <Image
                source={icons.nairaBlack}
                resizeMode="contain"
                className="w-[16px] h -[12.8px]"
              />
              <Text className="font-bgmedium text-[16px]">20,000</Text>
            </View>
          </View>
          <View className="justify-between flex-row mt-8 pb-4 h-[80px] border-b border-b-[#F4F4F4]">
            <View className="flex-row items-center gap-4 pl-4 justify-end">
              <View className="w-[65px] h-[64px] bg-[#F1EFF6] items-center justify-center rounded-lg">
                <Image
                  source={images.kiwiFruit}
                  className="w-[40px] h-[40px]"
                  resizeMode="contain"
                />
              </View>
              <View className="">
                <Text className="font-bgregular text-[16px]">
                  Quinoa Fruit Salad
                </Text>
                <Text className="font-bgmedium text-sm">2 packs</Text>
              </View>
            </View>
            <View className="flex-row pr-4 items-center">
              <Image
                source={icons.nairaBlack}
                resizeMode="contain"
                className="w-[16px] h -[12.8px]"
              />
              <Text className="font-bgmedium text-[16px]">20,000</Text>
            </View>
          </View>
          <View className="justify-between flex-row mt-8 pb-4 h-[80px] border-b border-b-[#F4F4F4]">
            <View className="flex-row items-center gap-4 pl-4 justify-end">
              <View className="w-[65px] h-[64px] bg-[#FEF0F0] items-center justify-center rounded-lg">
                <Image
                  source={images.berryFruit}
                  className="w-[40px] h-[40px]"
                  resizeMode="contain"
                />
              </View>
              <View className="">
                <Text className="font-bgregular text-[16px]">
                  Quinoa Fruit Salad
                </Text>
                <Text className="font-bgmedium text-sm">2 packs</Text>
              </View>
            </View>
            <View className="flex-row pr-4 items-center">
              <Image
                source={icons.nairaBlack}
                resizeMode="contain"
                className="w-[16px] h -[12.8px]"
              />
              <Text className="font-bgmedium text-[16px]">20,000</Text>
            </View>
          </View>
        </View>
        <View className="justify-between flex-row px-4">
          <View className="">
            <Text className="font-bgmedium text-[16px]">Total</Text>
            <View className="flex-row items-center gap-1">
              <Image
                source={icons.nairaBlack}
                resizeMode="contain"
                className=""
              />
              <Text className="font-bgmedium text-2xl">60,000</Text>
            </View>
          </View>
          <CustomButton
            containerStyles="w-[199px] h-[56px]"
            handlePress={() => setIsVisible(true)}
            textStyles="font-bgmedium text-lg"
            title="Checkout"
          />
        </View>
      </View>
      <CustomBottomSheet
        visible={isVisible}
        height="h-1/2"
        onClose={() => setIsVisible(false)}
      >
        <View className="">
          <FormField
            title="Delivery Address"
            placeholder="6A, Marigold street, Emerald Estate"
            otherStyles="space-y-4 mb-8"
          />
          <FormField
            title="Number we can call"
            placeholder="09087476634"
            otherStyles="space-y-4"
          />
        </View>
        <View className="flex-row justify-between items-center mt-8">
          <CustomButton
            containerStyles="w-[140px] bg-white border border-secondary"
            textStyles="text-secondary text-lg font-bgmedium"
            title="Pay on Delivery"
            handlePress={completeDelivery}
          />
          <CustomButton
            containerStyles="w-[140px] bg-white border border-secondary"
            textStyles="text-secondary text-lg font-bgmedium"
            handlePress={setCardPayment}
            title="Pay with Card"
          />
        </View>
      </CustomBottomSheet>
      <CustomBottomSheet
        visible={isCardPayment}
        height="h-4/6"
        onClose={() => setIsCardPayment(false)}
      >
        <View className="">
          <FormField
            title="Card Holder's Name"
            placeholder="Oluwakemi Omoyeni"
            otherStyles="space-y-4 mb-8"
          />
          <FormField
            title="Card Number"
            placeholder="09087476634"
            otherStyles="space-y-4"
          />
          <View className="flex-row justify-between items-center mt-8">
            <FormField
              title="Expiry Date"
              placeholder="10/27"
              otherStyles="space-y-4 w-[134px] mb-8"
            />
            <FormField
              title="CVV"
              placeholder="097"
              otherStyles="space-y-4 w-[134px] mb-8"
            />
          </View>
        </View>
        <View className="justify-center items-center">
        <CustomButton
            containerStyles="w-[140px] bg-white border border-secondary"
            textStyles="text-secondary text-lg font-bgmedium"
            title="Complete Order"
            handlePress={() => router.push('complete')}
          />
        </View>
      </CustomBottomSheet>
    </SafeAreaView>
  );
};

export default Cart;

import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "../../constants/icons";
import images from "../../constants/images";
import SearchInput from "../../components/SearchInput";
import { router } from "expo-router";
const Home = () => {
  const [activeTab, setActiveTab] = useState("Hottest");

  const tabs = ["Hottest", "Popular", "New combo", "Top"];
  const salads = [{
    id: 1,
    image: images.berryFruit,
    name: 'Quinoa',
    amount: 10000,
    bg: '#FFFAEB'
  },
  {
    id: 2,
    image: images.tropicalFruit,
    name: 'Tropical',
    amount: 10000,
    bg: '#FEF0F0'
  },
  {
    id: 3,
    image: images.tropicalFruit,
    name: 'Tropical',
    amount: 10000,
    bg: '#F1EFF6'
  },
  {
    id: 4,
    image: images.honeyLimeFruit,
    name: 'Tropical',
    amount: 10000,
    bg: '#F1EFF6'
  }
]
  const addToBasket = () => {
    router.push('/add')
  };
  return (
    <>
      <SafeAreaView className="h-full bg-white">
        <View className="my-6">
          <View className="px-6 flex-row justify-between items-center">
            <Image source={icons.menu} resizeMode="contain" />
            <View className="items-center">
              <Image source={icons.basket} resizeMode="contain" />
              <Text className="font-bgmedium">My basket</Text>
            </View>
          </View>
          <View className="mt-4 px-6">
            <Text className="text-2xl text-primary w-[80%]">
              <Text className="font-bgmedium">Hello Tony, {""}</Text>
              <Text className="font-bgregular">
                What fruit salad combo do you want today?
              </Text>
            </Text>
          </View>
          <View className="mt-8 px-6 flex-row w-full justify-between items-center">
            <SearchInput className="mt-8" />
            <Image
              source={icons.filter}
              resizeMode="contain"
              className="w-10 h-5"
            />
          </View>

          <View className="mt-4 px-6">
            <Text className="text-3xl font-bgmedium text-primary">
              Recommended Combo
            </Text>
            <View className="mt-2 flex-row justify-between ">
              <View className="max-w-[200px] h-[210px] rounded-3xl bg-white shadow-sm shadow-black-100 p-4">
                <Image
                  source={icons.like}
                  resizeMode="contain"
                  className="self-end"
                />
                <View className=" justify-center items-center">
                  <Image source={images.honeyLimeFruit} className="w-[80px] h-[80px]" resizeMode="contain"/>
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
                  <TouchableOpacity onPress={addToBasket} className="w-[24px] h-[24px] items-center justify-center bg-secondary-100 rounded-full">
                    <Image source={icons.plus} className="w-[12px] h-[12px]" />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="max-w-[200px] h-[210px] rounded-3xl bg-white shadow-sm shadow-black-100 p-4">
                <Image
                  source={icons.like}
                  resizeMode="contain"
                  className="self-end"
                />
                <View className=" justify-center items-center">
                  <Image source={images.honeyLimeFruit} className="w-[80px] h-[80px]" resizeMode="contain" />
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
                  <TouchableOpacity onPress={addToBasket} className="w-[24px] h-[24px] items-center justify-center bg-secondary-100 rounded-full">
                    <Image source={icons.plus} className="w-[12px] h-[12px]" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View className="flex-row px-6 justify-between items-center mt-8 bg-white">
            {tabs.map((tab) => (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab)}
              >
                <Text
                  className={` font-bgmedium ${
                    activeTab === tab ? "text-primary text-lg " : "text-[#938DB5] text-lg "
                  }`}
                >
                  {tab}
                </Text>
                {activeTab === tab && (
                  <View className="w-6 h-1 bg-secondary mt-1" />
                )}
              </TouchableOpacity>
            ))}
          </View>
          <FlatList 
            data={salads}
            keyExtractor={item => item.id}
            className="pl-6"
            renderItem={({item}) => (
              <View className="mt-2  flex-row">
                <View style={{ backgroundColor: item.bg }} className="max-w-[150px] min-h-[140px] rounded-xl mr-4 shadow-sm shadow-black-100 px-4 py-1">
                  <Image
                    source={icons.like}
                    resizeMode="contain"
                    className="self-end"
                  />
                  <View className="justify-center items-center">
                    <Image source={item.image}  className="w-[80px] h-[80px]" resizeMode="contain" />
                    <Text className="text-center font-bgmedium text-primary text-base mt-2">
                      {`${item.name} fruit salad`}
                    </Text>
                  </View>
                  <View className="flex-row justify-between items-center mt-1">
                    <View className="flex-row items-center gap-1">
                      <Image source={icons.naira} />
                      <Text className="text-secondary-200 font-bgmedium text-sm">
                        {item.amount}
                      </Text>
                    </View>
                    <TouchableOpacity onPress={addToBasket} className="w-[24px] h-[24px] items-center justify-center bg-secondary-100 rounded-full">
                      <Image source={icons.plus} className="w-[12px] h-[12px]" />
                    </TouchableOpacity>
                  </View>
                </View>
              
            </View>
            )}
            horizontal
            // contentOffset={{x: 170}}
          />
        </View>
      </SafeAreaView>
      <StatusBar backgroundColor="#fff" style="dark"/>
    </>
  );
};

export default Home;

import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import images from "../constants/images";
import { router } from "expo-router";
import CustomButton from "../components/customButton";

export default function App() {
  const submit = () => {
    router.push('/sign-in')
  };
  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="h-screen">
          <View className="bg-secondary h-3/5 w-full justify-end items-center">
            <Image source={images.fruitDrops} resizeMode="" className="self-end mr-16 -mb-8" />
            <Image source={images.fruitBasketTwo} resizeMode="contain" />
            <Image
              source={images.ellipse}
              className="w-full mt-3 mb-10"
              resizeMode="contain"
            />
          </View>
          <View className="h-2/5 mt-10 px-4">
            <Text className="font-bgmedium text-2xl text-primary">
              Get the Freshest Fruit Salad Combo
            </Text>
            <Text className="font-bgmedium text-lg w-[85%] text-primary-100 mt-2">
              We deliver the best and freshest fruit salad in town. Order for a
              combo today!!!
            </Text>
            <CustomButton
              title="Let's Continue"
              handlePress={submit}
              containerStyles="w-full mt-14"
              textStyles="text-white font-bgmedium"
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#FFA451" style="light" />
    </SafeAreaView>
  );
}

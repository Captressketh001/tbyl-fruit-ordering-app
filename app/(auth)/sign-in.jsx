import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import images from "../../constants/images";
import { router } from "expo-router";
import CustomButton from "../../components/customButton";
import FormField from "../../components/FormField";

export default function App() {
  const submit = () => {
    router.push('/home')
  };
  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="h-screen">
          <View className="bg-secondary h-3/5 w-full justify-end items-center">
            <Image source={images.fruitDrops} resizeMode="" className="self-end mr-16 -mb-8" />
            <Image source={images.fruitBasketOne} resizeMode="contain" />
            <Image
              source={images.ellipse}
              className="w-full mt-3 mb-10"
              resizeMode="contain"
            />
          </View>
          <View className="h-2/5 mt-10 px-4">
            <Text className="font-bgmedium text-2xl text-primary">
              What's your first name?
            </Text>
            <FormField otherStyles="space-y-1" placeholder="Tony"/>
            <CustomButton
              title="Start Ordering"
              handlePress={submit}
              containerStyles="w-full mt-10"
              textStyles="text-white font-bgmedium"
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#FFA451" style="light" />
    </SafeAreaView>
  );
}

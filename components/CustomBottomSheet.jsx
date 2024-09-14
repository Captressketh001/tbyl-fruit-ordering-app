import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Platform,
  TouchableOpacity,
  Modal,
  Alert,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import icons from "../constants/icons";

const CustomBottomSheet = ({
  visible,
  onClose,
  height,
  title,
  onSubmit,
  isSubmitting,
  children,
}) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end bg-black/40">
        <View className="flex-row gap-4 mb-6 items-center justify-center">
          <TouchableOpacity
            onPress={onClose}
            className="p-3 rounded-full bg-white border border-gray-100 items-center justify-center"
          >
            <Image source={icons.close} resizeMode="contain" />
          </TouchableOpacity>
        </View>
        <View className={`bg-white p-6 rounded-t-3xl ${height}`}>
          {/* Render dynamic children content here */}
          {children}

          {/* <View className="flex-row justify-between mt-8">
            <TouchableOpacity
              onPress={onClose}
              disabled={isSubmitting}
              className="bg-blue-100 shadow-lg w-28 h-10 items-center justify-center rounded-lg"
            >
              <Text className="text-black text-center">Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onSubmit}
              disabled={isSubmitting}
              className="bg-secondary w-28 h-10 items-center justify-center  rounded-lg"
            >
              <Text className="text-white text-center">
                {isSubmitting ? "Processing..." : "Submit"}
              </Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    </Modal>
  );
};

export default CustomBottomSheet;

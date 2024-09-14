import { View, Text, TextInput} from 'react-native'
import React from 'react'

const FormField = ({title, value, placeholder, 
    handleChangeText, otherStyles}) => {
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-xl text-primary font-bgmedium">{title}</Text>
      <View className="w-full h-16 px-4 bg-[#F3F1F1] rounded-2xl
       focus:border-secondary items-center flex-row">
        <TextInput
            className="flex-1 text-[#C2BDBD] font-bgmedium text-base"
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
        />
      </View>
    </View>
  )
}

export default FormField
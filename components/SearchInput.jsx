import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React, {useState} from 'react'
import icons from "../constants/icons"
// import { usePathname, router } from 'expo-router'

const SearchInput = ()=> {
        // const pathname = usePathname()
        // const [query, setQuery] = useState(initialQuery || '')
  return (
      <View className="w-[85%] h-16 px-8 bg-[#F3F4F9] rounded-2xl
       focus:border-secondary items-center flex-row space-x-6">
        <TouchableOpacity
                // onPress={() => {
                //     if (!query){
                //        return Alert.alert('Missing query', 
                //         "Please input something to search results accross database") 
                //     }
                //     if (pathname.startsWith('/search')) {
                //         router.setParams({query})
                //     } else {
                //         router.push(`/search/${query}`)
                //     }
                // }}
            >
                <Image source={icons.search} className="w-5 h-5"
                    resizeMode='contain'
                />
            </TouchableOpacity>
        <TextInput
            className="flex-1 text-[#86869E] mt-0.5 font-bgmedium text-base"
            value=''
            placeholder="Search for fruit salad combos"
            placeholderTextColor="#86869E"
            // onChangeText={(e) => setQuery(e)}
        />
        
            
      </View>
  )
}

export default SearchInput
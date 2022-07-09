import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ChevronDownIcon, UserIcon } from 'react-native-heroicons/outline'

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);

  return (
    <SafeAreaView>
      <Text className="text-red-500">
        {/* Header */}
        
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image
                source={{
                    uri:'https://links.papareact.com/wru'
                }}
                className='h-7 w-7 bg-gray-300mp-4 rounded-full'
            />
            <View>
                <Text className="font-bold text-gray-400 text-xs">Raeven Market</Text>
                <Text className="font-bold text-xl">
                    Current Location
                    <ChevronDownIcon size={20} color="#00CCBB"/>
                </Text>
            </View>
            <UserIcon size={35} color="#00CCBB"/>
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

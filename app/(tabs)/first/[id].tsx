import { View, Text, SafeAreaView, Pressable, Image } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { Ionicons, Entypo, Fontisto } from "@expo/vector-icons";
import { Book } from "../../../utils/type";

type Props = {};

const FirstDetails = (props: Props) => {
  const { id, title, author, rating, description } = useLocalSearchParams();
  const router = useRouter();

  return (
    <SafeAreaView className="mx-6">
      <View className="flex-row items-center justify-between">
        <Pressable
          className="bg-[#ebebeb] w-[40px] rounded-md items-center py-[3px]"
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </Pressable>
        <View className="flex-row items-center gap-5">
          <Fontisto name="bookmark" size={24} color="black" />
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </View>
      </View>
      <Image
        className="mt-10 mb-7"
        source={{
          uri: "data:image/jpeg;base64,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",
        }}
        height={250}
        resizeMode="contain"
      />
      <Text className="text-center font-bold text-xl mb-3">{title}</Text>
      <Text className="uppercase text-gray-500 text-md text-center mb-3">
        {author}
      </Text>
      <View className="flex-row items-center justify-center mb-8">
        <View className="flex-row items-center justify-center gap-2 mr-3">
          <Ionicons name="star" size={15} color="orange" />
          <Ionicons name="star" size={15} color="orange" />
          <Ionicons name="star" size={15} color="orange" />
          <Ionicons name="star" size={15} color="orange" />
          <Ionicons name="star" size={15} color="lightgray" />
        </View>
        <Text>{rating}</Text>
      </View>
      <Text className="text-lg text-gray-500">{description}</Text>
    </SafeAreaView>
  );
};

export default FirstDetails;

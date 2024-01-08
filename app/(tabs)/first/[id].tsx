import { View, Text, SafeAreaView, Pressable, Image } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { Ionicons, Entypo, Fontisto } from "@expo/vector-icons";
import { Book } from "../../../utils/type";
import useDateFormatter from "../../../lib/useDateFormatter";
import convertToLongDate from "../../../lib/useDateFormatter";
import { useBookById } from "../../../supabase/useBookById";

type Props = {};

const FirstDetails = (props: Props) => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const { data: book, isLoading, isError } = useBookById(id);

  if (isLoading) {
    return (
      <SafeAreaView className="mx-6">
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (isError) {
    return (
      <SafeAreaView className="mx-6">
        <Text>Erorr loading book by id</Text>
      </SafeAreaView>
    );
  }

  const {
    author,
    description,
    genre,
    publishedDate,
    rating,
    title,
    image_url,
  } = book[0];

  const formattedDate =
    typeof publishedDate === "string" ? convertToLongDate(publishedDate) : "";

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
        className="mt-10 mb-7 bg-black mx-auto"
        source={{
          uri: `https://nrmznxltimfylxxvkitg.supabase.co/storage/v1/object/public/books/${image_url}`,
        }}
        height={250}
        width={160}
      />
      <Text className="text-center font-bold text-xl">{title}</Text>
      <Text className="text-center text-xs text-gray-700 capitalize mb-5">
        {genre}
      </Text>
      <Text className="uppercase text-gray-500 text-md text-center mb-2">
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
      <Text className="text-lg font-bold mt-5">Published Date</Text>
      <Text>{formattedDate}</Text>
    </SafeAreaView>
  );
};

export default FirstDetails;

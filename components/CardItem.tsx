import { View, Text, Pressable, Image } from "react-native";
import React, { useCallback, useMemo } from "react";
import { useRouter } from "expo-router";
import { Book } from "../utils/type";

type CardItemProps = {
  data: Book;
};

const CardItem = ({ data }: CardItemProps) => {
  const randomBool = useMemo(() => Math.random() < 0.5, []);
  const router = useRouter();

  const handleBookDetails = useCallback(() => {
    router.push({
      pathname: `/(tabs)/first/${data.id}`,
      params: {
        id: data.id,
        title: data.title,
        author: data.author,
        rating: data.rating,
        description: data.description,
      },
    });
  }, []);

  return (
    <Pressable className="" onPress={handleBookDetails}>
      <Image
        source={{ uri: data.image }}
        width={185}
        height={randomBool ? 220 : 320}
      />
      <Text className="font-bold text-lg mt-2">{data.title}</Text>
      <Text className="text-gray-500">{data.author}</Text>
      <Text className="mt-2 mb-5">{data.rating}</Text>
    </Pressable>
  );
};

export default CardItem;

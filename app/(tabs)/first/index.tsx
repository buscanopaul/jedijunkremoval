import { View, Text, Pressable } from "react-native";
import React, { useCallback } from "react";
import { useRouter } from "expo-router";
import MasonryList from "@react-native-seoul/masonry-list";
import CardItem from "../../../components/CardItem";
import { useBooks } from "../../../supabase/useBooks";

const First = () => {
  const { data: books, isLoading, isError } = useBooks();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error loading books</Text>;
  }

  if (books && books.length === 0) {
    return <Text>No Data</Text>;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <MasonryList
        containerStyle={{ paddingLeft: 20 }}
        data={books}
        keyExtractor={(item): string => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CardItem data={item} />}
      />
    </View>
  );
};

export default First;

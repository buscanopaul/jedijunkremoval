import React from "react";
import { Pressable, Text } from "react-native";
import { useUpdateBookById } from "../supabase/useUpdateBookById";

const Update = ({
  id,
  title,
  author,
  rating,
  description,
  publishedDate,
  genre,
  setLoading,
  onSettledCallback,
}) => {
  const {
    mutate: updateBook,
    isLoading,
    isError,
    isSuccess,
  } = useUpdateBookById(onSettledCallback);
  const handleSubmit = () => {
    updateBook({
      id,
      title,
      author,
      rating,
      description,
      publishedDate,
      genre,
    });
  };

  if (isLoading) {
    setLoading(true);
  }

  if (isError) {
    setLoading(false);
  }

  if (isSuccess) {
    setLoading(false);
  }

  return (
    <Pressable
      onPress={handleSubmit}
      className="bg-yellow-400 w-20 p-2 active:opacity-70"
    >
      <Text className="font-bold text-center">Update</Text>
    </Pressable>
  );
};

export default Update;

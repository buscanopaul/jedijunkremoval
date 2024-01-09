import { useMutation, useQueries, useQuery, useQueryClient } from "react-query";
import { generateRandomString } from "../lib/generateRandomString";
import { Book } from "../utils/type";
import { supabase } from "./supabase";
import { useRouter } from "expo-router";

const insertBook = async ({
  title,
  author,
  rating,
  description,
  publishedDate,
  genre,
}: Book) => {
  const { data } = await supabase.from("books").insert({
    title: title,
    author: author,
    rating: parseFloat(rating).toFixed(1),
    description: description,
    publishedDate: publishedDate,
    genre: genre,
    image_url: generateRandomString(),
  });

  return data;
};

export const userInsertBook = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(insertBook, {
    onSuccess: () => {
      queryClient.invalidateQueries("books");
      router.replace("/(tabs)/first");
    },
  });
};

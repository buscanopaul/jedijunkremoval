import { useRouter } from "expo-router";
import { useMutation, useQueryClient } from "react-query";
import useAppStore from "../store/app";
import { supabase } from "./supabase";

const updateBook = async ({
  id,
  title,
  author,
  rating,
  description,
  publishedDate,
  genre,
}) => {
  const { error } = await supabase
    .from("books")
    .update({
      title: title,
      author: author,
      rating: rating,
      description: description,
      publishedDate: publishedDate,
      genre: genre,
    })
    .eq("id", id);
};

export const useUpdateBookById = (onSettledCallback) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const setIsDisabledUpdate = useAppStore((state) => state.setIsDisabledUpdate);

  return useMutation(updateBook, {
    onSuccess: () => {
      queryClient.invalidateQueries("books");
      router.replace("/(tabs)/first");
    },
    onSettled: () => {
      if (onSettledCallback) {
        setIsDisabledUpdate(true);
        onSettledCallback();
      }
    },
  });
};

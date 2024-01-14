import { useMutation, useQueryClient } from "react-query";
import { supabase } from "./supabase";
import { useRouter } from "expo-router";

const deleteBook = async (id: string) => {
  const { error } = await supabase.from("books").delete().eq("id", id);

  return;
};

export const userDeleteBook = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(deleteBook, {
    onSuccess: () => {
      queryClient.invalidateQueries("books");
      router.back();
    },
    onSettled: () => {},
  });
};

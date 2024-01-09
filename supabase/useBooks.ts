import { useQuery } from "react-query";
import { supabase } from "./supabase";

const fetchBooks = async () => {
  const { data } = await supabase
    .from("books")
    .select("id,title, image_url, rating, author")
    .order("created_at", { ascending: false });
  return data;
};

export const useBooks = () => {
  return useQuery("books", fetchBooks);
};

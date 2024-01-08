import { supabase } from "./supabase";
import { useQuery, UseQueryOptions, QueryFunctionContext } from "react-query";

const fetchBookById = async (id: string) => {
  const { data } = await supabase.from("books").select().eq("id", id);

  return data;
};

export const useBookById = (id: string, options?: UseQueryOptions) => {
  return useQuery(["bookById", id], () => fetchBookById(id), options);
};

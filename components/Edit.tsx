import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useCallback } from "react";
import { Pressable } from "react-native";
import useStore from "../store/app";
import { Book } from "../utils/type";

type EditProps = {
  data: Book;
};

const Edit = ({ data }: EditProps) => {
  const router = useRouter();
  const setIsDisabledUpdate = useStore((state) => state.setIsDisabledUpdate);

  const handleEditBook = useCallback(() => {
    setIsDisabledUpdate(false);
    router.replace({
      pathname: "/(tabs)/third",
      params: {
        data: JSON.stringify(data),
        bookID: data[0].id,
      },
    });
  }, []);

  return (
    <Pressable onPress={handleEditBook} className="active:opacity-70">
      <MaterialIcons name="edit" size={24} color="black" />
    </Pressable>
  );
};

export default Edit;

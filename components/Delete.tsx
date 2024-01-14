import { View, Text, Pressable, Alert } from "react-native";
import React, { useCallback } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { userDeleteBook } from "../supabase/useDeleteBook";

type DeleteProps = {
  id: string | string[] | undefined;
};

const Delete = ({ id }: DeleteProps) => {
  const { mutate: deleteBook } = userDeleteBook();

  const handleConfirmDelete = useCallback(() => {
    deleteBook(id);
  }, []);

  const handleDelete = useCallback(() => {
    Alert.alert(
      "Confirmation",
      "Are you sure you want to delete?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: handleConfirmDelete,
        },
      ],
      { cancelable: false }
    );
  }, []);

  return (
    <Pressable onPress={handleDelete} className="mr-5 active:opacity-70">
      <MaterialIcons name="delete-outline" size={24} color="black" />
    </Pressable>
  );
};

export default Delete;

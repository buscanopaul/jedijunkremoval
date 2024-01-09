import { View, Text, TextInput, Pressable } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import InputField from "../../../components/InputField";
import { userInsertBook } from "../../../supabase/useInsertBook";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";

type Props = {};

const Second = (props: Props) => {
  const [title, setTitle] = useState<string | undefined>("");
  const [author, setAuthor] = useState<string | undefined>("");
  const [rating, setRating] = useState<string | undefined>("");
  const [description, setDescription] = useState<string | undefined>("");
  const [publishedDate, setPublishedDate] = useState(dayjs());
  const [genre, setGenre] = useState<string | undefined>("");

  const { mutate: insertBook, isLoading, isError, data } = userInsertBook();

  const handleSubmit = () => {
    insertBook({
      title,
      author,
      rating,
      description,
      publishedDate,
      genre,
    });
  };

  useEffect(() => {
    handleSuccess();
  }, [data]);

  const handleSuccess = () => {
    setTitle("");
    setAuthor("");
    setRating("");
    setDescription("");
    setPublishedDate("");
    setGenre("");
  };

  const handleRatingChange = (text) => {
    // Regular expression to allow only float numbers
    const floatRegex = /^[0-9]*[.]?[0-9]*$/;

    if (
      (floatRegex.test(text) || text === "") &&
      (text === "" || parseFloat(text) <= 5)
    ) {
      setRating(text);
    }
  };

  return (
    <View className="flex-1 bg-white px-6">
      <InputField
        value={title}
        placeholder="Enter title"
        onChangeText={setTitle}
      />
      <InputField
        value={author}
        placeholder="Enter author"
        onChangeText={setAuthor}
      />
      <InputField
        value={rating}
        placeholder="Enter rating"
        onChangeText={handleRatingChange}
        keyboardType="numeric"
      />
      <InputField
        value={description}
        placeholder="Enter description"
        onChangeText={setDescription}
        multiline
        numberOfLines={10}
        maxLength={100}
        height="h-20"
      />
      <DateTimePicker
        value={publishedDate}
        onValueChange={(date) => setPublishedDate(date)}
        mode="date"
      />
      <InputField
        value={genre}
        placeholder="Enter genre"
        onChangeText={setGenre}
      />
      <Pressable
        onPress={handleSubmit}
        className="bg-yellow-400 w-20 p-2 active:opacity-70"
      >
        <Text className="font-bold text-center">
          {isLoading ? "Loading..." : "Submit"}
        </Text>
      </Pressable>
      {isError && <p>Error loading books</p>}
    </View>
  );
};

export default Second;

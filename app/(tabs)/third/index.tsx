import dayjs from "dayjs";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import InputField from "../../../components/InputField";
import Update from "../../../components/Update";
import useStore from "../../../store/app";
import { useBookById } from "../../../supabase/useBookById";

type Props = {};

const Third = (props: Props) => {
  const { bookID } = useLocalSearchParams();
  const [id, setId] = useState("");
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [rating, setRating] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [publishedDate, setPublishedDate] = useState(dayjs());
  const [genre, setGenre] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const isDisabledUpdate = useStore((state) => state.isDisabledUpdate);

  const { data: book, isLoading, isError } = useBookById(bookID);

  if (isError) {
    console.log("is error");
  }

  const handleRatingChange = (text: string) => {
    // Regular expression to allow only float numbers
    const floatRegex = /^[0-9]*[.]?[0-9]{0,1}$/;

    if (
      (floatRegex.test(text) || text === "") &&
      (text === "" || parseFloat(text) <= 5)
    ) {
      setRating(text);
    }
  };

  useEffect(() => {
    if (book && book.length > 0) {
      const bookObject = book[0];
      setId(bookObject.id);
      setTitle(bookObject.title);
      setAuthor(bookObject.author);
      setRating(bookObject.rating);
      setDescription(bookObject.description);
      setPublishedDate(bookObject.publishedDate);
      setGenre(bookObject.genre);
    }
  }, [book, isDisabledUpdate]);

  if (isDisabledUpdate) {
  }

  useEffect(() => {
    setLoading(false);
  }, [isDisabledUpdate]);

  return (
    <>
      {isDisabledUpdate || bookID === undefined ? null : (
        <ScrollView className="flex-1 bg-white px-6">
          {(loading || isLoading) && (
            <View className="bg-black z-10 absolute flex-1 h-full w-full items-center justify-center">
              <ActivityIndicator size="small" />
            </View>
          )}
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
          <Update
            id={id}
            title={title}
            author={author}
            rating={rating}
            description={description}
            publishedDate={publishedDate}
            genre={genre}
            setLoading={setLoading}
            onSettledCallback={() => {
              setTitle("");
              setAuthor("");
              setRating("");
              setDescription("");
              setPublishedDate(dayjs());
              setGenre("");
            }}
          />
        </ScrollView>
      )}
    </>
  );
};

export default Third;

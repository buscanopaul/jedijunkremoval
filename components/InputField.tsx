import { View, Text, TextInput } from "react-native";
import React from "react";

type InputFieldProps = {
  value: string | undefined;
  placeholder: string;
  onChangeText: (text: string) => void;
  keyboardType?: string;
  multiline?: boolean;
  numberOfLines?: number;
  maxLength?: number;
  height?: string;
};

const InputField = ({
  value,
  placeholder,
  onChangeText,
  keyboardType,
  multiline,
  numberOfLines,
  maxLength,
  height,
}: InputFieldProps) => {
  return (
    <TextInput
      value={value}
      className={`h-10 mb-5 px-2 text-black border-1 border-2 ${height}`}
      placeholder={placeholder}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      multiline={multiline}
      numberOfLines={numberOfLines}
      maxLength={maxLength}
    />
  );
};

export default InputField;

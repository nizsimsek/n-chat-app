import { Keyboard, StyleSheet, TextInput, View } from "react-native";
("react-native");
import React, { FC, useContext } from "react";
import { MainContext } from "../../contexts";

type MyInputProps = {
  style?: object;
  value?: string;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  keyboardType?: string;
  inputType?: string;
  autoCompleteType?: string;
  caretHidden?: boolean;
  autoCorrect?: boolean;
  onChangeText?: (text: string) => void;
};

const MyInput: FC<MyInputProps> = ({
  style,
  value,
  placeholder,
  maxLength,
  caretHidden = false,
  autoCorrect = false,
  onChangeText,
}) => {
  
  const { state } = useContext(MainContext);
  const { theme } = state;

  const styles = StyleSheet.create({
    input: {
      color: theme === "dark" ? "#F7F7FC" : "#0F1828",
      backgroundColor: theme === "dark" ? "#152033" : "#F7F7FC",
      borderRadius: 4,
      height: 36,
      paddingHorizontal: 8,
      paddingVertical: 6,
    },
    inputPlaceholder: {
      color: "#B7B7B7",
    },
  });
  return (
    <TextInput
      style={[styles.input, style]}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={styles.inputPlaceholder.color}
      maxLength={maxLength}
      caretHidden={caretHidden}
      selectTextOnFocus={false}
      autoCorrect={autoCorrect}
      onChangeText={onChangeText}
      onBlur={Keyboard.dismiss}
    />
  );
};

export default MyInput;

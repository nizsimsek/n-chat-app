import { Pressable, StyleSheet } from "react-native";
import React, { FC } from "react";
import { useTheme } from "@react-navigation/native";
import SubHeading2 from "../texts/SubHeading2";

type MyButtonProps = {
  style?: object;
  type?: string;
  text?: string;
  disabled?: boolean;
  onPress?: () => void;
};

const MyButton: FC<MyButtonProps> = ({
  style,
  type: type = "light-primary",
  text: text = "Button",
  disabled,
  onPress,
}) => {
  const buttonStyles = StyleSheet.create({
    "light-primary": {
      color: "#0F1828",
      backgroundColor: "#F5F5F5",
    },
    "light-secondary": {
      color: "#F7F7FC",
      backgroundColor: "#002DE3",
    },
    "dark-primary": {
      color: "#0F1828",
      backgroundColor: "#F5F5F5",
    },
    "dark-secondary": {
      color: "#F7F7FC",
      backgroundColor: "#375FFF",
    },
  });

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        {
          borderRadius: 50,
          height: 52,
          alignItems: "center",
          justifyContent: "center",
        },
        {
          backgroundColor:
            buttonStyles[type as keyof typeof buttonStyles].backgroundColor,
          ...style,
        },
      ]}
    >
      <SubHeading2
        style={{ color: buttonStyles[type as keyof typeof buttonStyles].color }}
        text={text}
      />
    </Pressable>
  );
};

export default MyButton;

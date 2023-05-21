import { Pressable, StyleSheet } from "react-native";
import React, { FC, useContext } from "react";
import { useTheme } from "@react-navigation/native";
import SubHeading2 from "../texts/SubHeading2";
import { MainContext } from "../../contexts";

type MyButtonProps = {
  style?: object;
  type?: string;
  text?: string;
  disabled?: boolean;
  onPress?: () => void;
};

const MyButton: FC<MyButtonProps> = ({
  style,
  type: type = "primary",
  text: text = "Button",
  disabled,
  onPress,
}) => {
  const { state } = useContext(MainContext);
  const { theme } = state;

  const styles = StyleSheet.create({
    primary: {
      color: theme === "dark" ? "#0F1828" : "#0F1828",
      backgroundColor: theme === "dark" ? "#F5F5F5" : "#F5F5F5",
    },
    secondary: {
      color: theme === "dark" ? "#F7F7FC" : "#F7F7FC",
      backgroundColor: theme === "dark" ? "#375FFF" : "#002DE3",
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
          backgroundColor: styles[type as keyof typeof styles].backgroundColor,
        },
        {
          ...style,
        },
      ]}
    >
      <SubHeading2
        style={{ color: styles[type as keyof typeof styles].color }}
        text={text}
      />
    </Pressable>
  );
};

export default MyButton;

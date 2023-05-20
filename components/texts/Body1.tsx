import { StyleSheet, Text } from "react-native";
import React, { FC } from "react";
import { useTheme } from "@react-navigation/native";

type Body1Props = {
  style?: object;
  text: string;
};

const Body1: FC<Body1Props> = ({ style, text }) => {
  const { colors } = useTheme();
  return (
    <Text
      style={[
        styles.text,
        {
          color: colors.text,
          ...style,
        },
      ]}
    >
      {text}
    </Text>
  );
};

export default Body1;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Mulish-SemiBold",
    fontSize: 14,
    color: "#000000",
  },
});

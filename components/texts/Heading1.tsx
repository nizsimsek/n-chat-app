import { StyleSheet, Text } from "react-native";
import React, { FC } from "react";
import { useTheme } from "@react-navigation/native";

type Heading1Props = {
  style?: object;
  text: string;
};

const Heading1: FC<Heading1Props> = ({ style, text }) => {
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

export default Heading1;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Mulish-Bold",
    fontSize: 32,
    color: "#000000",
  },
});

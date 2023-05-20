import { StyleSheet, Text } from "react-native";
import React, { FC } from "react";
import { useTheme } from "@react-navigation/native";

type Metadata1Props = {
  style?: object;
  text: string;
};

const Metadata1: FC<Metadata1Props> = ({ style, text }) => {
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

export default Metadata1;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Mulish-Regular",
    fontSize: 12,
    color: "#000000",
  },
});

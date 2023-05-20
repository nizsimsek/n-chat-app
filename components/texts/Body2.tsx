import { StyleSheet, Text } from "react-native";
import React, { FC } from "react";
import { useTheme } from "@react-navigation/native";

type Body2Props = {
  style?: object;
  text: string;
};

const Body2: FC<Body2Props> = ({ style, text }) => {
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

export default Body2;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Mulish-Regular",
    fontSize: 14,
    color: "#000000",
  },
});

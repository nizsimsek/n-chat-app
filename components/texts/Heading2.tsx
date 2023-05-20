import { StyleSheet, Text } from "react-native";
import React, { FC } from "react";
import { useTheme } from "@react-navigation/native";

type Heading2Props = {
  style?: object;
  text: string;
};

const Heading2: FC<Heading2Props> = ({ style, text }) => {
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

export default Heading2;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Mulish-Bold",
    fontSize: 24,
    color: "#000000",
  },
});

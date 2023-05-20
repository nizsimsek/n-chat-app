import { StyleSheet, Text } from "react-native";
import React, { FC } from "react";
import { useTheme } from "@react-navigation/native";

type SubHeading1Props = {
  style?: object;
  text: string;
};

const SubHeading1: FC<SubHeading1Props> = ({ style, text }) => {
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

export default SubHeading1;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Mulish-SemiBold",
    fontSize: 18,
    color: "#000000",
  },
});

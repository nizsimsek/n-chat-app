import { StyleSheet, Text } from "react-native";
import React, { FC } from "react";
import { useTheme } from "@react-navigation/native";

type SubHeading2Props = {
  style?: object;
  text: string;
};

const SubHeading2: FC<SubHeading2Props> = ({ style, text }) => {
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

export default SubHeading2;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Mulish-SemiBold",
    fontSize: 16,
    color: "#000000",
  },
});

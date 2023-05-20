import { StyleSheet, Text } from "react-native";
import React, { FC } from "react";
import { useTheme } from "@react-navigation/native";

type Metadata2Props = {
  style?: object;
  text: string;
};

const Metadata2: FC<Metadata2Props> = ({ style, text }) => {
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

export default Metadata2;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Mulish-Regular",
    fontSize: 10,
    color: "#000000",
  },
});

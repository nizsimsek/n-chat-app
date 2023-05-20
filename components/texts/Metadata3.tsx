import { StyleSheet, Text } from "react-native";
import React, { FC } from "react";
import { useTheme } from "@react-navigation/native";

type Metadata3Props = {
  style?: object;
  text: string;
};

const Metadata3: FC<Metadata3Props> = ({ style, text }) => {
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

export default Metadata3;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Mulish-SemiBold",
    fontSize: 10,
    color: "#000000",
  },
});

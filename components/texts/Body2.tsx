import { StyleSheet, Text } from "react-native";
import React, { FC, useContext } from "react";
import { MainContext } from "../../contexts";

type Body2Props = {
  style?: object;
  text: string;
};

const Body2: FC<Body2Props> = ({ style, text }) => {

  const { state } = useContext(MainContext);
  const { theme } = state;

  const styles = StyleSheet.create({
    text: {
      fontFamily: "Mulish-Regular",
      fontSize: 14,
      color: theme === "dark" ? "#F7F7FC" : "#0F1828",
    },
  });

  return (
    <Text
      style={[
        styles.text,
        {
          ...style,
        },
      ]}
    >
      {text}
    </Text>
  );
};

export default Body2;

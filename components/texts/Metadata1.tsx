import { StyleSheet, Text } from "react-native";
import React, { FC, useContext } from "react";
import { MainContext } from "../../contexts";

type Metadata1Props = {
  style?: object;
  text: string;
};

const Metadata1: FC<Metadata1Props> = ({ style, text }) => {
    
  const { state } = useContext(MainContext);
  const { theme } = state;

  const styles = StyleSheet.create({
    text: {
      fontFamily: "Mulish-Regular",
      fontSize: 12,
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

export default Metadata1;

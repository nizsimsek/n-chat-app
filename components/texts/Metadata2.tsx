import { StyleSheet, Text } from "react-native";
import React, { FC, useContext } from "react";
import { MainContext } from "../../contexts";

type Metadata2Props = {
  style?: object;
  text: string;
};

const Metadata2: FC<Metadata2Props> = ({ style, text }) => {  

  const { state } = useContext(MainContext);
  const { theme } = state;

  const styles = StyleSheet.create({
    text: {
      fontFamily: "Mulish-Regular",
      fontSize: 10,
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

export default Metadata2;

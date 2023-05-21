import { Image, Pressable, View } from "react-native";
import React, { FC, useContext, useEffect } from "react";
import { styles } from "./Walkthrough.styles";
import Layout from "../../../components/Layout";
import Heading2 from "../../../components/texts/Heading2";
import { MainContext } from "../../../contexts";
import MyButton from "../../../components/buttons/MyButton";

type WalkthroughScreenProps = {
  navigation: any;
};

const WalkthroughScreen: FC<WalkthroughScreenProps> = ({ navigation }) => {
  const { state, dispatch } = useContext(MainContext);
  const { theme } = state;

  const icon =
    theme == "dark"
      ? require("./../../../assets/walkthrough/dark.png")
      : require("./../../../assets/walkthrough/light.png");

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image source={icon} />
          <Heading2
            style={styles.iconText}
            text="Connect easily with your family and friends over countries"
          />
        </View>
        <View style={styles.buttonContainer}>
          <MyButton
            type="primary"
            text="Terms & Privacy Policy"
            onPress={() => {
              console.log("Terms & Privacy Policy");
            }}
          />
          <MyButton
            type="secondary"
            text="Start Messaging"
            onPress={() => {
              navigation.navigate("NumberScreen");
            }}
          />
        </View>
      </View>
    </Layout>
  );
};

export default WalkthroughScreen;

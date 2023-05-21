import { View } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import { styles } from "./Setting.styles";
import Heading1 from "../../components/texts/Heading1";

const SettingScreen = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Heading1 text="Setting Screen" />
      </View>
    </Layout>
  );
};

export default SettingScreen;

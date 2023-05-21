import { View } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import { styles } from "./Contact.styles";
import Heading1 from "../../components/texts/Heading1";

const ContactScreen = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Heading1 text="Contact Screen" />
      </View>
    </Layout>
  );
};

export default ContactScreen;

import { View } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import { styles } from "./Chat.styles";
import Heading1 from "../../components/texts/Heading1";

const ChatScreen = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Heading1 text="Chat Screen" />
      </View>
    </Layout>
  );
};

export default ChatScreen;

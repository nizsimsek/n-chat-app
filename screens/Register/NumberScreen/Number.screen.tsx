import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { FC, useContext, useState } from "react";
import Layout from "../../../components/Layout";
import { styles } from "./Number.styles";
import { MainContext } from "../../../contexts";
import MyButton from "../../../components/buttons/MyButton";
import Heading2 from "../../../components/texts/Heading2";
import Body2 from "../../../components/texts/Body2";
import MyInput from "../../../components/inputs/MyInput";

type NumberScreenProps = {
  navigation: any;
};
const NumberScreen: FC<NumberScreenProps> = ({ navigation }) => {
  const [number, setNumber] = useState("5555555555");
  const [countryCode, setCountryCode] = useState("+90");

  const { state, dispatch } = useContext(MainContext);

  const { user } = state;

  const continueButtonHandler = () => {
    if (number.length < 10 || countryCode.length < 3) {
      Alert.alert(
        "Error",
        "Number or Country Code not correct. Please try again.",
        [{ text: "OK" }]
      );
      return;
    }
    dispatch({
      type: "SET_USER",
      payload: { ...user, phoneNumber: countryCode + number },
    });
    navigation.navigate("OTPScreen", {
      number: number,
      countryCode: countryCode,
    });
  };
  return (
    <Layout>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              height: "100%",
              width: "100%",
              padding: 20,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "column",
                gap: 10,
              }}
            >
              <Heading2
                style={{
                  textAlign: "center",
                }}
                text="Enter Your Phone Number"
              />
              <Body2
                style={{
                  textAlign: "center",
                  paddingHorizontal: 30,
                }}
                text="Please confirm your country code and enter your phone number"
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 30,
                gap: 10,
              }}
            >
              <MyInput
                onChangeText={setCountryCode}
                value={countryCode}
                placeholder="Code"
                keyboardType="numeric"
                inputType="number"
                minLength={3}
                maxLength={4}
                style={{
                  width: "20%",
                }}
              />
              <MyInput
                onChangeText={setNumber}
                value={number}
                placeholder="Phone Number"
                keyboardType="numeric"
                inputType="number"
                minLength={10}
                maxLength={12}
                style={{
                  width: "80%",
                }}
              />
            </View>
            <View
              style={{
                position: "absolute",
                bottom: 0,
                padding: 10,
                left: 0,
                right: 0,
              }}
            >
              <MyButton
                type="light-secondary"
                text="Continue"
                onPress={continueButtonHandler}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Layout>
  );
};

export default NumberScreen;

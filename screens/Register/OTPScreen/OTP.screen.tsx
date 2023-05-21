import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { FC, useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import Heading2 from "../../../components/texts/Heading2";
import Body2 from "../../../components/texts/Body2";
import OTPInput from "./components/OTPInput";
import MyButton from "../../../components/buttons/MyButton";
import Metadata1 from "../../../components/texts/Metadata1";

type OTPScreenProps = {
  route: any;
  navigation: any;
};

const OTPScreen: FC<OTPScreenProps> = ({ route, navigation }) => {
  const [step, setStep] = useState<number>(0);
  const [isOTPCorrect, setIsOTPCorrect] = useState<boolean>(false);
  const [otpCode, setOTPCode] = useState<string>("");
  const { number, countryCode } = route.params;

  const resendButtonHandler = () => {
    console.log("Resend Code");
  };

  const continueButtonHandler = () => {
    if (otpCode.length != 6 || isOTPCorrect == false) {
      Alert.alert("Error", "Code not correct. Please try again.", [
        { text: "OK" },
      ]);
      return;
    }
    navigation.navigate("ProfileScreen");
  };

  const [resendButtonActive, setResendButtonActive] = useState(false);
  // timer for 60 seconds
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(2);
  const [timerActive, setTimerActive] = useState(true);

  useEffect(() => {
    if (second === 0 && minute === 0) {
      setTimerActive(false);
      setResendButtonActive(true);
    }
    let interval: any = null;
    if (timerActive) {
      interval = setInterval(() => {
        if (second == 0) {
          setSecond(59);
          setMinute(minute - 1);
        } else {
          setSecond(second - 1);
        }
      }, 1000);
    } else if (!timerActive && second !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerActive, second, minute]);

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
                text="Enter Code"
              />
              <Body2
                style={{
                  textAlign: "center",
                  paddingHorizontal: 40,
                }}
                text={
                  "We have sent you an SMS with the code to " +
                  countryCode +
                  " " +
                  number
                }
              />
              <Metadata1
                style={{
                  textAlign: "center",
                }}
                text={(minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second)}
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
              <Pressable onPress={Keyboard.dismiss}>
                <OTPInput
                  code={otpCode}
                  setCode={setOTPCode}
                  codeLength={6}
                  setIsOTPCorrect={setIsOTPCorrect}
                />
              </Pressable>
            </View>
            <View
              style={{
                position: "absolute",
                bottom: 0,
                padding: 10,
                left: 0,
                right: 0,
                gap: 10,
              }}
            >
              <MyButton
                style={{
                  opacity: resendButtonActive ? 1 : 0.5,
                }}
                type="light-primary"
                text="Resend Code"
                disabled={!resendButtonActive}
                onPress={resendButtonHandler}
              />
              <MyButton
                style={{
                  opacity: isOTPCorrect ? 1 : 0.5,
                }}
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

export default OTPScreen;

const styles = StyleSheet.create({});

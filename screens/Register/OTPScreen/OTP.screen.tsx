import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { FC, useEffect, useState } from "react";
import { styles } from "./OTP.styles";
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
  // const { number, countryCode } = route.params;
  const number = "1234567890";
  const countryCode = "+84";

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
    navigation.navigate("TabScreen");
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
          <View style={styles.container}>
            <View style={styles.contentContainer}>
              <View style={styles.descriptionContainer}>
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
                  text={
                    (minute < 10 ? "0" + minute : minute) +
                    ":" +
                    (second < 10 ? "0" + second : second)
                  }
                />
              </View>
              {
                // FIXME: OTP making the design problem on Android (iOS OK)
              }
              <View style={styles.inputContainer}>
                <Pressable onPress={Keyboard.dismiss}>
                  <OTPInput
                    code={otpCode}
                    setCode={setOTPCode}
                    codeLength={6}
                    setIsOTPCorrect={setIsOTPCorrect}
                  />
                </Pressable>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <MyButton
                style={{
                  opacity: resendButtonActive ? 1 : 0.5,
                }}
                type="primary"
                text="Resend Code"
                disabled={!resendButtonActive}
                onPress={resendButtonHandler}
              />
              <MyButton
                style={{
                  opacity: isOTPCorrect ? 1 : 0.5,
                }}
                type="secondary"
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

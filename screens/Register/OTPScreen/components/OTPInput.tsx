import {
  Animated,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { FC, useEffect, useRef } from "react";

type OTPInputProps = {
  code: string;
  setCode: (code: string) => void;
  codeLength: number;
  setIsOTPCorrect: (isOTPCorrect: boolean) => void;
};

const OTPInput: FC<OTPInputProps> = ({
  code,
  setCode,
  codeLength,
  setIsOTPCorrect,
}) => {
  const boxArray = new Array(codeLength).fill(0);
  const inputRef = useRef<any>();
  useEffect(() => {
    code.length === 0 && inputRef?.current?.focus();
    setIsOTPCorrect(code.length === codeLength);
    return () => {
      setIsOTPCorrect(false);
    };
  }, [code]);

  const boxDigit = (_: any, index: any) => {
    const emptyInput = "";
    const digit = code[index] || emptyInput;
    const isCurrentValue = index === code.length;
    const isLastValue = index === codeLength - 1;
    const isCodeComplete = code.length === codeLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    if (typeof code[index] == "string") {
      return (
        <View
          style={{
            backgroundColor: "#F7F7FC",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 100,
            width: 40,
            height: 40,
          }}
          key={index}
        >
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              color: "#0F1828",
            }}
          >
            {digit}
          </Text>
        </View>
      );
    }

    if (isCurrentValue && isValueFocused) {
      return (
        <View
          style={{
            borderColor: "green",
            backgroundColor: "#F7F7FC",
            borderWidth: 2,
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
          }}
          key={index}
        >
          <FadeInView
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              width: 40,
              height: 40,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                textAlign: "center",
                color: "#0F1828",
              }}
            >
              {digit || "|"}
            </Text>
          </FadeInView>
        </View>
      );
    }

    return (
      <View
        style={{
          backgroundColor: "#F7F7FC",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 100,
          width: 40,
          height: 40,
        }}
        key={index}
      ></View>
    );
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        {boxArray.map(boxDigit)}
      </Pressable>
      <TextInput
        value={code}
        onChangeText={setCode}
        maxLength={codeLength}
        ref={inputRef}
        onBlur={Keyboard.dismiss}
        keyboardType="numeric"
        style={{
          position: "absolute",
          opacity: 0,
          width: 300,
          borderColor: "#e5e5e5",
          borderWidth: 1,
          borderRadius: 5,
          padding: 15,
        }}
      />
    </View>
  );
};

type FadeInViewProps = {
  style: object;
  children: any;
};

const FadeInView: FC<FadeInViewProps> = ({ ...props }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default OTPInput;

const styles = StyleSheet.create({});

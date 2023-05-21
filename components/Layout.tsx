import { View } from "react-native";
import React, { FC, useContext } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MainContext } from "../contexts";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const insets = useSafeAreaInsets();

  const { state } = useContext(MainContext);
  const { theme } = state;

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        backgroundColor: theme === "dark" ? "#0F1828" : "#FFFFFF",
      }}
    >
      {children}
    </View>
  );
};

export default Layout;

import { View } from "react-native";
import React, { FC } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
      }}
    >
      {children}
    </View>
  );
};

export default Layout;

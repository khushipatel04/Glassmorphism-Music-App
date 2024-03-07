import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DarkModeFalse = ({
  darkModeFalseWidth,
  homeIndicatorBackgroundColor,
}) => {
  const darkModeFalseStyle = useMemo(() => {
    return {
      ...getStyleValue("width", darkModeFalseWidth),
    };
  }, [darkModeFalseWidth]);

  const homeIndicatorStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", homeIndicatorBackgroundColor),
    };
  }, [homeIndicatorBackgroundColor]);

  return (
    <View style={[styles.darkModefalse, darkModeFalseStyle]}>
      <View style={[styles.homeIndicator, homeIndicatorStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicator: {
    position: "absolute",
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
  },
  darkModefalse: {
    width: 375,
    height: 34,
  },
});

export default DarkModeFalse;

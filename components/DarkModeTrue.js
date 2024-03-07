import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DarkModeTrue = ({
  darkModeTruePosition,
  darkModeTrueRight,
  darkModeTrueBottom,
  darkModeTrueLeft,
  shapeMarginLeft,
}) => {
  const darkModeTrueStyle = useMemo(() => {
    return {
      ...getStyleValue("position", darkModeTruePosition),
      ...getStyleValue("right", darkModeTrueRight),
      ...getStyleValue("bottom", darkModeTrueBottom),
      ...getStyleValue("left", darkModeTrueLeft),
    };
  }, [
    darkModeTruePosition,
    darkModeTrueRight,
    darkModeTrueBottom,
    darkModeTrueLeft,
  ]);

  const shapeStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", shapeMarginLeft),
    };
  }, [shapeMarginLeft]);

  return (
    <View style={[styles.darkModetrue, darkModeTrueStyle]}>
      <View style={styles.homeIndicatortrue}>
        <View style={[styles.shape, shapeStyle]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shape: {
    marginLeft: -67.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.labelColorDarkPrimary,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeIndicatortrue: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  darkModetrue: {
    height: 34,
  },
});

export default DarkModeTrue;

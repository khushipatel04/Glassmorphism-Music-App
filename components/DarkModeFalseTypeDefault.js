import React, { useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DarkModeFalseTypeDefault = ({
  showSFSymbolMicrophone,
  darkModeFalseTypeDefaultPosition,
  darkModeFalseTypeDefaultBackgroundColor,
  darkModeFalseTypeDefaultWidth,
  darkModeFalseTypeDefaultMarginLeft,
  darkModeFalseTypeDefaultTop,
  darkModeFalseTypeDefaultLeft,
}) => {
  const darkModeFalseTypeDefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", darkModeFalseTypeDefaultPosition),
      ...getStyleValue(
        "backgroundColor",
        darkModeFalseTypeDefaultBackgroundColor
      ),
      ...getStyleValue("width", darkModeFalseTypeDefaultWidth),
      ...getStyleValue("marginLeft", darkModeFalseTypeDefaultMarginLeft),
      ...getStyleValue("top", darkModeFalseTypeDefaultTop),
      ...getStyleValue("left", darkModeFalseTypeDefaultLeft),
    };
  }, [
    darkModeFalseTypeDefaultPosition,
    darkModeFalseTypeDefaultBackgroundColor,
    darkModeFalseTypeDefaultWidth,
    darkModeFalseTypeDefaultMarginLeft,
    darkModeFalseTypeDefaultTop,
    darkModeFalseTypeDefaultLeft,
  ]);

  return (
    <View
      style={[styles.darkModefalseTypedefault, darkModeFalseTypeDefaultStyle]}
    >
      <Image
        style={styles.iconMagnifyingglass}
        resizeMode="cover"
        source={require("../assets/icon--magnifyingglass.png")}
      />
      <Text style={styles.placeholder}>Search</Text>
      {showSFSymbolMicrophone && (
        <Image
          style={styles.sfSymbolMicrophone}
          resizeMode="cover"
          source={require("../assets/sf-symbol--microphone.png")}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  iconMagnifyingglass: {
    width: 16,
    height: 16,
  },
  placeholder: {
    flex: 1,
    fontSize: FontSize.defaultBoldBody_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontFamily: FontFamily.defaultBoldBody,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    marginLeft: 6,
  },
  sfSymbolMicrophone: {
    width: 12,
    height: 18,
    marginLeft: 6,
  },
  darkModefalseTypedefault: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.fillColorLightTertiary,
    width: 343,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_6xs,
  },
});

export default DarkModeFalseTypeDefault;

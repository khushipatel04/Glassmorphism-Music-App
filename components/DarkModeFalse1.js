import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DarkModeFalse1 = ({
  dimensionText,
  darkModeFalsePosition,
  darkModeFalseHeight,
  darkModeFalseTop,
  darkModeFalseLeft,
}) => {
  const darkModeFalse1Style = useMemo(() => {
    return {
      ...getStyleValue("position", darkModeFalsePosition),
      ...getStyleValue("height", darkModeFalseHeight),
      ...getStyleValue("top", darkModeFalseTop),
      ...getStyleValue("left", darkModeFalseLeft),
    };
  }, [
    darkModeFalsePosition,
    darkModeFalseHeight,
    darkModeFalseTop,
    darkModeFalseLeft,
  ]);

  return (
    <View style={[styles.darkModefalse, darkModeFalse1Style]}>
      <Image
        style={styles.sliderIcon}
        resizeMode="cover"
        source={dimensionText}
      />
      <View style={styles.time}>
        <Text style={styles.textTypo}>0:23</Text>
        <Text style={[styles.text1, styles.textTypo]}>-3:05</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    color: Color.labelColorDarkSecondary,
    fontFamily: FontFamily.defaultBoldBody,
    lineHeight: 13,
    letterSpacing: 0,
    fontSize: FontSize.size_2xs,
  },
  sliderIcon: {
    alignSelf: "stretch",
    flex: 1,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    width: "100%",
  },
  text1: {
    marginLeft: 271,
  },
  time: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  darkModefalse: {
    width: 330,
    height: 25,
  },
});

export default DarkModeFalse1;

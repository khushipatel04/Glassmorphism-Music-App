import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const AirplayAudio = ({
  airplayAudioPosition,
  airplayAudioTop,
  airplayAudioRight,
  textColor,
}) => {
  const airplayAudioStyle = useMemo(() => {
    return {
      ...getStyleValue("position", airplayAudioPosition),
      ...getStyleValue("top", airplayAudioTop),
      ...getStyleValue("right", airplayAudioRight),
    };
  }, [airplayAudioPosition, airplayAudioTop, airplayAudioRight]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("color", textColor),
    };
  }, [textColor]);

  return (
    <View style={[styles.airplayAudio, airplayAudioStyle]}>
      <View style={styles.airplayAudio1}>
        <Text style={[styles.text, textStyle]}>􀑢</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    top: 0,
    left: 0,
    fontSize: FontSize.defaultRegularTitle3_size,
    letterSpacing: 0,
    lineHeight: 24,
    fontFamily: FontFamily.defaultRegularTitle3,
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
    position: "absolute",
  },
  airplayAudio1: {
    height: "63.16%",
    width: "63.16%",
    top: "18.42%",
    right: "18.42%",
    bottom: "18.42%",
    left: "18.42%",
    overflow: "hidden",
    position: "absolute",
  },
  airplayAudio: {
    width: 38,
    height: 38,
  },
});

export default AirplayAudio;

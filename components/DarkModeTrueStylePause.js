import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DarkModeTrueStylePause = ({
  darkModeTrueStylePausePosition,
  darkModeTrueStylePauseWidth,
  darkModeTrueStylePauseMarginTop,
  darkModeTrueStylePauseMarginLeft,
  darkModeTrueStylePauseTop,
  darkModeTrueStylePauseLeft,
}) => {
  const darkModeTrueStylePauseStyle = useMemo(() => {
    return {
      ...getStyleValue("position", darkModeTrueStylePausePosition),
      ...getStyleValue("width", darkModeTrueStylePauseWidth),
      ...getStyleValue("marginTop", darkModeTrueStylePauseMarginTop),
      ...getStyleValue("marginLeft", darkModeTrueStylePauseMarginLeft),
      ...getStyleValue("top", darkModeTrueStylePauseTop),
      ...getStyleValue("left", darkModeTrueStylePauseLeft),
    };
  }, [
    darkModeTrueStylePausePosition,
    darkModeTrueStylePauseWidth,
    darkModeTrueStylePauseMarginTop,
    darkModeTrueStylePauseMarginLeft,
    darkModeTrueStylePauseTop,
    darkModeTrueStylePauseLeft,
  ]);

  return (
    <View style={[styles.darkModetrueStylepause, darkModeTrueStylePauseStyle]}>
      <View style={styles.audioPlayer}>
        <View style={styles.darkModefalseStylebackwar}>
          <Text style={[styles.symbol, styles.symbolTypo]}>􀊊</Text>
        </View>
      </View>
      <View style={styles.audioPlayer}>
        <View style={styles.darkModefalseStylebackwar}>
          <Text style={[styles.symbol1, styles.symbolTypo]}>􀊆</Text>
        </View>
      </View>
      <View style={styles.audioPlayer}>
        <View style={styles.darkModefalseStylebackwar}>
          <Text style={[styles.symbol2, styles.symbolTypo]}>􀊌</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  symbolTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.labelColorDarkSecondary,
    fontFamily: FontFamily.defaultRegularTitle3,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldTitle1_size,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  symbol: {
    left: "0%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.labelColorDarkSecondary,
    fontFamily: FontFamily.defaultRegularTitle3,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldTitle1_size,
    width: "100%",
    height: "100%",
    top: "0%",
  },
  darkModefalseStylebackwar: {
    top: 0,
    left: 0,
    position: "absolute",
    height: 44,
    width: 44,
  },
  audioPlayer: {
    height: 44,
    width: 44,
  },
  symbol1: {
    left: "1.14%",
    top: "0%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.labelColorDarkSecondary,
    fontFamily: FontFamily.defaultRegularTitle3,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldTitle1_size,
    width: "100%",
    height: "100%",
  },
  symbol2: {
    top: "-1.14%",
    left: "0%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.labelColorDarkSecondary,
    fontFamily: FontFamily.defaultRegularTitle3,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldTitle1_size,
    width: "100%",
    height: "100%",
  },
  darkModetrueStylepause: {
    width: 330,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default DarkModeTrueStylePause;

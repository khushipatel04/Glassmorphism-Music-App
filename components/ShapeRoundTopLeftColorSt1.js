import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, Padding, Color, FontFamily, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ShapeRoundTopLeftColorSt1 = ({
  shapeRoundTopLeftColorStPosition,
  shapeRoundTopLeftColorStBorderStyle,
  shapeRoundTopLeftColorStBorderColor,
  shapeRoundTopLeftColorStBorderWidth,
  shapeRoundTopLeftColorStRight,
  shapeRoundTopLeftColorStBottom,
  shapeRoundTopLeftColorStLeft,
  onTabBarItemPress,
}) => {
  const shapeRoundTopLeftColorStStyle = useMemo(() => {
    return {
      ...getStyleValue("position", shapeRoundTopLeftColorStPosition),
      ...getStyleValue("borderStyle", shapeRoundTopLeftColorStBorderStyle),
      ...getStyleValue("borderColor", shapeRoundTopLeftColorStBorderColor),
      ...getStyleValue("borderWidth", shapeRoundTopLeftColorStBorderWidth),
      ...getStyleValue("right", shapeRoundTopLeftColorStRight),
      ...getStyleValue("bottom", shapeRoundTopLeftColorStBottom),
      ...getStyleValue("left", shapeRoundTopLeftColorStLeft),
    };
  }, [
    shapeRoundTopLeftColorStPosition,
    shapeRoundTopLeftColorStBorderStyle,
    shapeRoundTopLeftColorStBorderColor,
    shapeRoundTopLeftColorStBorderWidth,
    shapeRoundTopLeftColorStRight,
    shapeRoundTopLeftColorStBottom,
    shapeRoundTopLeftColorStLeft,
  ]);

  return (
    <View
      style={[
        styles.shaperoundTopLeftColorSt,
        styles.tabsFlexBox,
        shapeRoundTopLeftColorStStyle,
      ]}
    >
      <View style={[styles.tabs, styles.tabsFlexBox]}>
        <View style={styles.tabbarItemSpaceBlock} onPress={onTabBarItemPress}>
          <Text style={styles.text}>􀎟</Text>
          <Text style={[styles.label, styles.labelTypo]}>Home</Text>
        </View>
        <View style={[styles.tabbarItem1, styles.tabbarItemSpaceBlock]}>
          <Text style={[styles.text1, styles.text1Typo]}>􀊫</Text>
          <Text style={[styles.label1, styles.text1Typo]}>Discover</Text>
        </View>
        <View style={[styles.tabbarItem1, styles.tabbarItemSpaceBlock]}>
          <Text style={styles.text}>􀉭</Text>
          <Text style={[styles.label, styles.labelTypo]}>Profil</Text>
        </View>
        <View style={[styles.tabbarItem1, styles.tabbarItemSpaceBlock]}>
          <Text style={styles.text}>􀋂</Text>
          <Text style={[styles.label, styles.labelTypo]}>Premium</Text>
        </View>
      </View>
      <View style={styles.homeindicator}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  labelTypo: {
    marginTop: 4,
    lineHeight: 13,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
  },
  tabbarItemSpaceBlock: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_lg,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  text1Typo: {
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.defaultBoldBody,
    fontWeight: "600",
    letterSpacing: 0,
  },
  text: {
    textAlign: "left",
    color: Color.labelColorDarkSecondary,
    fontFamily: FontFamily.defaultBoldBody,
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldBody_size,
  },
  label: {
    color: Color.labelColorDarkSecondary,
    fontFamily: FontFamily.defaultBoldBody,
    fontWeight: "600",
    letterSpacing: 0,
    marginTop: 4,
    lineHeight: 13,
    fontSize: FontSize.size_2xs,
  },
  text1: {
    textAlign: "center",
    lineHeight: 22,
    fontSize: FontSize.defaultBoldBody_size,
    color: Color.labelColorDarkPrimary,
  },
  label1: {
    marginTop: 4,
    lineHeight: 13,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
  },
  tabbarItem1: {
    marginLeft: 40,
  },
  tabs: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
  },
  homeIndicator: {
    position: "absolute",
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorDarkPrimary,
    width: 134,
    height: 5,
  },
  homeindicator: {
    width: 389,
    height: 34,
  },
  shaperoundTopLeftColorSt: {
    borderTopLeftRadius: Border.br_21xl,
    backgroundColor: Color.labelColorLightPrimary,
    shadowColor: "rgba(42, 28, 88, 0.44)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 17,
    elevation: 17,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.42)",
    borderWidth: 2,
    paddingHorizontal: Padding.p_8xs,
    paddingTop: Padding.p_3xs,
  },
});

export default ShapeRoundTopLeftColorSt1;

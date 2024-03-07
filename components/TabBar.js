import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DarkModeFalse from "./DarkModeFalse";
import { Border, FontSize, Padding, Color, FontFamily } from "../GlobalStyles";

const TabBar = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.tabBar, styles.tabBarPosition]}>
      <Image
        style={styles.tabBarChild}
        resizeMode="cover"
        source={require("../assets/ellipse-2162.png")}
      />
      <View style={[styles.tabbar, styles.tabsFlexBox]}>
        <View style={[styles.tabs, styles.tabsFlexBox]}>
          <View style={styles.tabbarItemSpaceBlock}>
            <Text style={styles.text}>􀎟</Text>
            <Text style={[styles.label, styles.labelSpaceBlock]}>Home</Text>
          </View>
          <Pressable
            style={[styles.tabbarItem1, styles.tabbarItemSpaceBlock]}
            onPress={() => navigation.navigate("ExploreScreen")}
          >
            <Text style={[styles.text1, styles.text1Typo]}>􀊫</Text>
            <Text style={[styles.search, styles.text1Typo]}>Discover</Text>
          </Pressable>
          <View style={[styles.tabbarItem1, styles.tabbarItemSpaceBlock]}>
            <Text style={[styles.text1, styles.text1Typo]}>􀉭</Text>
            <Text style={[styles.search, styles.text1Typo]}>Profil</Text>
          </View>
          <View style={[styles.tabbarItem1, styles.tabbarItemSpaceBlock]}>
            <Text style={[styles.text1, styles.text1Typo]}>􀋂</Text>
            <Text style={[styles.search, styles.text1Typo]}>Premium</Text>
          </View>
        </View>
        <DarkModeFalse
          darkModeFalseWidth={389}
          homeIndicatorBackgroundColor="#000"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarPosition: {
    height: 87,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -9,
    },
    borderTopLeftRadius: Border.br_21xl,
    left: 0,
    position: "absolute",
  },
  tabsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  labelSpaceBlock: {
    marginTop: 4,
    lineHeight: 13,
    fontSize: FontSize.size_2xs,
  },
  tabbarItemSpaceBlock: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_lg,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  text1Typo: {
    color: Color.labelColorDarkSecondary,
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldBody,
    fontWeight: "600",
    letterSpacing: 0,
  },
  tabBarChild: {
    top: 17,
    left: 23,
    width: 44,
    height: 44,
    position: "absolute",
  },
  text: {
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.defaultBoldBody,
    fontWeight: "600",
    letterSpacing: 0,
    lineHeight: 22,
    fontSize: FontSize.defaultBoldBody_size,
  },
  label: {
    textAlign: "left",
    marginTop: 4,
    lineHeight: 13,
    fontSize: FontSize.size_2xs,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.defaultBoldBody,
    fontWeight: "600",
    letterSpacing: 0,
  },
  text1: {
    color: Color.labelColorDarkSecondary,
    lineHeight: 22,
    fontSize: FontSize.defaultBoldBody_size,
  },
  search: {
    marginTop: 4,
    lineHeight: 13,
    fontSize: FontSize.size_2xs,
    color: Color.labelColorDarkSecondary,
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
  tabbar: {
    top: 0,
    backgroundColor: Color.colorGray_100,
    shadowColor: "rgba(41, 39, 130, 0.15)",
    shadowRadius: 20,
    elevation: 20,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 1,
    width: 390,
    paddingHorizontal: Padding.p_8xs,
    paddingTop: Padding.p_3xs,
    height: 87,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -9,
    },
    borderTopLeftRadius: Border.br_21xl,
    left: 0,
    position: "absolute",
  },
  tabBar: {
    right: 0,
    bottom: 0,
    shadowColor: "rgba(0, 0, 0, 0.09)",
    shadowRadius: 17,
    elevation: 17,
  },
});

export default TabBar;

import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import DarkModeTrueStylePause from "../components/DarkModeTrueStylePause";
import DarkModeFalse1 from "../components/DarkModeFalse1";
import AirplayAudio from "../components/AirplayAudio";
import DarkModeTrue from "../components/DarkModeTrue";
import { useNavigation } from "@react-navigation/native";
import StatusBar1 from "../components/StatusBar1";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const MusicScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={[styles.musicScreen, styles.musicShadowBox]}
      locations={[0, 1]}
      colors={["rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.04)"]}
      useAngle={true}
      angle={86.16}
    >
      <Image
        style={styles.musicScreenChild}
        resizeMode="cover"
        source={require("../assets/ellipse-2163.png")}
      />
      <View style={[styles.image3, styles.image3Position]} />
      <View style={styles.image6} />
      <Image
        style={[styles.image7Icon, styles.text1Position]}
        resizeMode="cover"
        source={require("../assets/image-7.png")}
      />
      <LinearGradient
        style={[styles.musicScreenItem, styles.image3Position]}
        locations={[0.25, 1]}
        colors={["rgba(255, 255, 255, 0.16)", "rgba(228, 233, 253, 0.5)"]}
        useAngle={true}
        angle={163.33}
      />
      <DarkModeTrueStylePause
        darkModeTrueStylePausePosition="absolute"
        darkModeTrueStylePauseWidth={282}
        darkModeTrueStylePauseMarginTop={301}
        darkModeTrueStylePauseMarginLeft={-141}
        darkModeTrueStylePauseTop="50%"
        darkModeTrueStylePauseLeft="50%"
      />
      <DarkModeFalse1
        dimensionText={require("../assets/slider.png")}
        darkModeFalsePosition="absolute"
        darkModeFalseHeight={39}
        darkModeFalseTop={630}
        darkModeFalseLeft={33}
      />
      <AirplayAudio
        airplayAudioPosition="absolute"
        airplayAudioTop={555}
        airplayAudioRight={24}
        textColor="rgba(235, 235, 245, 0.3)"
      />
      <Text style={styles.cheleyaFromJawan}>Cheleya (from “Jawan”)</Text>
      <DarkModeTrue
        darkModeTruePosition="absolute"
        darkModeTrueRight={-3}
        darkModeTrueBottom={0}
        darkModeTrueLeft={3}
        shapeMarginLeft={-68}
      />
      <View style={styles.searchfield}>
        <View style={styles.leftArrowLayout}>
          <Pressable
            style={styles.text1Position}
            onPress={() => navigation.navigate("ExploreScreen")}
          >
            <Text style={[styles.text, styles.textTypo]}>􀄪</Text>
          </Pressable>
        </View>
        <Text style={styles.placeholder}>rch</Text>
        <View style={[styles.heartIcon, styles.leftArrowLayout]}>
          <Text style={[styles.text1, styles.textTypo]}>􀊵</Text>
        </View>
      </View>
      <StatusBar1 propRight={12} propLeft={-11} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  musicShadowBox: {
    backgroundColor: "transparent",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1.1966018676757812,
    },
  },
  image3Position: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  text1Position: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.defaultBoldBody,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.defaultBoldBody_size,
    textAlign: "left",
    letterSpacing: 0,
  },
  leftArrowLayout: {
    height: 22,
    width: 21,
  },
  musicScreenChild: {
    top: 716,
    left: 167,
    width: 59,
    height: 57,
    position: "absolute",
  },
  image3: {
    top: 0,
    width: 390,
    height: 844,
    borderRadius: Border.br_21xl,
  },
  image6: {
    top: -346,
    left: -35,
    borderRadius: 42,
    width: 398,
    height: 853,
    position: "absolute",
  },
  image7Icon: {
    borderRadius: 9,
    width: 464,
    height: 478,
  },
  musicScreenItem: {
    top: 439,
    borderRadius: Border.br_11xl,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 40,
    elevation: 40,
    borderStyle: "solid",
    borderColor: "rgba(217, 217, 217, 0.5)",
    borderWidth: 1,
    height: 405,
    backgroundColor: "transparent",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1.1966018676757812,
    },
    width: 390,
  },
  cheleyaFromJawan: {
    top: 565,
    left: 33,
    fontSize: FontSize.defaultRegularTitle3_size,
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.labelColorDarkPrimary,
    position: "absolute",
  },
  text: {
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.defaultBoldBody,
    fontWeight: "600",
  },
  placeholder: {
    fontFamily: FontFamily.defaultRegularTitle3,
    color: "transparent",
    marginLeft: 6,
    lineHeight: 22,
    fontSize: FontSize.defaultBoldBody_size,
    textAlign: "left",
    letterSpacing: 0,
    flex: 1,
  },
  text1: {
    color: "#df1010",
    left: 0,
    top: 0,
    position: "absolute",
  },
  heartIcon: {
    backgroundColor: "rgba(213, 217, 188, 0)",
    marginLeft: 6,
  },
  searchfield: {
    top: 31,
    right: 27,
    left: 21,
    borderRadius: Border.br_3xs,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  musicScreen: {
    shadowColor: "rgba(69, 42, 124, 0.1)",
    shadowRadius: 29.92,
    elevation: 29.92,
    width: "100%",
    overflow: "hidden",
    height: 844,
    flex: 1,
    borderRadius: Border.br_21xl,
    backgroundColor: "transparent",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1.1966018676757812,
    },
  },
});

export default MusicScreen;

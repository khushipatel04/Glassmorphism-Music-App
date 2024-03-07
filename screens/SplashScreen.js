import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ShapeSquareCategorieMeditaImage from "../components/ShapeSquareCategorieMeditaImage";
import DarkModeTrue from "../components/DarkModeTrue";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.splashScreen}
      locations={[0, 1]}
      colors={["rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.04)"]}
      useAngle={true}
      angle={86.16}
    >
      <View style={[styles.content2, styles.content2Position]}>
        <Image
          style={[styles.backgroundIcon, styles.row1Position]}
          resizeMode="cover"
          source={require("../assets/background.png")}
        />
        <View style={[styles.content, styles.row2Position]}>
          <View style={[styles.categorie1, styles.categoriePosition]}>
            <View style={[styles.content1, styles.leftFlexBox]}>
              <View style={[styles.left, styles.leftFlexBox]}>
                <Text style={[styles.text, styles.textTypo]}>􀁏</Text>
                <View style={styles.texts}>
                  <Text style={[styles.meditations, styles.musicTypo]}>
                    Meditations
                  </Text>
                  <Text style={[styles.helpToStress, styles.text3Typo]}>
                    Help to stress less
                  </Text>
                </View>
              </View>
              <View style={[styles.right, styles.leftFlexBox]}>
                <Text style={[styles.seeAll, styles.text3Typo]}>See all</Text>
                <Text style={[styles.text1, styles.textTypo]}>􀅴</Text>
                <Text style={[styles.text1, styles.textTypo]}>􀆅</Text>
                <Text style={[styles.text3, styles.text3Typo]}>􀯻</Text>
                <Text style={[styles.text4, styles.textTypo]}>􀌇</Text>
                <Image
                  style={styles.switchIcon}
                  resizeMode="cover"
                  source={require("../assets/switch.png")}
                />
              </View>
            </View>
            <View style={styles.images}>
              <ShapeSquareCategorieMeditaImage
                imageDimensions={require("../assets/components-variant5.png")}
                shapeSquareCategorieMeditBorderRadius={22}
                shapeSquareCategorieMeditWidth={155}
                shapeSquareCategorieMeditHeight={210}
                shapeSquareCategorieMeditMarginLeft="unset"
              />
              <ShapeSquareCategorieMeditaImage
                imageDimensions={require("../assets/components-variant6.png")}
                shapeSquareCategorieMeditWidth={155}
                shapeSquareCategorieMeditHeight={210}
                shapeSquareCategorieMeditMarginLeft={20}
              />
            </View>
          </View>
          <View style={[styles.categorie2, styles.categoriePosition]}>
            <View style={[styles.content1, styles.leftFlexBox]}>
              <View style={[styles.left, styles.leftFlexBox]}>
                <Text style={[styles.text, styles.textTypo]}>􀁏</Text>
                <View style={styles.texts}>
                  <Text style={[styles.music, styles.musicTypo]}>Music</Text>
                  <Text style={[styles.helpToStress, styles.text3Typo]}>
                    Help for sleep
                  </Text>
                </View>
              </View>
              <View style={[styles.right, styles.leftFlexBox]}>
                <Text style={[styles.seeAll, styles.text3Typo]}>See all</Text>
                <Text style={[styles.text1, styles.textTypo]}>􀅴</Text>
                <Text style={[styles.text1, styles.textTypo]}>􀆅</Text>
                <Text style={[styles.text3, styles.text3Typo]}>􀯻</Text>
                <Text style={[styles.text4, styles.textTypo]}>􀌇</Text>
                <Image
                  style={styles.switchIcon}
                  resizeMode="cover"
                  source={require("../assets/switch.png")}
                />
              </View>
            </View>
            <View style={styles.images}>
              <Image
                style={styles.componentsIconLayout}
                resizeMode="cover"
                source={require("../assets/components-variant7.png")}
              />
              <Image
                style={[
                  styles.componentsVariantIcon1,
                  styles.componentsIconLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/components-variant3.png")}
              />
            </View>
          </View>
          <Text
            style={[styles.chooseYourGoal, styles.musicTypo]}
          >{`Choose your goal `}</Text>
          <View style={[styles.row1, styles.row1Position]}>
            <View style={styles.smallLayout}>
              <View style={[styles.button, styles.iconLayout]} />
              <Text style={styles.label}>Calm</Text>
            </View>
            <View style={[styles.smallButton1, styles.smallLayout]}>
              <View style={[styles.button, styles.iconLayout]} />
              <Text style={styles.label}>Mindful</Text>
            </View>
          </View>
          <View style={[styles.row2, styles.row2Position]}>
            <View style={styles.smallLayout}>
              <View style={[styles.button, styles.iconLayout]} />
              <Text style={styles.label}>Anxious</Text>
            </View>
            <View style={[styles.smallButton1, styles.smallLayout]}>
              <View style={[styles.button, styles.iconLayout]} />
              <Text style={styles.label}>Health</Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.maskGroupIcon, styles.content2Position]}
        resizeMode="cover"
        source={require("../assets/mask-group.png")}
      />
      <Image
        style={styles.splashScreenChild}
        resizeMode="cover"
        source={require("../assets/group-1282.png")}
      />
      <Text style={[styles.makes, styles.makesTypo]}>Makes</Text>
      <Text style={[styles.everything, styles.makesTypo]}>Everything</Text>
      <Text style={[styles.better, styles.makesTypo]}>Better</Text>
      <DarkModeTrue
        darkModeTruePosition="absolute"
        darkModeTrueRight={0}
        darkModeTrueBottom={0}
        darkModeTrueLeft={0}
        shapeMarginLeft={-68}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/group-1291.png")}
        />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  content2Position: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  row1Position: {
    right: 0,
    position: "absolute",
  },
  row2Position: {
    left: "50%",
    position: "absolute",
  },
  categoriePosition: {
    left: 0,
    position: "absolute",
  },
  leftFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldBody,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldBody_size,
    display: "none",
  },
  musicTypo: {
    textShadowRadius: 20,
    textShadowOffset: {
      width: 5,
      height: 5,
    },
    textShadowColor: "rgba(41, 39, 130, 0.15)",
    color: Color.labelColorDarkPrimary,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldBody,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldBody_size,
  },
  text3Typo: {
    color: Color.labelColorDarkSecondary,
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldBody,
  },
  componentsIconLayout: {
    height: 210,
    width: 155,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  smallLayout: {
    height: 50,
    width: 148,
    borderRadius: Border.br_base,
  },
  makesTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
    position: "absolute",
  },
  backgroundIcon: {
    marginTop: -410.5,
    top: "50%",
    left: -1,
    maxWidth: "100%",
    height: 718,
    overflow: "hidden",
  },
  text: {
    color: Color.systemLightRed,
    width: 20,
  },
  meditations: {
    alignSelf: "stretch",
  },
  helpToStress: {
    fontSize: FontSize.defaultRegularCaption1_size,
    lineHeight: 16,
    alignSelf: "stretch",
  },
  texts: {
    marginLeft: 8,
    justifyContent: "center",
    flex: 1,
  },
  left: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_2xs,
    flex: 1,
  },
  seeAll: {
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldBody_size,
    color: Color.labelColorDarkSecondary,
  },
  text1: {
    color: Color.systemLightBlue,
    marginLeft: 8,
  },
  text3: {
    marginLeft: 8,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldBody_size,
    color: Color.labelColorDarkSecondary,
  },
  text4: {
    color: Color.labelLightTertiary,
    marginLeft: 8,
  },
  switchIcon: {
    width: 51,
    height: 31,
    marginLeft: 8,
    display: "none",
  },
  right: {
    alignSelf: "stretch",
    marginLeft: 8,
    justifyContent: "center",
  },
  content1: {
    justifyContent: "center",
    width: 330,
  },
  images: {
    marginTop: 3,
    flexDirection: "row",
  },
  categorie1: {
    top: 180,
  },
  music: {
    alignSelf: "stretch",
  },
  componentsVariantIcon1: {
    marginLeft: 20,
  },
  categorie2: {
    top: 460,
  },
  chooseYourGoal: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  button: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderStyle: "solid",
    borderColor: Color.colorHotpink,
    borderWidth: 2,
    borderRadius: Border.br_base,
    height: "100%",
    position: "absolute",
  },
  label: {
    top: "28%",
    left: "35.81%",
    color: Color.labelColorDarkPrimary,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldBody,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldBody_size,
    position: "absolute",
  },
  smallButton1: {
    marginLeft: 34,
  },
  row1: {
    top: 42,
    flexDirection: "row",
  },
  row2: {
    marginLeft: -165,
    top: 112,
    flexDirection: "row",
  },
  content: {
    marginLeft: -165.1,
    top: 32,
    bottom: 0,
    width: 330,
  },
  content2: {
    top: 156,
    height: 765,
    display: "none",
  },
  maskGroupIcon: {
    top: -120,
    height: 1040,
  },
  splashScreenChild: {
    top: 445,
    left: 50,
    width: 272,
    height: 105,
    position: "absolute",
  },
  makes: {
    top: 561,
    left: 135,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
  },
  everything: {
    top: 600,
    left: 104,
  },
  better: {
    top: 640,
    left: 135,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
  },
  wrapper: {
    left: 153,
    top: 720,
    width: 61,
    height: 90,
    position: "absolute",
  },
  splashScreen: {
    borderRadius: Border.br_21xl,
    shadowColor: "rgba(69, 42, 124, 0.1)",
    shadowOffset: {
      width: 0,
      height: 1.1966018676757812,
    },
    shadowRadius: 29.92,
    elevation: 29.92,
    shadowOpacity: 1,
    height: 844,
    opacity: 0.5,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default SplashScreen;

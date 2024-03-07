import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ShapeSquareCategorieMeditaImage from "../components/ShapeSquareCategorieMeditaImage";
import { useNavigation } from "@react-navigation/native";
import StatusBar1 from "../components/StatusBar1";
import TabBar from "../components/TabBar";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={[styles.homeScreen, styles.content11ShadowBox]}
      locations={[0, 1]}
      colors={["rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.04)"]}
      useAngle={true}
      angle={86.16}
    >
      <View style={styles.content2}>
        <Image
          style={[styles.backgroundIcon, styles.content11Position]}
          resizeMode="cover"
          source={require("../assets/background.png")}
        />
        <View style={[styles.content, styles.contentPosition]}>
          <View style={styles.categorie1}>
            <View style={[styles.content1, styles.leftFlexBox]}>
              <View style={[styles.left, styles.leftFlexBox]}>
                <Text style={styles.textTypo}>􀁏</Text>
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
                <Text style={[styles.text1, styles.textTypo1]}>􀅴</Text>
                <Text style={[styles.text1, styles.textTypo1]}>􀆅</Text>
                <Text style={[styles.text3, styles.text3Typo]}>􀯻</Text>
                <Text style={[styles.text4, styles.textTypo1]}>􀌇</Text>
                <Image
                  style={styles.switchIcon}
                  resizeMode="cover"
                  source={require("../assets/switch.png")}
                />
              </View>
            </View>
            <View style={styles.imagesSpaceBlock}>
              <ShapeSquareCategorieMeditaImage
                imageDimensions={require("../assets/components-variant.png")}
                shapeSquareCategorieMeditBorderRadius={22}
                shapeSquareCategorieMeditWidth={155}
                shapeSquareCategorieMeditHeight={210}
                shapeSquareCategorieMeditMarginLeft="unset"
              />
              <ShapeSquareCategorieMeditaImage
                imageDimensions={require("../assets/components-variant1.png")}
                shapeSquareCategorieMeditWidth={155}
                shapeSquareCategorieMeditHeight={210}
                shapeSquareCategorieMeditMarginLeft={20}
              />
            </View>
          </View>
          <View style={styles.categorie2}>
            <View style={[styles.content1, styles.leftFlexBox]}>
              <View style={[styles.left, styles.leftFlexBox]}>
                <Text style={styles.textTypo}>􀁏</Text>
                <View style={styles.texts}>
                  <Text style={[styles.music, styles.musicTypo]}>Music</Text>
                  <Text style={[styles.helpToStress, styles.text3Typo]}>
                    Help for sleep
                  </Text>
                </View>
              </View>
              <View style={[styles.right, styles.leftFlexBox]}>
                <Text style={[styles.seeAll, styles.text3Typo]}>See all</Text>
                <Text style={[styles.text1, styles.textTypo1]}>􀅴</Text>
                <Text style={[styles.text1, styles.textTypo1]}>􀆅</Text>
                <Text style={[styles.text3, styles.text3Typo]}>􀯻</Text>
                <Text style={[styles.text4, styles.textTypo1]}>􀌇</Text>
                <Image
                  style={styles.switchIcon}
                  resizeMode="cover"
                  source={require("../assets/switch.png")}
                />
              </View>
            </View>
            <View style={styles.imagesSpaceBlock}>
              <Image
                style={[
                  styles.componentsVariantIcon,
                  styles.componentsIconLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/components-variant2.png")}
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
            style={[styles.chooseYourGoal, styles.images3Position]}
          >{`Choose your goal `}</Text>
          <View style={styles.row1}>
            <View style={styles.smallLayout}>
              <View style={styles.button} />
              <Text style={[styles.label, styles.labelClr]}>Calm</Text>
            </View>
            <View style={[styles.smallButton1, styles.smallLayout]}>
              <View style={styles.button} />
              <Text style={[styles.label, styles.labelClr]}>Mindful</Text>
            </View>
          </View>
          <View style={[styles.row2, styles.row2Position]}>
            <View style={styles.smallLayout}>
              <View style={styles.button} />
              <Text style={[styles.label, styles.labelClr]}>Anxious</Text>
            </View>
            <View style={[styles.smallButton1, styles.smallLayout]}>
              <View style={styles.button} />
              <Text style={[styles.label, styles.labelClr]}>Health</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.content11, styles.content11Position]}>
        <Image
          style={[styles.content1Child, styles.images3Position]}
          resizeMode="cover"
          source={require("../assets/rectangle-2634.png")}
        />
        <View style={[styles.content4, styles.row2Position]}>
          <Pressable
            style={styles.categorie11}
            onPress={() => navigation.navigate("MusicScreen")}
          >
            <View style={[styles.content1, styles.leftFlexBox]}>
              <View style={[styles.left, styles.leftFlexBox]}>
                <Text style={[styles.todaysBiggestHits, styles.text20Typo]}>
                  Today’s biggest hits
                </Text>
                <Text style={[styles.text10, styles.textTypo]}>􀁏</Text>
              </View>
              <View style={[styles.right, styles.leftFlexBox]}>
                <Text style={[styles.seeAll, styles.text3Typo]}>See all</Text>
                <Text style={[styles.text1, styles.textTypo1]}>􀅴</Text>
                <Text style={[styles.text1, styles.textTypo1]}>􀆅</Text>
                <Text style={[styles.text3, styles.text3Typo]}>􀯻</Text>
                <Text style={[styles.text4, styles.textTypo1]}>􀌇</Text>
                <Image
                  style={styles.switchIcon}
                  resizeMode="cover"
                  source={require("../assets/switch.png")}
                />
              </View>
            </View>
            <View style={[styles.images2, styles.imagesSpaceBlock]}>
              <Image
                style={styles.image18Icon}
                resizeMode="cover"
                source={require("../assets/image-18.png")}
              />
              <ShapeSquareCategorieMeditaImage
                imageDimensions={require("../assets/components-variant4.png")}
                shapeSquareCategorieMeditBorderRadius={22}
                shapeSquareCategorieMeditWidth={155}
                shapeSquareCategorieMeditHeight={210}
                shapeSquareCategorieMeditMarginLeft={20}
              />
              <ShapeSquareCategorieMeditaImage
                imageDimensions={require("../assets/components-variant4.png")}
                shapeSquareCategorieMeditWidth={155}
                shapeSquareCategorieMeditHeight={210}
                shapeSquareCategorieMeditMarginLeft={20}
              />
            </View>
          </Pressable>
          <View style={styles.categorie21}>
            <View style={[styles.content1, styles.leftFlexBox]}>
              <View style={[styles.left, styles.leftFlexBox]}>
                <Text style={styles.textTypo}>􀁏</Text>
                <View style={styles.texts}>
                  <Text style={[styles.indiasBest, styles.text20Typo]}>
                    India’s Best
                  </Text>
                </View>
              </View>
              <View style={[styles.right, styles.leftFlexBox]}>
                <Text style={[styles.seeAll, styles.text3Typo]}>See all</Text>
                <Text style={[styles.text1, styles.textTypo1]}>􀅴</Text>
                <Text style={[styles.text1, styles.textTypo1]}>􀆅</Text>
                <Text style={[styles.text3, styles.text3Typo]}>􀯻</Text>
                <Text style={[styles.text4, styles.textTypo1]}>􀌇</Text>
                <Image
                  style={styles.switchIcon}
                  resizeMode="cover"
                  source={require("../assets/switch1.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.row3, styles.row3Position]}>
            <View style={styles.smallButton4}>
              <View style={styles.button} />
              <Text style={[styles.label4, styles.labelClr]}>Anxious</Text>
            </View>
          </View>
          <Image
            style={[styles.image9Icon, styles.contentPosition1]}
            resizeMode="cover"
            source={require("../assets/image-9.png")}
          />
          <Image
            style={styles.image10Icon}
            resizeMode="cover"
            source={require("../assets/image-10.png")}
          />
          <Image
            style={styles.image11Icon}
            resizeMode="cover"
            source={require("../assets/image-11.png")}
          />
          <Image
            style={styles.image12Icon}
            resizeMode="cover"
            source={require("../assets/image-12.png")}
          />
          <Image
            style={[styles.image13Icon, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/image-13.png")}
          />
          <Image
            style={[styles.image14Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/image-14.png")}
          />
          <Image
            style={[styles.image15Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/image-15.png")}
          />
          <Image
            style={[styles.image16Icon, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/image-16.png")}
          />
          <View style={[styles.smallButton5, styles.row3Position]}>
            <View style={styles.button} />
            <Text style={[styles.label5, styles.labelClr]}>Anxious</Text>
          </View>
          <Text style={[styles.chaleyaFromJawan, styles.fromTypo]}>
            Chaleya (from “Jawan”)
          </Text>
          <Image
            style={styles.image17Icon}
            resizeMode="cover"
            source={require("../assets/image-17.png")}
          />
          <Text style={[styles.satrangaFromAnimal, styles.fromTypo]}>
            Satranga (from “Animal”)
          </Text>
        </View>
        <Text style={[styles.yourPlaylists, styles.text20Typo]}>
          Your Playlists
        </Text>
        <View style={styles.imagesParent}>
          <View style={[styles.images3, styles.images3Position]}>
            <Image
              style={styles.image18Icon1}
              resizeMode="cover"
              source={require("../assets/image-181.png")}
            />
            <Image
              style={styles.image19Icon}
              resizeMode="cover"
              source={require("../assets/image-19.png")}
            />
          </View>
          <Text
            style={[styles.janiyeFromChorContainer, styles.tumKyaMileLayout]}
          >
            <Text style={styles.fromTypo}>
              Janiye (from “Chor Nikal ke Bhaga”)
            </Text>
            <Text style={styles.text20Typo}>{` `}</Text>
          </Text>
          <Text style={[styles.tumKyaMile, styles.tumKyaMileLayout]}>
            Tum Kya Mile (from “Rocky Aur Rani”)
          </Text>
        </View>
      </View>
      <View style={[styles.smallButton6, styles.titleProfilPosition]}>
        <View style={styles.button} />
        <Text style={[styles.label6, styles.labelClr]}>Calm</Text>
      </View>
      <StatusBar1 />
      <View style={[styles.titleProfil, styles.titleProfilPosition]}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/avatar.png")}
        />
      </View>
      <TabBar />
      <Text style={[styles.all, styles.allTypo]}>{`All      `}</Text>
      <Text style={[styles.music1, styles.allTypo]}>Music</Text>
      <Text style={[styles.podcasts, styles.allTypo]}>Podcasts</Text>
      <Image
        style={[styles.image20Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-20.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  content11ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1.1966018676757812,
    },
  },
  content11Position: {
    left: -1,
    position: "absolute",
  },
  contentPosition: {
    bottom: 0,
    width: 330,
  },
  leftFlexBox: {
    alignItems: "center",
    flexDirection: "row",
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
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldBody,
    marginLeft: 8,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldBody_size,
    display: "none",
  },
  componentsIconLayout: {
    width: 155,
    height: 210,
  },
  images3Position: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  labelClr: {
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
  },
  smallLayout: {
    height: 50,
    width: 148,
    borderRadius: Border.br_base,
  },
  row2Position: {
    marginLeft: -165,
    left: "50%",
    position: "absolute",
  },
  text20Typo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  textTypo: {
    width: 20,
    color: Color.systemLightRed,
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldBody,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldBody_size,
    display: "none",
  },
  imagesSpaceBlock: {
    marginTop: 3,
    flexDirection: "row",
  },
  row3Position: {
    top: 20,
    position: "absolute",
  },
  contentPosition1: {
    top: 32,
    position: "absolute",
  },
  iconPosition1: {
    left: 4,
    position: "absolute",
  },
  iconPosition: {
    width: 66,
    left: 75,
    position: "absolute",
  },
  fromTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
  },
  tumKyaMileLayout: {
    width: 172,
    top: 218,
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
    position: "absolute",
  },
  titleProfilPosition: {
    top: 53,
    position: "absolute",
  },
  allTypo: {
    fontFamily: FontFamily.interRegular,
    lineHeight: 24,
    fontSize: FontSize.defaultRegularTitle3_size,
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 44,
    width: 44,
  },
  backgroundIcon: {
    marginTop: -410.5,
    top: "50%",
    maxWidth: "100%",
    height: 718,
    right: 0,
    overflow: "hidden",
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
  categorie1: {
    top: 180,
    left: 0,
    position: "absolute",
  },
  music: {
    alignSelf: "stretch",
  },
  componentsVariantIcon: {
    height: 210,
  },
  componentsVariantIcon1: {
    marginLeft: 20,
    height: 210,
  },
  categorie2: {
    top: 460,
    left: 0,
    position: "absolute",
  },
  chooseYourGoal: {
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
  button: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderStyle: "solid",
    borderColor: Color.colorHotpink,
    borderWidth: 2,
    borderRadius: Border.br_base,
    position: "absolute",
    width: "100%",
  },
  label: {
    top: "28%",
    left: "35.81%",
    fontWeight: "600",
    color: Color.labelColorDarkPrimary,
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
    right: 0,
    position: "absolute",
  },
  row2: {
    top: 112,
    flexDirection: "row",
  },
  content: {
    marginLeft: -165.1,
    width: 330,
    left: "50%",
    top: 32,
    position: "absolute",
  },
  content2: {
    top: 156,
    height: 765,
    display: "none",
    width: 390,
    left: 0,
    position: "absolute",
  },
  content1Child: {
    borderRadius: Border.br_11xl,
    height: 685,
    width: 390,
  },
  todaysBiggestHits: {
    lineHeight: 16,
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
  },
  text10: {
    marginLeft: 8,
  },
  image18Icon: {
    width: 168,
    height: 198,
    borderRadius: Border.br_13xl,
  },
  images2: {
    width: 183,
  },
  categorie11: {
    top: 198,
    left: -2,
    height: 253,
    width: 183,
    position: "absolute",
  },
  indiasBest: {
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
  },
  categorie21: {
    top: 473,
    left: 0,
    position: "absolute",
  },
  label4: {
    top: "10.48%",
    left: "31.74%",
    fontWeight: "600",
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.defaultBoldBody,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldBody_size,
    position: "absolute",
    display: "none",
  },
  smallButton4: {
    height: 168,
    width: 167,
    borderRadius: Border.br_base,
  },
  row3: {
    marginLeft: 2.1,
    height: 163,
    flexDirection: "row",
    left: "50%",
  },
  image9Icon: {
    left: 180,
    width: 68,
    height: 68,
  },
  image10Icon: {
    top: 30,
    left: 256,
    width: 67,
    height: 73,
    position: "absolute",
  },
  image11Icon: {
    left: 179,
    width: 70,
    height: 70,
    top: 105,
    position: "absolute",
  },
  image12Icon: {
    top: 107,
    left: 254,
    width: 64,
    height: 64,
    position: "absolute",
  },
  image13Icon: {
    top: 35,
    width: 63,
    height: 63,
  },
  image14Icon: {
    top: 34,
    height: 66,
  },
  image15Icon: {
    height: 72,
    top: 105,
  },
  image16Icon: {
    width: 65,
    top: 105,
    height: 73,
  },
  label5: {
    top: "10.6%",
    left: "32.52%",
    fontWeight: "600",
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.defaultBoldBody,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldBody_size,
    position: "absolute",
    display: "none",
  },
  smallButton5: {
    left: -7,
    width: 163,
    height: 166,
    borderRadius: Border.br_base,
  },
  chaleyaFromJawan: {
    left: 1,
    top: 454,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
    position: "absolute",
  },
  image17Icon: {
    top: 236,
    left: 170,
    borderRadius: 33,
    height: 199,
    width: 167,
    position: "absolute",
  },
  satrangaFromAnimal: {
    left: 177,
    top: 454,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
    position: "absolute",
  },
  content4: {
    top: 27,
    width: 330,
    bottom: 0,
  },
  yourPlaylists: {
    top: 13,
    left: 28,
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
    position: "absolute",
  },
  image18Icon1: {
    width: 162,
    borderRadius: Border.br_13xl,
    height: 210,
  },
  image19Icon: {
    width: 159,
    marginLeft: 9,
    borderRadius: Border.br_13xl,
    height: 210,
  },
  images3: {
    width: 335,
    flexDirection: "row",
  },
  janiyeFromChorContainer: {
    left: 0,
  },
  tumKyaMile: {
    left: 178,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
  },
  imagesParent: {
    top: 541,
    left: 31,
    width: 350,
    height: 262,
    position: "absolute",
  },
  content11: {
    top: 120,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 20,
    elevation: 20,
    height: 775,
    width: 390,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1.1966018676757812,
    },
  },
  label6: {
    top: "30.43%",
    left: "53.01%",
    fontWeight: "600",
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.defaultBoldBody,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldBody_size,
    position: "absolute",
    display: "none",
  },
  smallButton6: {
    left: 85,
    width: 83,
    height: 46,
    borderRadius: Border.br_base,
  },
  titleProfil: {
    marginLeft: -174,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
  },
  all: {
    left: 113,
    width: 32,
    height: 23,
    top: 66,
    fontFamily: FontFamily.interRegular,
    lineHeight: 24,
    fontSize: FontSize.defaultRegularTitle3_size,
  },
  music1: {
    top: 65,
    left: 188,
  },
  podcasts: {
    left: 271,
    top: 66,
    fontFamily: FontFamily.interRegular,
    lineHeight: 24,
    fontSize: FontSize.defaultRegularTitle3_size,
  },
  image20Icon: {
    left: 21,
    borderRadius: 200,
    top: 53,
    position: "absolute",
  },
  homeScreen: {
    borderRadius: Border.br_21xl,
    shadowColor: "rgba(69, 42, 124, 0.1)",
    shadowRadius: 29.92,
    elevation: 29.92,
    height: 844,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default HomeScreen;

import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import CategoryMusicSizeSmall from "../components/CategoryMusicSizeSmall";
import DarkModeFalseTypeDefault from "../components/DarkModeFalseTypeDefault";
import ShapeRoundTopLeftColorSt1 from "../components/ShapeRoundTopLeftColorSt1";
import StatusBar1 from "../components/StatusBar1";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ExploreScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.exploreScreen}
      locations={[0, 1]}
      colors={["rgba(255, 255, 255, 0.29)", "rgba(255, 255, 255, 0)"]}
      useAngle={true}
      angle={86.16}
    >
      <Text style={[styles.janiyeFromChorContainer, styles.containerLayout]}>
        <Text
          style={styles.janiyeFromChor}
        >{`Janiye (from “Chor Nikal Ke Bhaga”)
`}</Text>
        <Text style={styles.vishalMishraRashmeet}>
          Vishal Mishra, Rashmeet Kaur
        </Text>
      </Text>
      <Image
        style={[styles.exploreScreenChild, styles.exploreLayout]}
        resizeMode="cover"
        source={require("../assets/group-1288.png")}
      />
      <Image
        style={styles.image20Icon}
        resizeMode="cover"
        source={require("../assets/image-201.png")}
      />
      <View style={[styles.edit, styles.editPosition]}>
        <View style={[styles.content, styles.rightContentFlexBox]}>
          <View style={[styles.left, styles.rightContentFlexBox]}>
            <Text
              style={[
                styles.recommendedArtistStations,
                styles.songsYouMightTypo,
              ]}
            >
              Recommended Artist Stations
            </Text>
          </View>
          <View style={[styles.right, styles.rightContentFlexBox]}>
            <Text style={[styles.seeAll, styles.textTypo]}>See all</Text>
            <Text style={[styles.text, styles.textClr]}>􀯻</Text>
          </View>
        </View>
      </View>
      <View style={styles.images}>
        <Image
          style={styles.image23Icon}
          resizeMode="cover"
          source={require("../assets/image-23.png")}
        />
      </View>
      <View style={[styles.edit1, styles.editPosition]}>
        <View style={[styles.content, styles.rightContentFlexBox]}>
          <View style={[styles.left, styles.rightContentFlexBox]}>
            <Text style={[styles.songsYouMight, styles.textTypo1]}>
              Songs You Might Like
            </Text>
          </View>
          <View style={[styles.right, styles.rightContentFlexBox]}>
            <Text style={[styles.seeAll1, styles.textTypo]}>See all</Text>
            <Text style={[styles.text, styles.textClr]}>􀯻</Text>
          </View>
        </View>
      </View>
      <View style={[styles.images1, styles.images1Position]}>
        <View>
          <CategoryMusicSizeSmall
            imageDimensions={require("../assets/mask-group1.png")}
            categoryMusicSizeSmallPosition="unset"
          />
          <View style={[styles.content2, styles.rightContentFlexBox]}>
            <View style={[styles.left, styles.rightContentFlexBox]}>
              <View style={styles.texts}>
                <Text style={styles.focusTypo}>Focus</Text>
                <Text style={[styles.focusOnWork, styles.textTypo]}>
                  Focus on work
                </Text>
              </View>
            </View>
            <View style={[styles.right2, styles.rightContentFlexBox]}>
              <Text style={[styles.detail, styles.text4Typo]}>See all</Text>
              <Text style={[styles.text2, styles.textTypo]}>􀅴</Text>
              <Text style={[styles.text2, styles.textTypo]}>􀆅</Text>
              <Text style={[styles.text4, styles.text4Typo]}>􀯻</Text>
              <Text style={[styles.text5, styles.textTypo]}>􀌇</Text>
              <Image
                style={styles.switchIcon}
                resizeMode="cover"
                source={require("../assets/switch.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.image2}>
          <CategoryMusicSizeSmall
            imageDimensions={require("../assets/mask-group2.png")}
            categoryMusicSizeSmallPosition="unset"
          />
          <View style={[styles.content2, styles.rightContentFlexBox]}>
            <View style={[styles.left, styles.rightContentFlexBox]}>
              <View style={styles.texts}>
                <Text style={styles.focusTypo}>Relax</Text>
                <Text style={[styles.focusOnWork, styles.textTypo]}>
                  Reframe stress
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <DarkModeFalseTypeDefault
        showSFSymbolMicrophone={false}
        darkModeFalseTypeDefaultPosition="absolute"
        darkModeFalseTypeDefaultBackgroundColor="rgba(235, 235, 245, 0.6)"
        darkModeFalseTypeDefaultWidth={330}
        darkModeFalseTypeDefaultMarginLeft={-165}
        darkModeFalseTypeDefaultTop={116}
        darkModeFalseTypeDefaultLeft="50%"
      />
      <ShapeRoundTopLeftColorSt1
        shapeRoundTopLeftColorStPosition="absolute"
        shapeRoundTopLeftColorStBorderStyle="unset"
        shapeRoundTopLeftColorStBorderColor="unset"
        shapeRoundTopLeftColorStRight={0}
        shapeRoundTopLeftColorStBottom={0}
        shapeRoundTopLeftColorStLeft={0}
        onTabBarItemPress={() => navigation.navigate("HomeScreen")}
      />
      <Text style={[styles.discover, styles.text4Typo]}>Discover</Text>
      <StatusBar1 propRight={0} propLeft={1} />
      <Pressable
        style={[styles.searchfield, styles.images1Position]}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <View style={styles.leftArrowLayout}>
          <Text style={[styles.text6, styles.textTypo]}>􀄪</Text>
        </View>
        <Text style={[styles.placeholder, styles.text4Typo]}>rch</Text>
        <View style={[styles.heartIcon, styles.leftArrowLayout]}>
          <Text style={[styles.text6, styles.textTypo]}>􀊵</Text>
        </View>
      </Pressable>
      <Image
        style={[styles.image22Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-22.png")}
      />
      <View style={styles.image11}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-21.png")}
        />
      </View>
      <Pressable
        style={[styles.image17, styles.image18IconPosition]}
        onPress={() => navigation.navigate("MusicScreen")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/image-171.png")}
        />
      </Pressable>
      <Image
        style={[styles.image18Icon, styles.image18IconPosition]}
        resizeMode="cover"
        source={require("../assets/image-182.png")}
      />
      <Image
        style={[styles.image18Icon1, styles.image18IconPosition]}
        resizeMode="cover"
        source={require("../assets/image-183.png")}
      />
      <Pressable
        style={styles.chaleyaFromJawanContainer}
        onPress={() => navigation.navigate("MusicScreen")}
      >
        <Text style={styles.containerLayout}>
          <Text style={styles.janiyeFromChor}>{`Chaleya (from “Jawan”)
`}</Text>
          <Text style={styles.vishalMishraRashmeet}>
            Arijit Singh, Anirudth Ravichander and Shilpa Rao
          </Text>
        </Text>
      </Pressable>
      <Text
        style={[styles.satrangaFromAnimalContainer, styles.containerLayout]}
      >
        <Text style={styles.janiyeFromChor}>{`Satranga (from “Animal”)
`}</Text>
        <Text style={styles.vishalMishraRashmeet}>
          Arijit Singh, Shreyas Puranik, Siddharth - Garima
        </Text>
      </Text>
      <Text style={[styles.tumKyaMileContainer, styles.containerLayout]}>
        <Text style={styles.janiyeFromChor}>{`Tum Kya Mile 
`}</Text>
        <Text style={styles.vishalMishraRashmeet}>
          Pritam, Arijit Singh, Shreya Ghoshal, Amitabh Bhattacharya
        </Text>
      </Text>
      <Image
        style={[styles.exploreScreenItem, styles.exploreLayout]}
        resizeMode="cover"
        source={require("../assets/group-1288.png")}
      />
      <Image
        style={[styles.exploreScreenInner, styles.groupIconPosition]}
        resizeMode="cover"
        source={require("../assets/group-1288.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconPosition]}
        resizeMode="cover"
        source={require("../assets/group-1288.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  containerLayout: {
    width: 211,
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    lineHeight: 22,
    letterSpacing: 0,
  },
  exploreLayout: {
    height: 18,
    width: 6,
    position: "absolute",
  },
  editPosition: {
    width: 346,
    marginLeft: -165,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  rightContentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  songsYouMightTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
  },
  textTypo: {
    fontFamily: FontFamily.defaultBoldBody,
    textAlign: "left",
  },
  textClr: {
    color: Color.labelColorDarkTertiary,
    fontSize: FontSize.defaultBoldBody_size,
    marginLeft: 8,
    lineHeight: 22,
  },
  textTypo1: {
    fontSize: FontSize.defaultBoldBody_size,
    lineHeight: 22,
  },
  images1Position: {
    left: 30,
    flexDirection: "row",
    position: "absolute",
  },
  text4Typo: {
    fontFamily: FontFamily.defaultRegularTitle3,
    textAlign: "left",
    letterSpacing: 0,
  },
  leftArrowLayout: {
    height: 22,
    width: 21,
  },
  iconLayout: {
    borderRadius: Border.br_101xl,
    height: 143,
    width: 140,
  },
  image18IconPosition: {
    height: 88,
    left: 33,
    position: "absolute",
  },
  groupIconPosition: {
    left: 360,
    height: 18,
    width: 6,
    position: "absolute",
  },
  janiyeFromChor: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  vishalMishraRashmeet: {
    fontSize: FontSize.size_sm,
    fontWeight: "200",
    fontFamily: FontFamily.interExtraLight,
  },
  janiyeFromChorContainer: {
    top: 727,
    left: 128,
    position: "absolute",
  },
  exploreScreenChild: {
    top: 749,
    left: 357,
  },
  image20Icon: {
    top: 714,
    width: 81,
    height: 87,
    borderRadius: Border.br_3xs,
    left: 33,
    position: "absolute",
  },
  recommendedArtistStations: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    fontWeight: "700",
  },
  left: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_2xs,
    flex: 1,
  },
  seeAll: {
    color: Color.labelColorDarkSecondary,
    fontSize: FontSize.defaultBoldBody_size,
    lineHeight: 22,
    fontWeight: "600",
    letterSpacing: 0,
    fontFamily: FontFamily.defaultBoldBody,
  },
  text: {
    fontFamily: FontFamily.defaultBoldBody,
    textAlign: "left",
    letterSpacing: 0,
  },
  right: {
    marginLeft: 8,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  content: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  edit: {
    top: 171,
    alignItems: "center",
  },
  image23Icon: {
    borderRadius: 118,
    height: 143,
    width: 140,
  },
  images: {
    marginLeft: -173,
    width: 163,
    height: 164,
    top: 215,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  songsYouMight: {
    width: 189,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
  },
  seeAll1: {
    color: Color.labelColorDarkSecondary,
    fontSize: FontSize.defaultBoldBody_size,
    lineHeight: 22,
    letterSpacing: 0,
    fontFamily: FontFamily.defaultBoldBody,
  },
  edit1: {
    height: "5.21%",
    top: "45.62%",
    bottom: "49.17%",
    alignItems: "center",
  },
  focusTypo: {
    textShadowRadius: 22,
    textShadowOffset: {
      width: -5,
      height: -5,
    },
    textShadowColor: "rgba(162, 161, 232, 0.78)",
    fontFamily: FontFamily.defaultBoldBody,
    fontSize: FontSize.defaultBoldBody_size,
    alignSelf: "stretch",
    fontWeight: "600",
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    lineHeight: 22,
    letterSpacing: 0,
  },
  focusOnWork: {
    fontSize: FontSize.defaultRegularCaption1_size,
    lineHeight: 16,
    color: Color.labelColorDarkSecondary,
    alignSelf: "stretch",
  },
  texts: {
    width: 110,
    justifyContent: "center",
  },
  detail: {
    display: "none",
    color: Color.labelColorDarkSecondary,
    fontSize: FontSize.defaultBoldBody_size,
    lineHeight: 22,
  },
  text2: {
    color: Color.systemLightBlue,
    display: "none",
    fontSize: FontSize.defaultBoldBody_size,
    lineHeight: 22,
    marginLeft: 8,
    letterSpacing: 0,
    fontFamily: FontFamily.defaultBoldBody,
  },
  text4: {
    display: "none",
    color: Color.labelColorDarkTertiary,
    fontSize: FontSize.defaultBoldBody_size,
    marginLeft: 8,
    lineHeight: 22,
  },
  text5: {
    color: Color.labelLightTertiary,
    display: "none",
    fontSize: FontSize.defaultBoldBody_size,
    lineHeight: 22,
    marginLeft: 8,
    letterSpacing: 0,
    fontFamily: FontFamily.defaultBoldBody,
  },
  switchIcon: {
    width: 51,
    height: 31,
    display: "none",
    marginLeft: 8,
  },
  right2: {
    width: 29,
    paddingRight: Padding.p_base,
    marginLeft: 8,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  content2: {
    width: 107,
    marginTop: 8,
    justifyContent: "center",
  },
  image2: {
    marginLeft: 13,
  },
  images1: {
    top: 766,
  },
  discover: {
    marginTop: -350,
    marginLeft: -40,
    top: "50%",
    fontSize: FontSize.defaultRegularTitle3_size,
    lineHeight: 24,
    left: "50%",
    fontFamily: FontFamily.defaultRegularTitle3,
    fontWeight: "600",
    color: Color.labelColorDarkPrimary,
    position: "absolute",
  },
  text6: {
    top: 0,
    left: 0,
    fontSize: FontSize.defaultBoldBody_size,
    lineHeight: 22,
    fontWeight: "600",
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.defaultBoldBody,
    letterSpacing: 0,
    position: "absolute",
  },
  placeholder: {
    color: "transparent",
    marginLeft: 6,
    fontSize: FontSize.defaultBoldBody_size,
    lineHeight: 22,
    flex: 1,
  },
  heartIcon: {
    marginLeft: 6,
  },
  searchfield: {
    top: 44,
    right: 30,
    alignItems: "center",
    borderRadius: Border.br_3xs,
  },
  image22Icon: {
    left: 169,
    top: 215,
    borderRadius: Border.br_101xl,
    position: "absolute",
  },
  image11: {
    left: 314,
    width: 140,
    height: 164,
    top: 215,
    position: "absolute",
  },
  icon: {
    height: "100%",
    borderRadius: Border.br_3xs,
    width: "100%",
  },
  image17: {
    top: 429,
    width: 86,
    height: 88,
  },
  image18Icon: {
    top: 524,
    width: 86,
    height: 88,
    borderRadius: Border.br_3xs,
  },
  image18Icon1: {
    top: 619,
    width: 83,
    borderRadius: Border.br_3xs,
  },
  chaleyaFromJawanContainer: {
    left: 135,
    top: 440,
    position: "absolute",
  },
  satrangaFromAnimalContainer: {
    top: 534,
    left: 132,
    position: "absolute",
  },
  tumKyaMileContainer: {
    top: 631,
    left: 129,
    height: 65,
    position: "absolute",
  },
  exploreScreenItem: {
    top: 461,
    left: 363,
  },
  exploreScreenInner: {
    top: 654,
  },
  groupIcon: {
    top: 561,
  },
  exploreScreen: {
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
    overflow: "hidden",
    backgroundColor: "transparent",
    width: "100%",
    flex: 1,
  },
});

export default ExploreScreen;

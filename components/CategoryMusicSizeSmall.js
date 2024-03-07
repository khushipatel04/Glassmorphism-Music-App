import React, { useMemo } from "react";
import { Image, StyleSheet, View, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CategoryMusicSizeSmall = ({
  imageDimensions,
  categoryMusicSizeSmallPosition,
}) => {
  const categoryMusicSizeSmallStyle = useMemo(() => {
    return {
      ...getStyleValue("position", categoryMusicSizeSmallPosition),
    };
  }, [categoryMusicSizeSmallPosition]);

  return (
    <View>
      <Image
        style={styles.maskGroupIcon}
        resizeMode="cover"
        source={imageDimensions}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  maskGroupIcon: {
    width: 277,
    height: 187,
  },
});

export default CategoryMusicSizeSmall;

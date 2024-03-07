import React, { useMemo } from "react";
import { Image, StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ShapeSquareCategorieMeditaImage = ({
  imageDimensions,
  shapeSquareCategorieMeditBorderRadius,
  shapeSquareCategorieMeditWidth,
  shapeSquareCategorieMeditHeight,
  shapeSquareCategorieMeditMarginLeft,
}) => {
  const shapeSquareCategorieMeditaIconStyle = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", shapeSquareCategorieMeditBorderRadius),
      ...getStyleValue("width", shapeSquareCategorieMeditWidth),
      ...getStyleValue("height", shapeSquareCategorieMeditHeight),
      ...getStyleValue("marginLeft", shapeSquareCategorieMeditMarginLeft),
    };
  }, [
    shapeSquareCategorieMeditBorderRadius,
    shapeSquareCategorieMeditWidth,
    shapeSquareCategorieMeditHeight,
    shapeSquareCategorieMeditMarginLeft,
  ]);

  return (
    <Image
      style={[
        styles.shapesquareCategoriemeditaIcon,
        shapeSquareCategorieMeditaIconStyle,
      ]}
      resizeMode="cover"
      source={imageDimensions}
    />
  );
};

const styles = StyleSheet.create({
  shapesquareCategoriemeditaIcon: {
    width: 300,
    height: 300,
  },
});

export default ShapeSquareCategorieMeditaImage;

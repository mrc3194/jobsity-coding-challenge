import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Image, SafeAreaView, View } from "react-native";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useAssets } from "expo-asset";

interface SplashScreenProps {
  setSplashScreenActive: Dispatch<SetStateAction<boolean>>;
}

const SplashScreen = ({ setSplashScreenActive }: SplashScreenProps) => {
  const styles = useStyles(classes);
  const animatedValue = useSharedValue<number>(-1);
  const [assets] = useAssets([
    require("../../assets/jobsity-letters.png"),
    require("../../assets/jobsity-logo.png"),
  ]);
  const lettersStyle = useAnimatedStyle(() => {
    return {
      position: "absolute",
      top: 0,
      left:
        interpolate(animatedValue.value, [0, 1], [-100, 0], Extrapolate.CLAMP) +
        "%",
      opacity: interpolate(
        animatedValue.value,
        [0, 2],
        [0, 1],
        Extrapolate.CLAMP
      ),
      width: "100%",
      height: "100%",
    };
  });
  const logoStyle = useAnimatedStyle(() => {
    return {
      position: "absolute",
      top: 0,
      left:
        interpolate(
          animatedValue.value,
          [-0.2, 1],
          [75, 0],
          Extrapolate.CLAMP
        ) + "%",
      width: "100%",
      height: "100%",
      opacity: interpolate(
        animatedValue.value,
        [-1, 0],
        [0, 1],
        Extrapolate.CLAMP
      ),
    };
  });

  const goToMainAppSection = () => {
    setTimeout(() => {
      setSplashScreenActive(false);
    }, 900);
  };

  const fireAnimation = () => {
    animatedValue.value = withTiming(
      2,
      { duration: 2400, easing: Easing.inOut(Easing.ease) },
      () => {
        runOnJS(goToMainAppSection)();
      }
    );
  };

  useEffect(() => {
    if (assets) {
      fireAnimation();
    }
  }, [assets]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.animatedLogoContainer}>
        <View style={styles.logoImageContainer}>
          <Animated.View style={logoStyle}>
            <Image
              source={require("../../assets/jobsity-logo.png")}
              resizeMode="contain"
              style={styles.logoImage}
            />
          </Animated.View>
        </View>
        <View style={styles.logoLettersContainer}>
          <Animated.View style={lettersStyle}>
            <Image
              source={require("../../assets/jobsity-letters.png")}
              resizeMode="contain"
              style={styles.logoImage}
            />
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

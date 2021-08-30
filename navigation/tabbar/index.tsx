import React, { useCallback } from "react";

import { View, Pressable, Dimensions, StyleSheet, Text } from "react-native";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";
import Icon from "@jobsity/ui/Icon";
import useTheme from "@jobsity/hooks/useTheme";
import { IconsNames } from "../../packages/common/types/icons";
// import NavigationIcon from './navigationIcon';

const { width } = Dimensions.get("window");

const TabBar = ({ state, descriptors, navigation }: any) => {
  const { palette } = useTheme();
  const styles = useStyles(classes);
  const navigatorItemText = useCallback((itemIndex: number): string => {
    if (itemIndex === 0) return "Home";
    if (itemIndex === 1) return "Search";
    if (itemIndex === 2) return "My Series";
    return "Settings";
  }, []);
  const navigatorItemIcon = useCallback((itemIndex: number): IconsNames => {
    if (itemIndex === 0) return "home";
    if (itemIndex === 1) return "search";
    if (itemIndex === 2) return "bookmark";
    return "settings";
  }, []);
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View key={index} style={styles.navigatorItem}>
            <Pressable style={styles.pressableContainer} onPress={onPress}>
              <View style={styles.itemContainer}>
                <Icon
                  name={navigatorItemIcon(index)}
                  color={isFocused ? palette.main.extra : palette.text.disabled}
                  size={18}
                />
                <Text
                  style={[
                    styles.itemText,
                    {
                      color: isFocused
                        ? palette.main.extra
                        : palette.text.disabled,
                    },
                  ]}
                >
                  {navigatorItemText(index)}
                </Text>
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

export default TabBar;

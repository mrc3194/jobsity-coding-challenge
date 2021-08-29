import React, { forwardRef } from "react";
import { View, TextInput, TextInputProps, ViewStyle } from "react-native";

import useStyles from "@jobsity/hooks/useStyles";

import { IconsNames } from "@jobsity/common/types/icons";

import Icon from "../Icon";

import classes from "./classes";

interface InputProps extends TextInputProps {
  inputStyle?: ViewStyle;
  width?: number | string;
  leftIcon?: boolean;
  iconName?: IconsNames;
}

const Input = forwardRef(
  (
    {
      width = "100%",
      inputStyle,
      leftIcon,
      iconName = "search",
      ...rest
    }: InputProps,
    ref: any
  ) => {
    const styles = useStyles(classes);
    return (
      <View style={[styles.container, { width }]}>
        {leftIcon && (
          <View style={styles.iconContainer}>
            <Icon name={iconName} size={18} />
          </View>
        )}
        <TextInput ref={ref} style={[styles.textInput, inputStyle]} {...rest} />
      </View>
    );
  }
);

export default Input;

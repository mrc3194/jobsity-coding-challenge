import React, { useMemo, useState } from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";

interface ButtonProps extends TouchableOpacityProps {
  width?: number | string;
  height?: number | string;
  borderRightWidth?: number | string;
  textColor?: string;
  backgroundColor?: string;
  title: string;
  rightDivider?: boolean;
  dividerColor?: string;
}

interface buttonStyle {
  width: number | string;
  height?: number | string;
  backgroundColor?: string;
  borderRightWidth?: number;
  borderColor?: string;
}

const Button = ({
  width = "100%",
  height,
  backgroundColor = undefined,
  rightDivider = false,
  dividerColor,
  textColor = "black",
  disabled,
  title,
  ...rest
}: ButtonProps) => {
  const styles = useStyles(classes);
  const buttonStyle = useMemo(() => {
    const objectStyle: buttonStyle = { width };
    if (backgroundColor) objectStyle.backgroundColor = backgroundColor;
    if (rightDivider) {
      objectStyle.borderRightWidth = 1;
      objectStyle.borderColor = dividerColor ? dividerColor : "black";
    }
    if (height) objectStyle.height = height;
    return objectStyle;
  }, [backgroundColor, width, height, rightDivider]);
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { ...buttonStyle, opacity: disabled ? 0.45 : 1 },
      ]}
      {...rest}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

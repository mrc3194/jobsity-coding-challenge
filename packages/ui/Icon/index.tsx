import React from "react";
import { View, ViewProps } from "react-native";
import { Ionicons } from "@expo/vector-icons/";
import { IconsNames } from "@jobsity/common/types/icons";
import { IconProps } from "react-native-vector-icons/Icon";

interface IconPropss {
  name: IconsNames;
  size?: number;
  color?: string;
  rest?: IconProps;
}

const Icon = ({ name, size, color }: IconPropss) => {
  return <Ionicons name={name} size={size} color={color} />;
};

export default Icon;

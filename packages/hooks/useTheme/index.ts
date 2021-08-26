import React, { useContext } from "react";
import { ThemeContext } from "@jobsity/common/ThemeContext";

const useTheme = () => useContext(ThemeContext);

export default useTheme;

import React, { useContext } from "react";
import { AuthContext } from "@jobsity/common/AuthContext";

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;

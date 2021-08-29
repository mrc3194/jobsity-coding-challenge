import React, { useState } from "react";
import { SafeAreaView, View, Button } from "react-native";
import useAuthContext from "@jobsity/hooks/useAuthContext";
import { AuthOptions } from "@jobsity/common/types/auth";
import PINSection from "../../components/PINSection";

interface PINResponse {
  code: number;
  message: string;
  error: boolean;
  success: boolean;
}

const AuthScreen = () => {
  const { optionActive, setUserSuccessAuth } = useAuthContext();
  const [PIN, setPIN] = useState<string>("");
  const callbackPin = ({ success, message }: PINResponse) => {
    if (success) {
      setUserSuccessAuth();
    } else {
      alert(message);
    }
  };
  if (optionActive === AuthOptions.PIN)
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          <PINSection
            PIN={PIN}
            setPin={setPIN}
            isLogin
            callback={callbackPin}
          />
        </View>
      </SafeAreaView>
    );
  return <></>;
};

export default AuthScreen;

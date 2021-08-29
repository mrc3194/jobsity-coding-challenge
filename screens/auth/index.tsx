import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Button, Text } from "react-native";
import useAuthContext from "@jobsity/hooks/useAuthContext";
import { AuthOptions } from "@jobsity/common/types/auth";
import PINSection from "../../components/PINSection";
import * as LocalAuthentication from "expo-local-authentication";
import { TouchableOpacity } from "react-native-gesture-handler";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";

interface PINResponse {
  code: number;
  message: string;
  error: boolean;
  success: boolean;
}

const AuthScreen = () => {
  const { optionActive, setUserSuccessAuth } = useAuthContext();
  const [hasHardware, setHasHardware] = useState<boolean>(false);

  const styles = useStyles(classes);

  const checkDevice = async () => {
    const hasAuthHardware = await LocalAuthentication.hasHardwareAsync();
    const supportedAuthMethods =
      await LocalAuthentication.supportedAuthenticationTypesAsync();
    setHasHardware(hasAuthHardware);
  };

  const authWithBio = async () => {
    const { success } = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate",
      fallbackLabel: "Use PIN",
      disableDeviceFallback: true,
      cancelLabel: "Cancel",
    });
    if (success) {
      setUserSuccessAuth();
    } else {
      alert("Fingerprint doesn't match");
    }
  };

  useEffect(() => {
    checkDevice();
  }, []);

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
      <SafeAreaView style={styles.container}>
        {/* this button will be a ui component */}
        <TouchableOpacity
          style={{ padding: 20, backgroundColor: "yellow", marginTop: 12 }}
          activeOpacity={0.6}
          onPress={authWithBio}
        >
          <Text>Auth with Bio</Text>
        </TouchableOpacity>
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

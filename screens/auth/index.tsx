import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import useAuthContext from "@jobsity/hooks/useAuthContext";
import { AuthOptions } from "@jobsity/common/types/auth";
import PINSection from "../../components/PINSection";
import * as LocalAuthentication from "expo-local-authentication";
import { TouchableOpacity } from "react-native-gesture-handler";
import useStyles from "@jobsity/hooks/useStyles";
import Button from "@jobsity/ui/Button";
import classes from "./classes";
import usePlatform from "@jobsity/hooks/usePlatform";

interface PINResponse {
  code: number;
  message: string;
  error: boolean;
  success: boolean;
}

const AuthScreen = () => {
  const { optionActive, setUserSuccessAuth } = useAuthContext();
  const { isAndroid } = usePlatform();
  const [hasFingerprint, setHasFingerprint] = useState<boolean>(false);

  const styles = useStyles(classes);

  const checkDevice = async () => {
    const hasAuthHardware = await LocalAuthentication.hasHardwareAsync();
    const supportedAuthMethods =
      await LocalAuthentication.supportedAuthenticationTypesAsync();
    if (supportedAuthMethods.includes(1)) {
      setHasFingerprint(hasAuthHardware);
    } else {
      setHasFingerprint(false);
    }
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
        {isAndroid && hasFingerprint && (
          <View style={styles.authButton}>
            <Button
              title="Auth with fingerprint"
              width="90%"
              height={52}
              onPress={authWithBio}
            />
          </View>
        )}
        <View style={styles.PINContainer}>
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

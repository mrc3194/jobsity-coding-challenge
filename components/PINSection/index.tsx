import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { Text, TextInput, View } from "react-native";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";
import useAuthContext from "@jobsity/hooks/useAuthContext";
import { AuthOptions } from "@jobsity/common/types/auth";
import usePlatform from "@jobsity/hooks/usePlatform";

interface PINSectionProps {
  PIN: string;
  setPin: (text: string) => void;
  callback: Function;
  isLogin?: boolean;
  PINConfirmed?: boolean;
}

const PINSection = ({
  PIN,
  setPin,
  isLogin = false,
  callback,
  PINConfirmed = false,
}: PINSectionProps) => {
  const { validatePIN, optionActive, setAuthOption, setNewPIN } =
    useAuthContext();
  const textInputRef = useRef<any>(null);
  const styles = useStyles(classes);
  const { isAndroid } = usePlatform();

  const isPINActive = useMemo(
    () => optionActive === AuthOptions.PIN,
    [optionActive]
  );
  const isBIOActive = useMemo(
    () => optionActive === AuthOptions.BIO,
    [optionActive]
  );

  const title = useMemo(() => {
    if (!isLogin && !isPINActive && !isBIOActive) {
      return "Set new PIN";
    }
    if (PINConfirmed) {
      return "Enter your new PIN";
    }
    return "Enter your PIN";
  }, [isLogin, isPINActive, isBIOActive, PINConfirmed]);

  useEffect(() => {
    if (PIN.length === 4) {
      if (PINConfirmed) {
        setNewPIN(PIN);
        setAuthOption(AuthOptions.PIN);
        callback({
          code: 0,
          message: "Your PIN was updated",
          success: true,
          error: false,
        });
        textInputRef.current?.blur();
        return;
      }
      if (isLogin || isPINActive) {
        const PINIsValid = validatePIN(PIN);
        if (PINIsValid) {
          callback({
            code: 1,
            message: "Your PIN is valid",
            success: true,
            error: false,
          });
          textInputRef.current?.blur();
        } else {
          callback({
            code: 2,
            message: "Incorrect PIN",
            success: false,
            error: true,
          });
        }
      }
      if (!isLogin && !isPINActive && !isBIOActive) {
        setNewPIN(PIN);
        setAuthOption(AuthOptions.PIN);
        textInputRef.current?.blur();
        callback({
          code: 3,
          message: "Your PIN was created",
          success: true,
          error: false,
        });
      }
      if (!isLogin && !isPINActive && isBIOActive) {
        setNewPIN(PIN);
        setAuthOption(AuthOptions.PIN);
        textInputRef.current?.blur();
        callback({
          message:
            "Your new authentication method is by PIN and your new PIN was created",
          success: true,
          error: false,
        });
      }
    }
  }, [PIN, PINConfirmed]);

  useEffect(() => {
    if (PINConfirmed) {
      textInputRef.current?.focus();
    }
  }, [PINConfirmed]);

  useEffect(() => {
    setTimeout(() => {
      textInputRef.current?.focus();
    }, 600);
  }, []);

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <View style={styles.pinContainer}>
        {new Array(4).fill(null).map((_: null, index: number) => (
          <View key={index} style={styles.numberBox}>
            <Text style={styles.number}>
              {PIN.length > index && PIN[index]}
            </Text>
          </View>
        ))}
        <TextInput
          ref={textInputRef}
          style={styles.textInput}
          value={PIN}
          keyboardType={isAndroid ? "phone-pad" : "numeric"}
          onChangeText={(text: string) => text.length <= 4 && setPin(text)}
        />
      </View>
    </View>
  );
};

export default PINSection;

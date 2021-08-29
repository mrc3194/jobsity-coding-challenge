import React, { Dispatch, SetStateAction, useMemo, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";
import useAuthContext from "@jobsity/hooks/useAuthContext";
import { AuthOptions } from "@jobsity/common/types/auth";
import PINSection from "../PINSection";

interface OnPinComplete {
  code: number;
  message: string;
  error: boolean;
  success: boolean;
}

const Settings: React.FC = () => {
  const { optionActive } = useAuthContext();
  const [activePINSection, setActivePINSection] = useState<boolean>(false);
  const [newPIN, setNewPIN] = useState<string>("");
  const [PINConfirmed, setPinConfirmed] = useState<boolean>(false);
  const isPINActive = useMemo(
    () => optionActive === AuthOptions.PIN,
    [optionActive]
  );
  const isBIOActive = useMemo(
    () => optionActive === AuthOptions.BIO,
    [optionActive]
  );
  const PINActivation = () => {
    if (isBIOActive && !isPINActive) {
      alert("first auth with bio");
    }
    if (!isBIOActive && isPINActive) {
      setActivePINSection(true);
    }
    if (!isBIOActive && !isPINActive) {
      //   alert("just do it baby");
      setActivePINSection(true);
    }
  };

  const onChangeTextPin = (text: string) => {
    if (text.length > 4) return;
    setNewPIN(text);
  };

  const onPINComplete = ({ message, success, code }: OnPinComplete) => {
    if (success) {
      if (code === 0) {
        setNewPIN("");
        setActivePINSection(false);
        setPinConfirmed(false);
      }
      if (code === 1) {
        setNewPIN("");
        setPinConfirmed(true);
      }
      if (code === 3) {
        setNewPIN("");
        setActivePINSection(false);
      }
    } else {
      setNewPIN("");
    }
    if (code !== 1) {
      alert(message);
    }
  };

  const styles = useStyles(classes);

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.6} onPress={PINActivation}>
        <Text style={styles.headerTitle}>
          {isPINActive ? "Change PIN" : "Active PIN"}
        </Text>
      </TouchableOpacity>
      {activePINSection && (
        <PINSection
          callback={onPINComplete}
          PIN={newPIN}
          setPin={onChangeTextPin}
          PINConfirmed={PINConfirmed}
        />
      )}
    </View>
  );
};

export default Settings;

import React, { Dispatch, SetStateAction, useMemo, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";
import useAuthContext from "@jobsity/hooks/useAuthContext";
import { AuthOptions } from "@jobsity/common/types/auth";
import PINSection from "../PINSection";
import Button from "@jobsity/ui/Button";
import useInfiniteScrollSettings from "@jobsity/hooks/useInfiniteScrollSettings";
import { Switch } from "react-native-gesture-handler";

interface OnPinComplete {
  code: number;
  message: string;
  error: boolean;
  success: boolean;
}

const Settings: React.FC = () => {
  const { optionActive } = useAuthContext();
  const { infiniteScrollActive, setValue } = useInfiniteScrollSettings();
  const [activePINSection, setActivePINSection] = useState<boolean>(false);
  const [newPIN, setNewPIN] = useState<string>("");
  const [PINConfirmed, setPinConfirmed] = useState<boolean>(false);
  const [isPINDeactivation, setPINDeactivation] = useState<boolean>(false);
  const isPINActive = useMemo(
    () => optionActive === AuthOptions.PIN,
    [optionActive]
  );
  const isBIOActive = useMemo(
    () => optionActive === AuthOptions.BIO,
    [optionActive]
  );
  const PINActivation = () => {
    if (!isBIOActive && isPINActive) {
      setActivePINSection(true);
    }
    if (!isBIOActive && !isPINActive) {
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
      if (code === 8) {
        setNewPIN("");
        setActivePINSection(false);
        setPinConfirmed(false);
        setPINDeactivation(false);
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

  const deactivatePINAuth = () => {
    setPINDeactivation(true);
    setActivePINSection(true);
  };

  const closePIN = () => {
    setActivePINSection(false);
    setNewPIN("");
    setPinConfirmed(false);
  };

  const styles = useStyles(classes);

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Settings</Text>
      {!activePINSection && (
        <Button
          title={isPINActive ? "Change PIN" : "Active PIN"}
          width="90%"
          height={50}
          onPress={PINActivation}
        />
      )}
      {optionActive === AuthOptions.PIN && !activePINSection && (
        <View
          style={{ width: "100%", marginVertical: 12, alignItems: "center" }}
        >
          <Button
            title="Delete PIN"
            width="90%"
            height={50}
            onPress={deactivatePINAuth}
          />
        </View>
      )}
      {activePINSection && (
        <Button title="Close" width="90%" height={50} onPress={closePIN} />
      )}
      {activePINSection && (
        <View style={styles.activePINContainer}>
          <PINSection
            callback={onPINComplete}
            PIN={newPIN}
            setPin={onChangeTextPin}
            PINConfirmed={PINConfirmed}
            deactivating={isPINDeactivation}
          />
        </View>
      )}
      <Text style={[styles.headerTitle, { fontSize: 18, marginTop: 12 }]}>
        Home Page
      </Text>
      <View style={styles.row}>
        <Text style={styles.label}>Use Infinite Scroll</Text>
        <Switch
          onValueChange={(value: boolean) => setValue(value)}
          value={infiniteScrollActive}
        />
      </View>
    </View>
  );
};

export default Settings;

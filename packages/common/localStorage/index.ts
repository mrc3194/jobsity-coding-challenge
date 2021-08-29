import AsyncStorage from "@react-native-async-storage/async-storage";

const saveInStorage = async (series: string, key: string) => {
  try {
    await AsyncStorage.setItem(key, series);
  } catch (e) {
    console.error("##error", e);
  }
};

export default saveInStorage;

import { StyleSheet } from "react-native";
import { CustomStyleSheetProps } from "@jobsity/common/types/styles";

const classes = ({ screenHeight, palette }: CustomStyleSheetProps) => {
  return StyleSheet.create({
    container: {
      width: "100%",
      marginTop: 18,
    },
    seasonsSelectorContainer: {
      width: "100%",
    },
    seasonSelector: {
      borderRadius: 1000,
      paddingHorizontal: 16,
      paddingVertical: 6,
      marginRight: 6,
      backgroundColor: palette.main.extra,
    },
    seasonSelected: {
      backgroundColor: palette.main.primary,
    },
    seasonSelectorText: {
      color: palette.common.black,
      fontSize: 16,
    },
    seasonSelectedText: {
      color: palette.text.primary,
    },
    contentContainer: {
      paddingVertical: 18,
      paddingHorizontal: 12,
    },
    scrollView: {
      flex: 1,
    },
    // list of episodes
    listOfEpisodesContainer: {
      width: "100%",
      alignItems: "center",
    },
    episodeContainer: {
      width: "94%",
      paddingVertical: 18,
      paddingHorizontal: 12,
      borderRadius: 8,
      marginBottom: 8,
      backgroundColor: palette.main.accent,
    },
    episodeText: {
      color: palette.common.white,
      fontSize: 16,
    },
    seasonEpisode: {
      fontSize: 16,
      fontWeight: "800",
    },
    episodeDuration: {
      color: palette.common.white,
      marginTop: 4,
    },
  });
};

export default classes;

import { StyleSheet } from "react-native";

const classes = ({ screenHeight, palette }: any) => {
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
      paddingHorizontal: 12,
      paddingVertical: 4,
      marginRight: 6,
      backgroundColor: palette.common.white,
    },
    seasonSelected: {
      backgroundColor: "blue",
    },
    seasonSelectorText: {
      color: "black",
      fontSize: 18,
    },
    seasonSelectedText: {
      color: palette.common.white,
    },
    contentContainer: {
      paddingVertical: 18,
      paddingHorizontal: 12,
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
      backgroundColor: palette.common.black,
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

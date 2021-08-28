import { Episode, Seasons } from "../types/queries/episodes";

const groupEpisodesBySeason = (episodes: Episode[]): Seasons[] => {
  let episodesGroupedBySeason: any = {};
  episodes.forEach((episode: Episode) => {
    const { season } = episode;
    if (episodesGroupedBySeason[season]) {
      episodesGroupedBySeason[season].push(episode);
    } else {
      episodesGroupedBySeason[season] = [episode];
    }
  });
  const seriesSeasons: Seasons[] = Object.keys(episodesGroupedBySeason).map(
    (season: string) => {
      return {
        season,
        episodes: episodesGroupedBySeason[season],
      };
    }
  );
  return seriesSeasons;
};

export default groupEpisodesBySeason;

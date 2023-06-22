import {Movie} from "./Movie";
import {CastMember} from "./CastMember";
import {TrailerOrClip} from "./TrailerOrClip";

export type FilmSeries = {
  id: string,
  title: string,
  image: string,
  movieList: Movie[],
  castList: CastMember[],
  trailerAndClipsList: TrailerOrClip[],
}

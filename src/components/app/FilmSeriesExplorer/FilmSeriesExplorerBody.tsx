import React, {ReactElement} from "react";
import MovieList from "../MovieList/MovieList";
import {FilmSeries} from "../../../models/FilmSeries";
import CastList from "../CastList/CastList";
import TrailerAndClipsList from "../TrailerAndClipsList/TrailerAndClipsList";
import {FilmSeriesExplorerHeaderTabsID} from "./FilmSeriesExplorerHeaderTabs";

export type FilmSeriesExplorerBodyProps = {
  children?: ReactElement | ReactElement[] | string | null,
  style?: React.CSSProperties,
  filmSeries: FilmSeries,
  activeTab: FilmSeriesExplorerHeaderTabsID,
}

export default function FilmSeriesExplorerBody(props: FilmSeriesExplorerBodyProps): ReactElement {
  return (
    <div style={props.style}>
      {props.activeTab === 'overview' || props.activeTab === 'movies' ?
        <MovieList
          filmSeries={props.filmSeries}
          itemImageHeight={props.activeTab === 'movies' ? 190 : undefined}
          itemWidth={props.activeTab === 'movies' ? 140 : undefined}
        />
        : null
      }
      {props.activeTab === 'overview' || props.activeTab === 'cast' ?
        <CastList
          filmSeries={props.filmSeries}
          itemImageHeight={props.activeTab === 'cast' ? 170 : undefined}
          itemWidth={props.activeTab === 'cast' ? 140 : undefined}
        />
        : null
      }
      {props.activeTab === 'trailers-and-clips' ?
        <TrailerAndClipsList filmSeries={props.filmSeries} />
        : null
      }
    </div>
  );
}

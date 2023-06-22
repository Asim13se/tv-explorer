import {ReactElement} from "react";
import Tabs, {Tab} from "../../ui-library/composite/Tabs";
import {OnTabChange} from "../../../types/OnTabChange";
import {FilmSeries} from "../../../models/FilmSeries";

export type FilmSeriesExplorerHeaderTabsProps = {
  children?: ReactElement | ReactElement[] | string | null,
  style?: React.CSSProperties,
  onTabChange: OnTabChange<FilmSeriesExplorerHeaderTabsID>,
  filmSeries: FilmSeries,
}
export type FilmSeriesExplorerHeaderTabsID = 'overview' | 'movies' | 'cast' | 'trailers-and-clips'

export default function FilmSeriesExplorerHeaderTabs(props: FilmSeriesExplorerHeaderTabsProps): ReactElement {
  const tabList: Tab<FilmSeriesExplorerHeaderTabsID>[] = [
    {
      id: 'overview',
      label: 'Overview',
      href: `/film-series/${props.filmSeries.id}/tabs/overview`,
    },
    {
      id: 'movies',
      label: 'Movies',
      href: `/film-series/${props.filmSeries.id}/tabs/movies`,
    },
    {
      id: 'cast',
      label: 'Cast',
      href: `/film-series/${props.filmSeries.id}/tabs/cast`,
    },
    {
      id: 'trailers-and-clips',
      label: 'Trailers & clips',
      href: `/film-series/${props.filmSeries.id}/tabs/trailers-and-clips`,
    },
  ]
  return (
    <Tabs
      tabList={tabList}
      onTabChange={props.onTabChange}
    >
      {props.children}
    </Tabs>
  );
}

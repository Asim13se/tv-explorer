import {ReactElement} from "react";
import getStyle from "../../../utils/getStyle";
import FilmSeriesExplorerHeaderTabs, {FilmSeriesExplorerHeaderTabsID} from "./FilmSeriesExplorerHeaderTabs";
import FilmSeriesExplorerHeaderInfo from "./FilmSeriesExplorerHeaderInfo";
import {FilmSeries} from "../../../models/FilmSeries";
import {OnTabChange} from "../../../types/OnTabChange";

export type FilmSeriesExplorerHeaderProps = {
  children?: ReactElement | ReactElement[] | string | null,
  style?: React.CSSProperties,
  filmSeries: FilmSeries,
  onTabChange: OnTabChange<FilmSeriesExplorerHeaderTabsID>,
}

export default function FilmSeriesExplorerHeader(props: FilmSeriesExplorerHeaderProps): ReactElement {
  return (
    <div style={styles.main}>
      <FilmSeriesExplorerHeaderInfo
        filmSeries={props.filmSeries}
        style={styles.headerInfo}
      />
      <FilmSeriesExplorerHeaderTabs
        filmSeries={props.filmSeries}
        onTabChange={props.onTabChange}
      />
    </div>
  );
}

const styles = getStyle({
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerInfo: {
    marginInlineEnd: 30,
  }
});

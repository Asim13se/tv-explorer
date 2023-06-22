import FilmSeriesExplorerHeader from "./FilmSeriesExplorerHeader";
import FilmSeriesExplorerBody from "./FilmSeriesExplorerBody";
import getStyle from "../../../utils/getStyle";
import {FilmSeries} from "../../../models/FilmSeries";
import {OnTabChange} from "../../../types/OnTabChange";
import {useState} from "react";
import {FilmSeriesExplorerHeaderTabsID} from "./FilmSeriesExplorerHeaderTabs";

export type FilmSeriesExplorerProps = {
  filmSeries: FilmSeries,
  style?: React.CSSProperties,
}

export default function FilmSeriesExplorer(props: FilmSeriesExplorerProps) {
  const [activeTab, setActiveTab] = useState<FilmSeriesExplorerHeaderTabsID>('overview')
  const handleTabChange: OnTabChange<FilmSeriesExplorerHeaderTabsID> = (tab, index) => {
    setActiveTab(tab.id);
  }
  return (
    <div style={props.style}>
      <FilmSeriesExplorerHeader
        filmSeries={props.filmSeries}
        onTabChange={handleTabChange}
      />
      <FilmSeriesExplorerBody
        filmSeries={props.filmSeries}
        activeTab={activeTab}
        style={styles.filmSeriesExplorerBody}
      />
    </div>
  );
}

const styles = getStyle({
  filmSeriesExplorerBody: {
    marginTop: 25,
  }
});

import {ReactElement} from "react";
import InfoItem from "../../ui-library/composite/InfoItem";
import {FilmSeries} from "../../../models/FilmSeries";

export type FilmSeriesExplorerHeaderInfoProps = {
  children?: ReactElement | ReactElement[] | string | null,
  style?: React.CSSProperties,
  filmSeries: FilmSeries,
}

export default function FilmSeriesExplorerHeaderInfo(props: FilmSeriesExplorerHeaderInfoProps): ReactElement {
  return (
    <InfoItem
      style={props.style}
      image={props.filmSeries.image}
      title={props.filmSeries.title}
      subTitle={'Film Series'}
    />
  );
}

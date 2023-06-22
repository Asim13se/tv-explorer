import React, {ReactElement} from "react";
import {CardItemProps} from "../../ui-library/composite/CardItem";
import CardItemList, {CardItemListProps} from "../../ui-library/composite/CardItemList";
import ListHeader1 from "../../ui-library/composite/ListHeader1";
import {FilmSeries} from "../../../models/FilmSeries";
import VideoThumbnail from "../../ui-library/composite/VideoThumbnail";
import {TrailerOrClip} from "../../../models/TrailerOrClip";
import getStyle from "../../../utils/getStyle";

export type TrailerAndClipsListProps = {
  children?: ReactElement | ReactElement[] | string | null,
  style?: React.CSSProperties,
  containerStyle?: CardItemListProps<TrailerOrClip>['containerStyle'],
  filmSeries: FilmSeries,
  itemWidth?: number,
  itemImageHeight?: number,
}

export default function TrailerAndClipsList(props: TrailerAndClipsListProps): ReactElement {
  const cardItemList: CardItemProps<TrailerOrClip>[] = props.filmSeries.trailerAndClipsList.map((trailerOrClip) => {
    return {
      image: trailerOrClip.thumbnail,
      title: trailerOrClip.title,
      subTitle: trailerOrClip.subTitle,
      href: `/film-series/${props.filmSeries.id}/trailer-and-clips/${trailerOrClip.id}`,
      data: trailerOrClip,
    };
  })
  const renderItemImageComponent: CardItemProps<TrailerOrClip>['renderImageComponent'] = (item) => {
    return (
      <VideoThumbnail
        src={item.image!}
        duration={item.data.duration}
        imageStyle={styles.videoThumbnail}
        imageWidth={200}
      />
    );
  }
  return (
    <CardItemList
      containerStyle={props.containerStyle}
      cardItemList={cardItemList}
      itemWidth={600}
      itemImageHeight={props.itemImageHeight}
      itemHorizontal
      renderItemImageComponent={renderItemImageComponent}
      ListHeader={
        <ListHeader1
          label={'Trailers & clips'}
          href={`/film-series/${props.filmSeries.id}/trailer-and-clips`}
        />
      }
    />
  );
}

const styles = getStyle({
  videoThumbnail: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
});


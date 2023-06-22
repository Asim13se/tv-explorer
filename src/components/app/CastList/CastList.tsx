import React, {ReactElement} from "react";
import {CardItemProps} from "../../ui-library/composite/CardItem";
import CardItemList, {CardItemListProps} from "../../ui-library/composite/CardItemList";
import ListHeader1 from "../../ui-library/composite/ListHeader1";
import {FilmSeries} from "../../../models/FilmSeries";
import {CastMember} from "../../../models/CastMember";

export type MovieListProps = {
  children?: ReactElement | ReactElement[] | string | null,
  style?: React.CSSProperties,
  containerStyle?: CardItemListProps<CastMember>['containerStyle'],
  filmSeries: FilmSeries,
  itemWidth?: number,
  itemImageHeight?: number,
}

export default function CastList(props: MovieListProps): ReactElement {
  const cardItemList: CardItemProps<CastMember>[] = props.filmSeries.castList.map((castMember) => {
    return {
      image: castMember.image,
      title: castMember.name,
      subTitle: castMember.nameInTheMovie,
      href: `/film-series/${props.filmSeries.id}/cast/${castMember.id}`,
      data: castMember,
    };
  })
  return (
    <CardItemList
      containerStyle={props.containerStyle}
      cardItemList={cardItemList}
      horizontal
      itemWidth={props.itemWidth}
      itemImageHeight={props.itemImageHeight || 130}
      ListHeader={
        <ListHeader1
          label={'Cast'}
          href={`/film-series/${props.filmSeries.id}/cast`}
        />
      }
    />
  );
}

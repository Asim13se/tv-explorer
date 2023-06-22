import React, {ReactElement} from "react";
import {CardItemProps} from "../../ui-library/composite/CardItem";
import CardItemList, {CardItemListProps} from "../../ui-library/composite/CardItemList";
import ListHeader1 from "../../ui-library/composite/ListHeader1";
import {Movie} from "../../../models/Movie";
import {FilmSeries} from "../../../models/FilmSeries";

export type MovieListProps = {
  children?: ReactElement | ReactElement[] | string | null,
  style?: React.CSSProperties,
  containerStyle?: CardItemListProps<Movie>['containerStyle'],
  filmSeries: FilmSeries,
  itemWidth?: number,
  itemImageHeight?: number,
}

export default function MovieList(props: MovieListProps): ReactElement {
  const cardItemList: CardItemProps<Movie>[] = props.filmSeries.movieList.map((movie: Movie) => {
    return {
      image: movie.image,
      title: movie.title,
      subTitle: movie.year,
      href: `/film-series/${props.filmSeries.id}/movies/${movie.id}`,
      data: movie,
    };
  })
  return (
    <CardItemList
      containerStyle={props.containerStyle}
      cardItemList={cardItemList}
      horizontal
      itemWidth={props.itemWidth}
      itemImageHeight={props.itemImageHeight}
      ListHeader={
      <ListHeader1
        label={'Movies'}
        href={`/film-series/${props.filmSeries.id}/movies`}
      />
    }
    />
  );
}

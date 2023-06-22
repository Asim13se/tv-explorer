import {ReactElement} from "react";
import List, {ListProps} from "../primitive/List";
import CardItem, {CardItemProps} from "./CardItem";
import getStyle from "../../../utils/getStyle";

export type CardItemListProps<T> = {
  children?: ReactElement[] | string | null,
  containerStyle?: ListProps['containerStyle'],
  cardItemList: CardItemProps<T>[],
  horizontal?: ListProps['horizontal'],
  ListHeader?: ListProps['ListHeader'],
  ListFooter?: ListProps['ListFooter'],
  itemWidth?: CardItemProps<T>['width'],
  itemImageHeight?: CardItemProps<T>['imageHeight'],
  itemHorizontal?: CardItemProps<T>['horizontal']
  renderItemImageComponent?: CardItemProps<T>['renderImageComponent']
}

export default function CardItemList<T>(props: CardItemListProps<T>): ReactElement {
  return (
    <List
      containerStyle={props.containerStyle}
      horizontal={props.horizontal}
      ListHeader={props.ListHeader}
      ListFooter={props.ListFooter}
    >
      {props.cardItemList.map((cardItem, index) => (
        <CardItem
          key={index}
          image={cardItem.image}
          title={cardItem.title}
          subTitle={cardItem.subTitle}
          style={props.horizontal ? styles.horizontalMargin : styles.verticalMargin}
          href={cardItem.href}
          width={props.itemWidth}
          imageHeight={props.itemImageHeight}
          horizontal={props.itemHorizontal}
          data={cardItem.data}
          renderImageComponent={props.renderItemImageComponent}
        />
      ))}
    </List>
  );
}

const styles = getStyle({
  verticalMargin: {
    marginTop: 10,
    marginBottom: 10,
  },
  horizontalMargin: {
    marginInlineEnd: 20,
    marginTop: 8,
    marginBottom: 8,
  },
});

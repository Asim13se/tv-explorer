import {ReactElement} from "react";
import List, {ListProps} from "../primitive/List";
import CardItem, {CardItemProps} from "./CardItem";
import getStyle from "../../../utils/getStyle";

export type CardItemListProps = {
  children?: ReactElement[] | string | null,
  containerStyle?: ListProps['containerStyle'],
  cardItemList: CardItemProps[],
  horizontal?: ListProps['horizontal'],
  ListHeader?: ListProps['ListHeader'],
  ListFooter?: ListProps['ListFooter'],
}

export default function CardItemList(props: CardItemListProps): ReactElement {
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
    marginLeft: 10,
    marginRight: 10,
  },
});

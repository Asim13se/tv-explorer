import {CSSProperties, ReactElement} from "react";
import Text from "../primitive/Text";
import Card from "../primitive/Card";
import Image from "../primitive/Image";
import SubText from "./SubText";
import getStyle from "../../../utils/getStyle";

export type CardItemProps<T> = {
  image?: string;
  imageAlt?: string;
  title: string;
  subTitle?: string;
  width?: number | string,
  imageHeight?: number | string,
  style?: CSSProperties,
  href?: string,
  horizontal?: boolean,
  renderImageComponent?: (item: CardItemProps<T>) => ReactElement,
  data: T,
}

export default function CardItem<T>(props: CardItemProps<T>): ReactElement {
  return (
    <Card
      style={props.style}
      width={props.width || 130}>
      <a
        style={props.horizontal ? styles.containerHorizontal : styles.containerVertical}
        href={props.href}>
        {props.renderImageComponent ?
          props.renderImageComponent(props)
          : null}
        {props.image && !props.renderImageComponent ?
          <Image
            src={props.image}
            alt={props.imageAlt || props.title}
            style={styles.image}
            width={'100%'}
            height={props.imageHeight || 170}
          />
          :
          null
        }
        <div style={styles.bottomSectionContainer}>
          <Text style={styles.title}>
            {props.title}
          </Text>
          <SubText style={styles.subText}>
            {props.subTitle || ''}
          </SubText>
        </div>
      </a>
    </Card>
  );
}

const styles = getStyle({
  containerVertical: {
    display: 'flex',
    flexDirection: 'column',
  },
  containerHorizontal: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    borderRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  bottomSectionContainer: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
    marginTop: 8,
    fontSize: 15,
    textAlign: 'start',
    width: '90%',
  },
  subText: {
    marginTop: 5,
    textAlign: 'start',
    maxLines: 1,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    overflowWrap: 'break-word',
    textOverflow: 'ellipsis',
    marginBottom: 12,
  }
});
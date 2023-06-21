import {CSSProperties, ReactElement} from "react";
import Text from "../primitive/Text";
import Card from "../primitive/Card";
import Image from "../primitive/Image";
import SubText from "./SubText";
import getStyle from "../../../utils/getStyle";

export type CardItemProps = {
  image?: string;
  imageAlt?: string;
  title: string;
  subTitle?: string;
  width?: number | string,
  imageHeight?: number | string,
  onClick?: () => void,
  style?: CSSProperties,
}

export default function CardItem(props: CardItemProps): ReactElement {
  return (
    <Card
      style={props.style}
      width={props.width || 120}>
      {props.image ?
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
    </Card>
  );
}

const styles = getStyle({
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
  },
  subText: {
    marginTop: 5,
  }
});
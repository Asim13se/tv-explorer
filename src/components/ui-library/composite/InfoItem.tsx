import {CSSProperties, ReactElement} from "react";
import Text from "../primitive/Text";
import Card from "../primitive/Card";
import Image from "../primitive/Image";
import SubText from "./SubText";
import getStyle from "../../../utils/getStyle";

export type InfoItemProps = {
  image: string;
  imageAlt?: string;
  title: string;
  subTitle?: string;
  width?: number | string,
  imageWidth?: number | string,
  imageHeight?: number | string,
  onClick?: () => void,
  style?: CSSProperties,
}

export default function InfoItem(props: InfoItemProps): ReactElement {
  return (
    <div style={props.style}>
      <div style={styles.row}>
        <Image
          src={props.image}
          alt={props.imageAlt || props.title}
          style={styles.image}
          width={props.imageWidth || 50}
          height={props.imageHeight || 70}
        />
        <div style={styles.textSectionContainer}>
          <Text style={styles.title}>
            {props.title}
          </Text>
          <SubText style={styles.subText}>
            {props.subTitle || ''}
          </SubText>
        </div>
      </div>
    </div>
  );
}

const styles = getStyle({
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    borderRadius: 8,
  },
  textSectionContainer: {
    paddingLeft: 15,
  },
  title: {
    marginTop: 8,
    fontSize: 28,
    fontWeight: 'bold',
  },
  subText: {
    marginTop: 10,
    fontSize: 15,
    textAlign: 'start',
  },
});

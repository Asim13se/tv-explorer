import {ReactElement} from "react";
import Text from "../primitive/Text";
import getStyle from "../../../utils/getStyle";

export type SubTextProps = {
  children?: ReactElement | ReactElement[] | string | null,
  style?: React.CSSProperties,
}

export default function SubText(props: SubTextProps): ReactElement {
  return (
    <Text
      style={{
        ...styles.subText,
        ...(props.style || {}),
    }}
    >
      {props.children}
    </Text>
  );
}

const styles = getStyle({
  subText: {
    fontSize: 12,
    color: '#666666',
  }
});

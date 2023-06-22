import {ReactElement} from "react";
import Text from "../primitive/Text";
import getStyle from "../../../utils/getStyle";

export type ButtonProps = {
  label: string;
  borderRadius?: number;
  style?: React.CSSProperties;
  height?: number | string,
  width?: number | string,
  onClick?: () => void,
  withBorders?: boolean,
  href?: string,
}

export default function Button(props: ButtonProps): ReactElement {
  return (
    <a href={props.href}>
      <button
        className="Button"
        onClick={props.onClick}
        style={{
          height: props.height,
          width: props.width,
          ...styles.button,
          borderRadius: props.borderRadius || 10,
          ...(props.withBorders ? {
            border: '1px solid #400014',
          } : {}),
          ...props.style,
        }}
      >
        <Text
          style={styles.label}
        >
          {props.label}
        </Text>
      </button>
    </a>
  );
}

const styles = getStyle({
  button: {
    backgroundColor: '#FBDBDE',
    paddingInlineStart: 20,
    paddingInlineEnd: 20,
    paddingTop: 13,
    paddingBottom: 13,
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  },
  label: {
    color: '#400014',
    fontSize: 15,
  }
});




import {ReactElement} from "react";
import Text from "../primitive/Text";

export type ButtonProps = {
  label: string;
  borderRadius?: number;
  style?: React.CSSProperties;
  height?: number | string,
  width?: number | string,
  onClick?: () => void,
}

export default function Button(props: ButtonProps): ReactElement {
  return (
    <button
      className="Button"
      onClick={props.onClick}
      style={{
        height: props.height,
        width: props.width,
        ...props.style,
      }}
    >
      <Text>
        {props.label}
      </Text>
    </button>
  );
}

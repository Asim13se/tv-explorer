import {ReactElement} from "react";

export type TextProps = {
  children?: ReactElement | ReactElement[] | string | null,
  style?: React.CSSProperties,
}

export default function Text(props: TextProps): ReactElement {
  return (
    <p
      className="Text"
      style={props.style}
    >
      {props.children}
    </p>
  );
}

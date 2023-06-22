import {ReactElement} from "react";

export type CardProps = {
  children: ReactElement | (ReactElement | null)[];
  borderRadius?: number;
  style?: React.CSSProperties;
  height?: number | string,
  width?: number | string,
}

export default function Card(props: CardProps): ReactElement {
  return (
    <div
      className="Card"
      style={{
        height: props.height,
        width: props.width,
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
}
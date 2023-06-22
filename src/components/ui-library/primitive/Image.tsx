import {CSSProperties, ReactElement} from "react";

export type ImageProps = {
  src: string;
  alt?: string,
  style?: CSSProperties,
  height?: number | string,
  width?: number | string,
}

export default function Image(props: ImageProps): ReactElement {
  return (
    <img
      className="Image"
      style={{
        height: props.height || 'auto',
        width: props.width || 'auto',
        ...props.style,
      }}
      src={props.src}
      alt={props.alt}
    />
  )
}

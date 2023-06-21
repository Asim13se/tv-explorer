import {ReactElement} from "react";

export type ListProps = {
  children?: ReactElement[] | string | null,
  style?: React.CSSProperties,
  horizontal?: boolean,
}

// Optimization can be applied later on to this component
export default function List(props: ListProps): ReactElement {
  return (
    <div
      className="List"
      style={{
        display: 'flex',
        flexDirection: props.horizontal ? 'row' : 'column',
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
}

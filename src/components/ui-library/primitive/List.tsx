import {ReactElement} from "react";

export type ListProps = {
  children?: ReactElement[] | string | null,
  containerStyle?: React.CSSProperties,
  listStyle?: React.CSSProperties,
  horizontal?: boolean,
  ListHeader?: ReactElement | null,
  ListFooter?: ReactElement | null,
}

// Optimization can be applied later on to this component
export default function List(props: ListProps): ReactElement {
  return (
    <div
      className="List"
      style={props.containerStyle}
    >
      {props.ListHeader}
      <div
        style={{
          display: 'flex',
          flexDirection: props.horizontal ? 'row' : 'column',
          flexWrap: 'wrap',
          ...(props.listStyle || {}),
        }}
      >
        {props.children}
      </div>
      {props.ListFooter}
    </div>
  );
}

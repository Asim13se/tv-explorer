import {ReactElement} from "react";
import Text from "../primitive/Text";
import getStyle from "../../../utils/getStyle";

export type ListHeader1Props = {
  children?: ReactElement | ReactElement[] | string | null,
  style?: React.CSSProperties,
  label?: string,
  href?: string,
}

export default function ListHeader1(props: ListHeader1Props): ReactElement {
  return (
    <a
      style={{
        ...styles.main,
        ...(props.style || {}),
      }}
      href={props.href}
    >
      <Text style={styles.label}>
        {props.label}
      </Text>
      <Text style={styles.icon}>
        {'➡️'}
      </Text>
    </a>
  );
}

const styles = getStyle({
  main: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
  },
  label: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  icon: {
    marginInlineStart: 8,
    fontSize: 18,
  }
})

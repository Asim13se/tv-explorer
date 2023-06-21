import {ReactElement} from "react";
import Text from "../primitive/Text";
import getStyle from "../../../utils/getStyle";
import List from "../primitive/List";
import Button from "../primitive/Button";

export type Tab = {
  label: string,
  onClick?: () => void,
}

export type TabsProps = {
  children?: ReactElement | ReactElement[] | string | null,
  style?: React.CSSProperties,
  renderTab?: (tab: Tab, index: number) => ReactElement,
  tabList: Tab[],
}

export default function Tabs(props: TabsProps): ReactElement {
  return (
    <List
      horizontal
    >
      {props.tabList.map((tab, index) => {
        if (props.renderTab) {
          return props.renderTab(tab, index);
        }
        return (
          <Button
            label={tab.label}
            onClick={tab.onClick}
            key={index}
          />
        )
      })}
    </List>
  );
}

const styles = getStyle({
  subText: {
    fontSize: 12,
    color: '#666666',
  }
});

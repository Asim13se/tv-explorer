import React, {ReactElement, useState} from "react";
import getStyle from "../../../utils/getStyle";
import List from "../primitive/List";
import Button from "../primitive/Button";
import {OnTabChange} from "../../../types/OnTabChange";

export type Tab<T> = {
  id: T,
  label: string,
  href?: string,
}

export type TabsProps<T> = {
  children?: ReactElement | ReactElement[] | string | null,
  style?: React.CSSProperties,
  renderTab?: (tab: Tab<T>, index: number) => ReactElement,
  tabList: Tab<T>[],
  onTabChange?: OnTabChange<T>,
}

export default function Tabs<T>(props: TabsProps<T>): ReactElement {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <List
      horizontal
    >
      {props.tabList.map((tab, index) => {
        const isSelected = index === activeTab;
        const handleClick = () => {
          setActiveTab(index);
          if (props.onTabChange) {
            props.onTabChange(tab, index);
          }
        }
        if (props.renderTab) {
          return props.renderTab(tab, index);
        }
        return (
          <Button
            label={tab.label}
            onClick={handleClick}
            key={index}
            style={styles.button}
            borderRadius={20}
            withBorders={isSelected}
          />
        )
      })}
    </List>
  );
}

const styles = getStyle({
  button: {
    marginBottom: 10,
    marginInlineEnd: 10,
  }
});

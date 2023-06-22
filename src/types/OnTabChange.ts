import {Tab} from "../components/ui-library/composite/Tabs";

export type OnTabChange<T> = (tab: Tab<T>, index: number) => void;

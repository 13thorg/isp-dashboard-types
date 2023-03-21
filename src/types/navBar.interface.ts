export type NavMenuType = {
  title: string;
  icon: string;
  action: NavMenuActionEnum;
  alerts: number;
  value: string;
  children?: NavMenuType[];
};

export enum NavMenuActionEnum {
  PATH = "PATH",
  DROPDOWN = "DROPDOWN",
  OPEN = "OPEN",
}

export type NavMenuType = {
  title: string;
  icon: string;
  actionType: NavMenuActionEnum;
  children?: NavMenuType[];
};

export enum NavMenuActionEnum {
  PATH = "PATH",
  DROPDOWN = "DROPDOWN",
  OPEN = "OPEN",
}

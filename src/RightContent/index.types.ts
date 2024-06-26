export interface ServiceProp {
  externalDomain: string;
  serviceName: string;
  onClick?: () => void;
  Icon?: HTMLElement;
}
export interface FormatMessageProp {
  ({ id }: { id: string }): string;
}

export interface UserlogoutProps {
  (): Promise<boolean | void>;
}

export type DropdownProps = {
  label: string;
  onClick: () => void;
  Icon?: JSX.Element;
};

export type avatarHiddenListProp = 'setting' | 'logout';

export type exploreHiddenListProp = 'home';

export type infoHiddenListProp = 'contact';

export interface ServiceProp {
  externalDomain: string;
  serviceName: string;
  onClick?: () => void;
}
export interface FormatMessageProp {
  ({ id }: { id: string }): string;
}

export interface UserlogoutProps {
  (): Promise<void>;
}

import {ReactNode} from "react";

export interface registerType {
  title?: string;
  subtitle?: ReactNode | ReactNode[];
  subtext?: ReactNode | ReactNode[];
}

export interface loginType {
  title?: string;
  subtitle?: ReactNode | ReactNode[];
  subtext?: ReactNode | ReactNode[];
}

export interface signInType {
  title?: string;
}

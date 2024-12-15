import { ComponentType, ReactNode } from "react";

export default interface SelectableOption {
  label: string;
  value: string;
  icon?: ComponentType<{ className?: string }> | ReactNode;
  count?: string;
}

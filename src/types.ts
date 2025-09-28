export type ComponentType =
  | "Button"
  | "Input"
  | "Checkbox"
  | "Switch"
  | "DropDownList"
  | "MultiSelect"
  | "DatePicker"
  | "StackLayout"
  | "GridLayout"
  | "Card"
  | "PanelBar"
  | "AppBar"
  | "Notification"
  | "Popup"
  | "Tooltip"
  | "CustomText"
  | "CustomImage";

export interface ComponentSchema {
  id: string;
  type: ComponentType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: Record<string, any>;
  children?: ComponentSchema[];
}

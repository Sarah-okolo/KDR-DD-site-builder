import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import { Input, Checkbox, Switch } from "@progress/kendo-react-inputs";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import { DropDownList, MultiSelect } from "@progress/kendo-react-dropdowns";
import {
  StackLayout,
  GridLayout,
  Card,
  PanelBar,
  AppBar,
} from "@progress/kendo-react-layout";
import { Notification } from "@progress/kendo-react-notification";
import { Popup } from "@progress/kendo-react-popup";
import { Tooltip } from "@progress/kendo-react-tooltip";
import CustomText from "../components/wrappers/customText";
import CustomImage from "../components/wrappers/customImage";
import { Structure } from "../components/structure";

export type EditableProp = {
  name: string;
  type: "text" | "image" | "select" | "boolean" | "number";
  options?: string[];
};

export type ComponentMeta = {
  displayName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultProps: Record<string, any>;
  editableProps: EditableProp[];
};

export const componentsMeta: Record<string, ComponentMeta> = {
  structure: {
    displayName: "+ Add structure",
    component: Structure,
    defaultProps: {
      locked: false,
      size: { width: 600, height: 300 }, // ✅ give both width + height defaults
    },
    editableProps: [
      { name: "locked", type: "boolean" },
      { name: "size.height", type: "number" }, // ✅ map to size.height
      { name: "size.width", type: "number" }, // ✅ map to size.width
    ],
  },
  customText: {
    displayName: "Text",
    component: CustomText,
    defaultProps: { text: "Edit me", align: "left", size: "md" },
    editableProps: [
      { name: "text", type: "text" },
      { name: "align", type: "select", options: ["left", "center", "right"] },
      { name: "size", type: "select", options: ["sm", "md", "lg"] },
    ],
  },
  customImage: {
    displayName: "Image",
    component: CustomImage,
    defaultProps: {
      src: "https://via.placeholder.com/300x150",
      alt: "placeholder",
      width: "100%",
      height: "auto",
    },
    editableProps: [
      { name: "src", type: "image" },
      { name: "alt", type: "text" },
      { name: "width", type: "text" },
      { name: "height", type: "text" },
    ],
  },
  button: {
    displayName: "Button",
    component: Button,
    defaultProps: { children: "Click me" },
    editableProps: [{ name: "children", type: "text" }],
  },
  input: {
    displayName: "Input",
    component: Input,
    defaultProps: { placeholder: "Enter text" },
    editableProps: [{ name: "placeholder", type: "text" }],
  },
  checkbox: {
    displayName: "Checkbox",
    component: Checkbox,
    defaultProps: { label: "Check me" },
    editableProps: [{ name: "label", type: "text" }],
  },
  switch: {
    displayName: "Switch",
    component: Switch,
    defaultProps: { checked: false },
    editableProps: [{ name: "checked", type: "boolean" }],
  },
  datePicker: {
    displayName: "DatePicker",
    component: DatePicker,
    defaultProps: { value: null },
    editableProps: [],
  },
  dropDownList: {
    displayName: "DropDownList",
    component: DropDownList,
    defaultProps: { data: ["Option 1", "Option 2"], defaultValue: "Option 1" },
    editableProps: [{ name: "defaultValue", type: "text" }],
  },
  multiSelect: {
    displayName: "MultiSelect",
    component: MultiSelect,
    defaultProps: { data: ["Option A", "Option B"], defaultValue: [] },
    editableProps: [],
  },
  stackLayout: {
    displayName: "StackLayout",
    component: StackLayout,
    defaultProps: { orientation: "vertical", gap: 8 },
    editableProps: [
      {
        name: "orientation",
        type: "select",
        options: ["vertical", "horizontal"],
      },
    ],
  },
  gridLayout: {
    displayName: "GridLayout",
    component: GridLayout,
    defaultProps: { columns: 3, gap: 8 },
    editableProps: [{ name: "columns", type: "number" }],
  },
  card: {
    displayName: "Card",
    component: Card,
    defaultProps: { children: null },
    editableProps: [],
  },
  panelBar: {
    displayName: "PanelBar",
    component: PanelBar,
    defaultProps: { children: null },
    editableProps: [],
  },
  appBar: {
    displayName: "AppBar",
    component: AppBar,
    defaultProps: { children: null },
    editableProps: [],
  },
  Notification: {
    displayName: "Notification",
    component: Notification,
    defaultProps: { text: "Hello" },
    editableProps: [{ name: "text", type: "text" }],
  },
  Popup: {
    displayName: "Popup",
    component: Popup,
    defaultProps: { children: null },
    editableProps: [],
  },
  Tooltip: {
    displayName: "Tooltip",
    component: Tooltip,
    defaultProps: { title: "Tooltip" },
    editableProps: [{ name: "title", type: "text" }],
  },
};

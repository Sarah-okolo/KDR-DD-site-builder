import { create } from "zustand";

export type ComponentData = {
  id: string;
  type: string; // "button" | "text" | "image" | "structure" | ...
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: Record<string, any>;
  children?: ComponentData[]; // structures can hold children
  locked?: boolean;
  size?: { height?: number };
  label?: string;
};

type EditorState = {
  components: ComponentData[];
  selectedId: string | null;
  addComponent: (component: ComponentData, parentId?: string) => void;
  deleteComponent: (id: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateComponentProps: (id: string, newProps: Record<string, any>) => void;
  setState: (state: Partial<EditorState>) => void;
  selectComponent: (id: string | null) => void;
};

export const useEditorStore = create<EditorState>((set) => ({
  components: [],
  selectedId: null,

  addComponent: (component, parentId) =>
    set((state) => {
      if (!parentId) {
        // add to root
        return { components: [...state.components, component] };
      }

      // recursive helper to insert into correct parent
      const insertIntoParent = (items: ComponentData[]): ComponentData[] =>
        items.map((item) => {
          if (item.id === parentId) {
            return {
              ...item,
              children: [...(item.children || []), component],
            };
          }
          if (item.children) {
            return {
              ...item,
              children: insertIntoParent(item.children),
            };
          }
          return item;
        });

      return { components: insertIntoParent(state.components) };
    }),

  deleteComponent: (id: string) =>
    set((state) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const removeRecursively = (items: any[]): any[] =>
        items.filter((item) => {
          if (item.id === id) return false;
          if (item.children) {
            item.children = removeRecursively(item.children);
          }
          return true;
        });

      return { components: removeRecursively(state.components) };
    }),

  updateComponentProps: (id, newProps) =>
    set((state) => {
      const updateRecursively = (items: ComponentData[]): ComponentData[] =>
        items.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              props: {
                ...item.props,
                ...newProps,
              },
            };
          }
          if (item.children) {
            return {
              ...item,
              children: updateRecursively(item.children),
            };
          }
          return item;
        });

      return { components: updateRecursively(state.components) };
    }),

  setState: (newState) => set(newState),

  selectComponent: (id) => set({ selectedId: id }),
}));

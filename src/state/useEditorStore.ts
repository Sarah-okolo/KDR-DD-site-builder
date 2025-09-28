// src/state/useEditorStore.ts
import { create } from "zustand";

export type ComponentSchema = {
  id: string;
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: Record<string, any>;
  children?: ComponentSchema[];
};

interface EditorState {
  components: ComponentSchema[];
  selectedId: string | null;
  addComponent: (component: ComponentSchema) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateComponent: (id: string, newProps: Record<string, any>) => void;
  selectComponent: (id: string | null) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  components: [],
  selectedId: null,
  addComponent: (component) =>
    set((state) => ({ components: [...state.components, component] })),
  updateComponent: (id, newProps) =>
    set((state) => ({
      components: state.components.map((c) =>
        c.id === id ? { ...c, props: { ...c.props, ...newProps } } : c
      ),
    })),
  selectComponent: (id) => set({ selectedId: id }),
}));

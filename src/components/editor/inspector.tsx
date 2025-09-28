import { useEditorStore } from "../../state/useEditorStore";

export function Inspector() {
  const components = useEditorStore((state) => state.components);
  const selectedId = useEditorStore((state) => state.selectedId);
  const setComponents = useEditorStore((state) => state.setState);
  const deleteComponent = useEditorStore((state) => state.deleteComponent);
  const selectComponent = useEditorStore((state) => state.selectComponent);

  // Helper: find component in tree
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const findComponent = (items: any[], id: string): any | null => {
    for (const item of items) {
      if (item.id === id) return item;
      if (item.children) {
        const found = findComponent(item.children, id);
        if (found) return found;
      }
    }
    return null;
  };

  const selected = selectedId ? findComponent(components, selectedId) : null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateComponent = (updates: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updateTree = (items: any[]): any[] =>
      items.map((item) => {
        if (item.id === selectedId) {
          return { ...item, ...updates };
        }
        if (item.children) {
          return { ...item, children: updateTree(item.children) };
        }
        return item;
      });
    setComponents({ components: updateTree(components) });
  };

  return (
    <div className="w-64 border-l bg-gray-50 p-4 flex flex-col">
      <h2 className="text-xl font-extrabold bg-gradient-primary bg-clip-text text-transparent m-4">
        Inspector
      </h2>

      {!selected && <p className="text-gray-500">Select a component to edit</p>}

      {selected?.type === "structure" && (
        <div className="space-y-3 flex-1">
          <label className="block">
            <span className="text-sm font-medium">Label</span>
            <input
              type="text"
              defaultValue={selected.label || "Section"}
              onChange={(e) => updateComponent({ label: e.target.value })}
              className="mt-1 w-full rounded border px-2 py-1"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Height (px)</span>
            <input
              type="number"
              defaultValue={selected.size?.height || 300}
              onChange={(e) =>
                updateComponent({
                  size: { ...selected.size, height: Number(e.target.value) },
                })
              }
              className="mt-1 w-full rounded border px-2 py-1"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Width (px)</span>
            <input
              type="number"
              defaultValue={selected.size?.width || 300}
              onChange={(e) =>
                updateComponent({
                  size: { ...selected.size, width: Number(e.target.value) },
                })
              }
              className="mt-1 w-full rounded border px-2 py-1"
            />
          </label>
          {/* 
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selected.locked || false}
              onChange={(e) => updateComponent({ locked: e.target.checked })}
            />
            <span className="text-sm">Lock</span>
          </label> */}
        </div>
      )}

      {selected?.type === "customText" && (
        <label className="block flex-1">
          <span className="text-sm font-medium">Text Content</span>
          <textarea
            defaultValue={selected.props?.text || ""}
            onChange={(e) =>
              updateComponent({
                props: { ...selected.props, text: e.target.value },
              })
            }
            className="mt-1 w-full rounded border px-2 py-1"
          />
        </label>
      )}

      {selected?.type === "button" && (
        <label className="block flex-1">
          <span className="text-sm font-medium">Button Label</span>
          <input
            type="text"
            defaultValue={selected.props?.text || ""}
            onChange={(e) =>
              updateComponent({
                props: { ...selected.props, text: e.target.value },
              })
            }
            className="mt-1 w-full rounded border px-2 py-1"
          />
        </label>
      )}

      {selected?.type === "customImage" && (
        <label className="block flex-1">
          <span className="text-sm font-medium">Image URL</span>
          <input
            type="text"
            defaultValue={selected.props?.src || ""}
            onChange={(e) =>
              updateComponent({
                props: { ...selected.props, src: e.target.value },
              })
            }
            className="mt-1 w-full rounded border px-2 py-1"
          />
        </label>
      )}

      {/* Delete Button */}
      {selected && (
        <button
          onClick={() => {
            deleteComponent(selected.id);
            selectComponent(null);
          }}
          className="mt-8 px-3 py-2 text-xs w-max mx-auto cursor-pointer bg-destructive/70 text-white rounded-md hover:bg-destructive/40"
        >
          Delete Item
        </button>
      )}
    </div>
  );
}

import { useEditorStore } from "../../state/useEditorStore";
import { componentsMeta } from "../../utils/componentMeta";

const Inspector = () => {
  const { components, selectedId, updateComponent } = useEditorStore();

  if (!selectedId) {
    return (
      <div className="p-4 text-muted-foreground">
        Select a component to edit
      </div>
    );
  }

  const comp = components.find((c) => c.id === selectedId);
  if (!comp) return null;

  const meta = componentsMeta[comp.type];

  return (
    <div className="h-full flex flex-col bg-sidebar-background text-sidebar-foreground">
      <h2 className="p-4 font-semibold border-b border-sidebar-border">
        Inspector
      </h2>
      <div className="flex-1 p-4 overflow-auto custom-scrollbar space-y-4">
        {meta.editableProps.map((prop) => (
          <div key={prop.name} className="flex flex-col gap-1">
            <label className="text-sm font-medium">{prop.name}</label>
            {prop.type === "text" && (
              <input
                type="text"
                value={comp.props[prop.name] || ""}
                onChange={(e) =>
                  updateComponent(comp.id, { [prop.name]: e.target.value })
                }
                className="border border-input rounded-md px-2 py-1 text-sm"
              />
            )}
            {prop.type === "image" && (
              <input
                type="text"
                value={comp.props[prop.name] || ""}
                placeholder="Image URL"
                onChange={(e) =>
                  updateComponent(comp.id, { [prop.name]: e.target.value })
                }
                className="border border-input rounded-md px-2 py-1 text-sm"
              />
            )}
            {prop.type === "select" && (
              <select
                value={comp.props[prop.name] || ""}
                onChange={(e) =>
                  updateComponent(comp.id, { [prop.name]: e.target.value })
                }
                className="border border-input rounded-md px-2 py-1 text-sm"
              >
                {prop.options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inspector;

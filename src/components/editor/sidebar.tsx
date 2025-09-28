import { componentsMeta } from "../../utils/componentMeta";

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col bg-sidebar-background text-sidebar-foreground">
      <h2 className="p-4 font-semibold border-b border-sidebar-border">
        Components
      </h2>
      <div className="flex-1 overflow-auto custom-scrollbar">
        {Object.entries(componentsMeta).map(([key, meta]) => (
          <div
            key={key}
            draggable
            onDragStart={(e) => e.dataTransfer.setData("component-type", key)}
            className="p-3 cursor-grab hover:bg-sidebar-accent transition-colors border-b border-sidebar-border"
          >
            {meta.displayName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

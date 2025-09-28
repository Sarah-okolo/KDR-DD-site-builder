import { componentsMeta } from "../../utils/componentMeta";

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col bg-sidebar-background text-sidebar-foreground">
      <h2 className="text-xl font-extrabold bg-gradient-primary bg-clip-text text-transparent m-4">
        Components
      </h2>
      <div className="flex-1 overflow-auto custom-scrollbar">
        {Object.entries(componentsMeta).map(([key, meta]) => (
          <div
            key={key}
            draggable
            onDragStart={(e) => e.dataTransfer.setData("component-type", key)}
            className={`py-3 px-5 cursor-grab  rounded-md transition-colors border-b border-sidebar-border ${
              meta.displayName === "+ Add structure"
                ? "text-center border-3 border-dashed border-gray-700 m-4 hover:bg-gray-200"
                : "hover:bg-gradient-primary"
            }`}
          >
            {meta.displayName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

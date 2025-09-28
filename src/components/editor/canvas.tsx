import { useEditorStore } from "../../state/useEditorStore";
import { componentsMeta } from "../../utils/componentMeta";

const Canvas = () => {
  const { components, addComponent, selectComponent, selectedId } =
    useEditorStore();

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const type = e.dataTransfer.getData("component-type");
    if (!type) return;

    const meta = componentsMeta[type];
    if (!meta) return;

    const newComponent = {
      id: Date.now().toString(),
      type,
      props: { ...meta.defaultProps },
    };

    addComponent(newComponent);
  };

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-start p-6 bg-muted rounded-lg border border-border glass"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {components.length === 0 ? (
        <p className="text-muted-foreground italic">
          Drag and drop components here
        </p>
      ) : (
        components.map((comp) => {
          const meta = componentsMeta[comp.type];
          const Comp = meta.component;
          return (
            <div
              key={comp.id}
              onClick={() => selectComponent(comp.id)}
              className={`p-2 my-2 rounded-lg cursor-pointer ${
                selectedId === comp.id
                  ? "ring-2 ring-primary ring-offset-2"
                  : "hover:bg-accent"
              }`}
            >
              <Comp {...comp.props} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Canvas;

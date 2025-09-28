import { useEditorStore } from "../../state/useEditorStore";
import { componentsMeta } from "../../utils/componentMeta";
import { nanoid } from "nanoid";
import { Rnd } from "react-rnd";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function RenderComponent({ component }: { component: any }) {
  const selectComponent = useEditorStore((state) => state.selectComponent);
  const selectedId = useEditorStore((state) => state.selectedId);
  const updateComponentProps = useEditorStore(
    (state) => state.updateComponentProps
  );

  const isSelected = selectedId === component.id;

  const meta = componentsMeta[component.type];
  if (!meta) return null;

  const Comp = meta.component;

  const width = component.props?.size?.width || "auto";
  const height = component.props?.size?.height || "auto";
  const x = component.props?.x || 0;
  const y = component.props?.y || 0;

  return (
    <Rnd
      default={{
        x,
        y,
        width,
        height,
      }}
      bounds="parent"
      enableResizing={component.type === "structure"} // only structures resizable
      disableDragging={component.locked}
      onDragStop={(_, data) => {
        updateComponentProps(component.id, { x: data.x, y: data.y });
      }}
      onResizeStop={(_, __, ref, ___, pos) => {
        updateComponentProps(component.id, {
          size: {
            width: ref.offsetWidth,
            height: ref.offsetHeight,
          },
          x: pos.x,
          y: pos.y,
        });
      }}
      className={`my-2 ${isSelected ? "border-2 border-primary" : ""}`}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onClick={(e: any) => {
        e.stopPropagation();
        selectComponent(component.id);
      }}
    >
      <Comp {...meta.defaultProps} {...component.props}>
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          component.children?.map((child: any) => (
            <RenderComponent key={child.id} component={child} />
          ))
        }
      </Comp>
    </Rnd>
  );
}

export function Canvas() {
  const components = useEditorStore((state) => state.components);
  const selectComponent = useEditorStore((state) => state.selectComponent);
  const addComponent = useEditorStore((state) => state.addComponent);

  return (
    <div
      className="w-full h-full min-h-[500px] bg-white border border-dashed border-gray-300 rounded-lg overflow-auto custom-scrollbar"
      onClick={() => selectComponent(null)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        const type = e.dataTransfer.getData("component-type");

        if (type) {
          const meta = componentsMeta[type];
          if (!meta) return;

          addComponent({
            id: nanoid(),
            type,
            props: {
              ...meta.defaultProps,
              x: 0,
              y: 0,
              size: meta.defaultProps?.size || { width: 300, height: 200 },
            },
            children: [],
          });
        }
      }}
    >
      {components.length === 0 ? (
        <div className="text-gray-500 italic text-center mt-10">
          Add structures here and drag components into structures to start
          building
        </div>
      ) : (
        components.map((c) => <RenderComponent key={c.id} component={c} />)
      )}
    </div>
  );
}

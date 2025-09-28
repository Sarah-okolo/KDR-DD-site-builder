import { Rnd } from "react-rnd";
import { useState } from "react";
import { Lock, LockOpen } from "lucide-react";

type StructureProps = {
  id: string;
  locked?: boolean;
  size?: { width?: number | string; height?: number }; // ✅ allow width too
  children?: React.ReactNode;
};

export function Structure({
  id,
  locked = false,
  size,
  children,
}: StructureProps) {
  // use initial width/height from size if provided
  const [height, setHeight] = useState(size?.height || 300);
  const [width, setWidth] = useState(size?.width || "100%");
  const [isLocked, setIsLocked] = useState(locked);

  return (
    <div className="relative my-4 border-2 border-dashed border-gray-400 rounded-md">
      {/* Label + Lock Toggle */}
      <div className="absolute top-1 left-2 flex items-center gap-2 text-sm bg-white px-2 py-1 rounded shadow z-10">
        <span className="font-medium text-xs">Section: {id}</span>
        <button
          className="text-xs px-2 py-1 bg-gray-200 rounded"
          onClick={() => setIsLocked(!isLocked)}
        >
          {isLocked ? <Lock className="size-3" /> : <LockOpen className="size-3" />}
        </button>
      </div>

      {/* Resizable Container */}
      <Rnd
        disableDragging
        enableResizing={!isLocked}
        size={{ width, height }}
        onResizeStop={(_, __, ref) => {
          setHeight(ref.offsetHeight);
          setWidth(ref.offsetWidth);
        }}
        className="bg-gray-50 flex flex-col items-center justify-start"
      >
        <div className="w-full h-full p-4 flex flex-col gap-2">
          {children && children}
          {!children && (
            <div className="text-gray-400 italic text-center">
              Drop components here
            </div>
          )}
        </div>
      </Rnd>
    </div>
  );
}

import Sidebar from "../components/editor/sidebar";
import { Canvas } from "../components/editor/canvas";
import { Inspector } from "../components/editor/inspector";

function BuildCanvas() {
  return (
    <div className="editor-root">
      <div className="flex h-screen bg-background text-foreground">
        {/* Sidebar */}
        <div className="w-64 border-r border-border glass my-8 mx-5 rounded-md shadow-md">
          <Sidebar />
        </div>

        {/* Canvas */}
        <div className="flex-1 p-4 overflow-auto custom-scrollbar">
          <Canvas />
        </div>

        {/* Inspector */}
        <div className="w-72 border-l border-border bg-card text-card-foreground">
          <Inspector />
        </div>
      </div>
    </div>
  );
}

export default BuildCanvas;

import FolderStructure from "@/components/folder-structure";
import Terminal from "@/components/terminal";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import PrivateRoute from "@/components/PrivateRoute";

export default function Editor() {
  return (
    <PrivateRoute>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={15}>
          <FolderStructure />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={60}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={75}>
              <div>
                <span className="font-semibold">Code Editor</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={25}>
              <Terminal />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={25}>
          <div>
            <span className="font-semibold">Browser Preview</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </PrivateRoute>
  );
}

import Terminal from "@/components/terminal";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export function Editor() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={15}>
        <div>
          <span className="font-semibold">File</span>
        </div>
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
            <Terminal socketUrl="ws://localhost:18764/ws" />
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
  );
}

"use client";
import { useEffect, useRef } from "react";
import { Terminal as XTerm } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";

export default function Terminal() {
  const socketURL = process.env.NEXT_PUBLIC_SOCKET_URL;
  const terminalRef = useRef(null);
  const fitAddonRef = useRef(null);
  const socketRef = useRef(null);

  useEffect(() => {
    const term = new XTerm({
      cursorBlink: true,
      fontSize: 14,
      theme: {
        background: "#0d0d0d",
        foreground: "#ffffff",
      },
    });

    fitAddonRef.current = new FitAddon();
    term.loadAddon(fitAddonRef.current);

    if (terminalRef.current) {
      term.open(terminalRef.current);
      fitAddonRef.current.fit();
    }

    // Connect to WebSocket server

    socketRef.current = new WebSocket(socketUrl);
    console.log("WebSocket: connecting to", socketUrl);

    socketRef.current.onmessage = (event) => {
      term.write(event.data);
    };

    socketRef.current.onerror = (error) => {
      console.error("WebSocket: error", error);
    };

    term.onData((data) => {
      socketRef.current?.send(data);
    });

    // Handle resize
    const resizeObserver = new ResizeObserver(() => {
      fitAddonRef.current?.fit();
    });
    if (terminalRef.current) {
      resizeObserver.observe(terminalRef.current);
    }

    return () => {
      resizeObserver.disconnect();
      socketRef.current?.close();
      term.dispose();
    };
  }, [socketUrl]);

  return (
    <div
      ref={terminalRef}
      className="w-full h-full bg-black rounded"
      style={{ overflow: "hidden" }}
    />
  );
}

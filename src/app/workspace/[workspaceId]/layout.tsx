'use client'

import React from "react";
import Toolbar from "./Toolbar";
import Sidebar from "./Sidebar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import WorkspaceSidebar from "./WorkspaceSidebar";


interface WorkspaceIdLayoutProps {
    children: React.ReactNode
}

export default function WorkspaceLayout({ children }: WorkspaceIdLayoutProps) {

    return (
        <section className="h-full">
            <Toolbar />
            <div className="flex h-[calc(100vh-40px)]">
                <Sidebar />
                <ResizablePanelGroup
                    direction="horizontal"
                    autoSaveId="workspace-layout"
                >
                    <ResizablePanel
                        defaultSize={20}
                        minSize={11}
                        className="bg-[#5e2c5f]"
                    >
                        <WorkspaceSidebar />
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel
                        minSize={20}
                    >
                        {children}
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </section>
    );
}
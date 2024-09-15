'use client'

import React from "react";
import Toolbar from "./Toolbar";
import Sidebar from "./Sidebar";


interface WorkspaceIdLayoutProps {
    children: React.ReactNode
}

export default function WorkspaceLayout({ children }: WorkspaceIdLayoutProps) {

    return (
        <section className="h-full">
            <Toolbar />
            <div className="flex h-[calc(100vh-40px)]">
                <Sidebar />
                {children}
            </div>
        </section>
    );
}
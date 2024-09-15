'use client'

import React from "react";
import Toolbar from "./Toolbar";


interface WorkspaceIdLayoutProps {
    children: React.ReactNode
}

export default function WorkspaceLayout({ children }: WorkspaceIdLayoutProps) {

    return (
        <section className="h-full">
            <Toolbar />
            {children}
        </section>
    );
}
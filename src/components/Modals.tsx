'use client'

import CreateWorkspaceModal from "@/features/workspaces/components/createWorkspaceModal"
import { useEffect, useState } from "react";


interface ModalsProps { }

export default function Modals({ }: ModalsProps) {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) return null;

    return (
        <>
            <CreateWorkspaceModal />
        </>
    );
}
'use client'

import { useWorkspaceId } from "@/hooks/use-workspace-id";


interface WorkspaceIdPageProps {
    params: {
        workspaceId: string
    };
};

export default function WorkspaceIdPage({ }: WorkspaceIdPageProps) {
    const workspaceId = useWorkspaceId();
    return (
        <>
            ID: {workspaceId}
        </>
    );
}
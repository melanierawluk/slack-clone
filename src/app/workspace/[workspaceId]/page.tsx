'use client'

import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";


interface WorkspaceIdPageProps {
    params: {
        workspaceId: string
    };
};

export default function WorkspaceIdPage({ }: WorkspaceIdPageProps) {
    const workspaceId = useWorkspaceId();
    const { data } = useGetWorkspace({ id: workspaceId });
    return (
        <>
            Data: {JSON.stringify(data)}
        </>
    );
}
import { useCurrentMember } from "@/features/members/api/use-current-member";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import WorkspaceHeader from "./WorkspaceHeader";

import { AlertTriangle, Loader, MessageSquareTextIcon, SendHorizonalIcon } from "lucide-react";
import SidebarItem from "./SidebarItem";


interface WorkspaceSidebarProps { }

export default function WorkspaceSidebar({ }: WorkspaceSidebarProps) {
    const workspaceId = useWorkspaceId();

    const { data: member, isLoading: memberLoading } = useCurrentMember({ workspaceId });
    const { data: workspace, isLoading: workspaceLoading } = useGetWorkspace({ id: workspaceId });

    if (workspaceLoading || memberLoading) {
        return (
            <div className="flex flex-col bg-[#5e2c5f] h-full items-center justify-center">
                <Loader className="size-5 automate-spin text-white" />
            </div>
        )
    }
    if (!workspace || !member) {
        return (
            <div className="flex flex-col gap-y-2 bg-[#5e2c5f] h-full items-center justify-center">
                <AlertTriangle className="size-5 text-white" />
                <p className="text-white text-sm">
                    Workspace not found
                </p>
            </div>
        )
    }

    return (
        <div className="flex flex-col bg-[#5e2c5f] h-full">
            <WorkspaceHeader workspace={workspace} isAdmin={member.role === "admin"} />
            <div className="flex flex-col px-2 mt-3">
                <SidebarItem
                    label="Threads"
                    icon={MessageSquareTextIcon}
                    id="threads"
                />
                <SidebarItem
                    label="Drafts & Sent"
                    icon={SendHorizonalIcon}
                    id="drafts"
                />

            </div>
        </div>

    );
}
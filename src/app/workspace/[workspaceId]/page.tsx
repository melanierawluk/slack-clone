

interface WorkspaceIdPageProps {
    params: {
        workspaceId: string
    };
};

export default function WorkspaceIdPage({ params }: WorkspaceIdPageProps) {

    return (
        <>
            ID: {params.workspaceId}
        </>
    );
}
import { Dialog, DialogContent, DialogHeader, DialogTitle, } from "@/components/ui/dialog";
import { useCreateChanneleModal } from "../store/use-create-channel-modal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCreateChannel } from "../api/use-create-channel";
import { useWorkspaceId } from "@/hooks/use-workspace-id";

interface CreateChannelModalProps { }

export default function CreatChannelModal({ }: CreateChannelModalProps) {

    const workspaceId = useWorkspaceId();
    const [open, setOpen] = useCreateChanneleModal();
    const [name, setName] = useState("");

    const { mutate, isPending } = useCreateChannel();


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // replace white spaces with dashes for channel names
        const value = e.target.value.replace(/\s+/g, "-");
        setName(value);
    };

    const handleClose = () => {
        setName("");
        setOpen(false);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate({ name, workspaceId },
            {
                onSuccess: (id) => {
                    //TODO: redirect to new channel
                    handleClose();
                }
            },
        );
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add a channel</DialogTitle>
                </DialogHeader>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <Input
                        value={name}
                        disabled={false}
                        onChange={handleChange}
                        required
                        autoFocus
                        minLength={3}
                        maxLength={80}
                        placeholder="e.g. plan-budget"
                    />
                    <div className=" flex justify-end">
                        <Button disabled={isPending}
                        >
                            Create
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
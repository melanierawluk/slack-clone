import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";


interface PreferencesModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    initialValue: string;
}

export default function PreferencesModal({ open, setOpen, initialValue }: PreferencesModalProps) {

    const [value, setValue] = useState<string>(initialValue)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {value}
                    </DialogTitle>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
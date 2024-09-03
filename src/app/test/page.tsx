'use client';
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

interface PageProps { }

export default function Page({ }: PageProps) {
    const tasks = useQuery(api.tasks.get);


    return (
        <>
            {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}

        </>
    );
}
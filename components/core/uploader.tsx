"use client";

import { UploadButton } from "@/utils/uploadthing";
import { UploadThingError } from "uploadthing/server";
import { ClientUploadedFileData } from "uploadthing/types";

type Props = {
    onClientUploadComplete: ((res: ClientUploadedFileData<{
        uploadedBy: string;
    }>[]) => Promise<void>) | undefined;

    onUploadError: ((e: UploadThingError<any>) => Promise<void>) | undefined
}

export default function Uploader({ onClientUploadComplete, onUploadError }: Props): JSX.Element {
    return (
        <main className="flex flex-col items-center justify-between">
            <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={onClientUploadComplete}
                onUploadError={(err) => {
                    console.log(err);
                }}
            />
        </main>
    );
}

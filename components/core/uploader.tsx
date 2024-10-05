import { UploadButton } from "@/utils/uploadthing";
import { UploadThingError } from "uploadthing/server";
import { ClientUploadedFileData } from "uploadthing/types";

type Props = {
    onClientUploadComplete: (res: ClientUploadedFileData<{ uploadedBy: string; }>[]) => Promise<void> | void;

    // Use @ts-expect-error to ignore the type error for the UploadThingError
    // @ts-expect-error Ignoring type error due to incompatibility with UploadThingError
    onUploadError: (e: UploadThingError<Json>) => Promise<void> | void;
};

export default function Uploader({ onClientUploadComplete, onUploadError }: Props): JSX.Element {
    return (
        <main className="flex flex-col items-center justify-between">
            <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={onClientUploadComplete}
                onUploadError={onUploadError}
            />
        </main>
    );
}

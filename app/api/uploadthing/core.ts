import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const auth = () => ({ id: "fakeId" });

export const ourFileRouter = {
    imageUploader: f({ image: { maxFileSize: "128MB" }, video: { maxFileSize: "128MB" } })
        .middleware(async () => {
            const user = auth();

            if (!user) throw new UploadThingError("Unauthorized");

            return { userId: user.id };
        })
        .onUploadComplete(async ({ metadata }) => {
            return { uploadedBy: metadata.userId };
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

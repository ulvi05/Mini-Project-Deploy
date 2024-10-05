import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const auth = (_req: Request) => ({ id: "fakeId" }); // Fake auth function

export const ourFileRouter = {
    imageUploader: f({ image: { maxFileSize: "128MB" }, video: { maxFileSize: "128MB" } })
        .middleware(async ({ req: _req }) => {
            const user = auth(_req);

            if (!user) throw new UploadThingError("Unauthorized");

            return { userId: user.id };
        })
        .onUploadComplete(async ({ metadata, file: _file }) => {
            return { uploadedBy: metadata.userId };
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

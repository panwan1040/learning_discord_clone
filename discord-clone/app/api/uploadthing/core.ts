import { auth  } from "@clerk/nextjs";
import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();
 
const hanleAuth = () => {
    const { userId } = auth();
    if (!userId) throw new Error("Unauthorized");
    return { userId: userId };
}
 

export const ourFileRouter = {
    serverImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => hanleAuth())
    .onUploadComplete(() => {}),
    messageFile: f(["image","pdf"])
    .middleware(() => hanleAuth())
    .onUploadComplete(() => {})
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;
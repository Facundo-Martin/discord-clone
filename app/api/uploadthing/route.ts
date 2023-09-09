import { createNextRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

// TODO: Read docs on uploadThing webhook

// Export routes for Next App Router
export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
});

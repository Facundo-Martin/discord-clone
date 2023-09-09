import getInitialProfile from "@/lib/getInitialProfile";
import { prisma } from "@/lib/client";
import { redirect } from "next/navigation";
import CreateServerModal from "@/components/modals/initial-modal";

export default async function SetupPage() {
  const profile = await getInitialProfile();

  const server = await prisma.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return <CreateServerModal />;
}

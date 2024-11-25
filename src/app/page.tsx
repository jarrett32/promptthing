import { HydrateClient } from "~/trpc/server";
import PromptTool from "./promptool";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });

  // void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <PromptTool />
        {/* <LatestPost /> */}
      </main>
    </HydrateClient>
  );
}

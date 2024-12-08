import { HydrateClient } from "~/trpc/server";
import PromptTool from "./promptool";
import Header from "./components/Header";

export default async function Home() {
  return (
    <HydrateClient>
      <div className="flex min-h-screen flex-col bg-gray-900 text-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 xl:max-w-7xl">
          <PromptTool />
        </main>
      </div>
    </HydrateClient>
  );
}

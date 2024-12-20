import { Zap } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-gray-800 bg-black p-6">
      <div className="flex cursor-pointer items-center space-x-2">
        <Zap className="h-8 w-8" />
        <div>
          <h1 className="text-2xl font-bold text-gray-100">
            Prompt Thing
            <span className="ml-2 font-['Pixelify_Sans'] text-2xl text-gray-400">
              v0.1.0
            </span>
          </h1>
          <p className="text-sm text-gray-400">
            Prewritten prompts. Better results.
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2 text-gray-400">
        <span className="text-sm font-medium">
          Contact{" "}
          <a
            className="text-gray-300 underline"
            href="https://github.com/jarrett32"
            target="_blank"
          >
            here
          </a>{" "}
          to support this project!
        </span>
      </div>
    </header>
  );
}

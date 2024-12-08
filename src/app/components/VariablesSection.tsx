import React, { type Dispatch, type SetStateAction } from "react";
import { Input } from "~/components/ui/input";
import { type VarData } from "~/server/types";

interface VariablesSectionProps {
  customVars: VarData[];
  promptVars: VarData[];
  updatePromptVar: (id: string, field: "key" | "value", value: string) => void;
  updateCustomVar: (id: string, field: "key" | "value", value: string) => void;
  newCustomKey: string;
  newCustomValue: string;
  setNewCustomKey: Dispatch<SetStateAction<string>>;
  setNewCustomValue: Dispatch<SetStateAction<string>>;
  handleAddCustomVar: () => void;
}

export default function VariablesSection(props: VariablesSectionProps) {
  const {
    customVars,
    promptVars,
    updatePromptVar,
    updateCustomVar,
    newCustomKey,
    newCustomValue,
    setNewCustomKey,
    setNewCustomValue,
    handleAddCustomVar,
  } = props;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl text-purple-300">Variables</h2>
      <p className="text-sm text-gray-400">
        Inject variables into your prompts.
      </p>

      {promptVars.length > 0 && (
        <div>
          <h3 className="mb-2 text-purple-300">Prompt-Specific Vars</h3>
          {promptVars.map((pv) => (
            <div key={pv.id} className="mb-2 flex items-center space-x-2">
              <Input
                className="w-2/5 bg-gray-700 text-purple-300"
                value={pv.key}
                placeholder="Prompt Var Name"
                onChange={(e) => updatePromptVar(pv.id, "key", e.target.value)}
              />
              <Input
                className="w-3/5 bg-gray-700 text-purple-300"
                value={pv.value}
                placeholder="Prompt Var Value"
                onChange={(e) =>
                  updatePromptVar(pv.id, "value", e.target.value)
                }
              />
            </div>
          ))}
        </div>
      )}

      <div>
        <h3 className="mb-2 text-purple-300">Custom Vars</h3>
        {customVars.map((cv) => (
          <div key={cv.id} className="mb-2 flex items-center space-x-2">
            <Input
              className="w-2/5 bg-gray-700 text-purple-300"
              value={cv.key}
              placeholder="Custom Var Name"
              onChange={(e) => updateCustomVar(cv.id, "key", e.target.value)}
            />
            <Input
              className="w-3/5 bg-gray-700 text-purple-300"
              value={cv.value}
              placeholder="Custom Var Value"
              onChange={(e) => updateCustomVar(cv.id, "value", e.target.value)}
            />
          </div>
        ))}
        <div className="mt-2 flex flex-col items-end sm:flex-row sm:space-x-2">
          <Input
            placeholder="Custom Key"
            value={newCustomKey}
            onChange={(e) => setNewCustomKey(e.target.value)}
            className="w-full bg-gray-700 text-purple-300 sm:w-1/3"
          />
          <Input
            placeholder="Custom Value"
            value={newCustomValue}
            onChange={(e) => setNewCustomValue(e.target.value)}
            className="w-full bg-gray-700 text-purple-300 sm:w-1/3"
          />
          <button
            onClick={handleAddCustomVar}
            className="mt-2 rounded bg-purple-600 px-3 py-1 text-white hover:bg-purple-500 sm:mt-0"
          >
            Add New Variable
          </button>
        </div>
      </div>
    </div>
  );
}

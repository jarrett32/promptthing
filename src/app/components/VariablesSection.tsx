"use client";
import { AlertCircle, Plus } from "lucide-react";
import React, { useState, type Dispatch, type SetStateAction } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { type VarData } from "~/server/types";

interface VariablesSectionProps {
  customVars: VarData[];
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
    updateCustomVar,
    newCustomKey,
    newCustomValue,
    setNewCustomKey,
    setNewCustomValue,
    handleAddCustomVar,
  } = props;

  const [duplicateKeys, setDuplicateKeys] = useState<Set<string>>(new Set());

  const checkDuplicateKeys = (vars: VarData[]) => {
    const keys = vars.map((v) => v.key);
    const duplicates = new Set(
      keys.filter((key, index) => keys.indexOf(key) !== index),
    );
    setDuplicateKeys(duplicates);
  };

  React.useEffect(() => {
    checkDuplicateKeys(customVars);
  }, [customVars]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-100">Variables</h2>
        <p className="text-sm text-gray-400">
          Inject variables into your prompts. Variables with the same key are
          not allowed.
        </p>
      </div>

      <div className="space-y-4">
        {customVars.map((cv) => (
          <div key={cv.id} className="flex items-center space-x-2">
            <Input
              className={`w-2/5 bg-gray-800 text-gray-100 ${
                duplicateKeys.has(cv.key) ? "border-red-500" : "border-gray-700"
              }`}
              value={cv.key}
              placeholder="Variable Name"
              onChange={(e) => updateCustomVar(cv.id, "key", e.target.value)}
            />
            <Input
              className="w-3/5 border-gray-700 bg-gray-800 text-gray-100"
              value={cv.value}
              placeholder="Variable Value"
              onChange={(e) => updateCustomVar(cv.id, "value", e.target.value)}
            />
            {duplicateKeys.has(cv.key) && (
              <AlertCircle className="text-red-500" size={20} />
            )}
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Input
            placeholder="New Variable Name"
            value={newCustomKey}
            onChange={(e) => setNewCustomKey(e.target.value)}
            className="w-2/5 border-gray-700 bg-gray-800 text-gray-100"
          />
          <Input
            placeholder="New Variable Value"
            value={newCustomValue}
            onChange={(e) => setNewCustomValue(e.target.value)}
            className="w-3/5 border-gray-700 bg-gray-800 text-gray-100"
          />
        </div>
        <Button
          onClick={handleAddCustomVar}
          className="w-full bg-gray-700 text-gray-100 hover:bg-gray-600"
        >
          <Plus className="mr-2 h-4 w-4" /> Add New Variable
        </Button>
      </div>
    </div>
  );
}

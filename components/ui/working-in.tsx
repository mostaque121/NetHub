"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { useState } from "react";

interface WorkingInFieldProps {
  value: string[];
  onChange: (value: string[]) => void;
}

export function WorkingInField({ value, onChange }: WorkingInFieldProps) {
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim() && !value.includes(input.trim())) {
      onChange([...value, input.trim()]);
      setInput("");
    }
  };

  const removeItem = (item: string) => {
    onChange(value.filter((i) => i !== item));
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <Input
          placeholder="Add country or region"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault(); // stop form submit
              addItem();
            }
          }}
        />
        <Button type="button" onClick={addItem}>
          Add
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {value.map((item) => (
          <span
            key={item}
            className="flex items-center gap-1 px-3 py-1 rounded-md bg-secondary text-sm"
          >
            {item}
            <button
              type="button"
              onClick={() => removeItem(item)}
              className="hover:text-destructive"
            >
              <X className="w-4 h-4" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

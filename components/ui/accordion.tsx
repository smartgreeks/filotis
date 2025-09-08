"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  id: string;
  question: string;
  answer: React.ReactNode;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = React.useState<string | null>(items[0]?.id ?? null);
  return (
    <div className="divide-y rounded-xl border bg-white">
      {items.map((item) => (
        <div key={item.id}>
          <button
            className={cn("w-full text-left px-4 py-3 font-medium hover:bg-slate-50")}
            onClick={() => setOpen((o) => (o === item.id ? null : item.id))}
            aria-expanded={open === item.id}
            aria-controls={`acc-panel-${item.id}`}
          >
            {item.question}
          </button>
          <div id={`acc-panel-${item.id}`} hidden={open !== item.id} className="px-4 pb-4 text-slate-700">
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}

